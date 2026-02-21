#!/usr/bin/env python3
"""
Approach 2: Screenshot PDF -> Parse
Converts PDF pages to images, then uses OpenRouter vision API to extract text and convert to markdown.
"""

import sys
import os
import base64
import io
import json
from pathlib import Path

try:
    from dotenv import load_dotenv
except ImportError:
    print("Installing python-dotenv...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "python-dotenv"])
    from dotenv import load_dotenv

try:
    import pypdfium2 as pdfium
except ImportError:
    print("Installing pypdfium2...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdfium2"])
    import pypdfium2 as pdfium

try:
    import requests
except ImportError:
    print("Installing requests...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "requests"])
    import requests

try:
    from PIL import Image
except ImportError:
    print("Installing Pillow...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def pdf_to_images(pdf_path):
    """Convert PDF pages to images using pypdfium2."""
    try:
        pdf = pdfium.PdfDocument(str(pdf_path))
        images = []
        
        for page_num in range(len(pdf)):
            page = pdf.get_page(page_num)
            # Render page to image at 300 DPI
            pil_image = page.render(scale=300/72).to_pil()  # 72 is default DPI
            images.append(pil_image)
        
        pdf.close()
        return images
    except Exception as e:
        print(f"Error converting PDF to images: {e}")
        return []

def image_to_base64(image):
    """Convert PIL Image to base64 string."""
    buffered = io.BytesIO()
    image.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode()
    return img_str

def ocr_image_to_text(image, api_key, model="qwen/qwen-2-vl-7b-instruct"):
    """Extract text from image using OpenRouter vision API."""
    try:
        # Convert image to base64
        base64_image = image_to_base64(image)
        print(f"    Image converted to base64 ({len(base64_image)} chars)")
        
        # Prepare API request
        url = "https://openrouter.ai/api/v1/chat/completions"
        headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "HTTP-Referer": "https://github.com",  # Optional but recommended
            "X-Title": "PDF to Markdown Converter"  # Optional
        }
        
        payload = {
            "model": model,
            "messages": [
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": "Extract all text from this PDF page image and format it as markdown. Preserve the structure, formatting, and layout as much as possible. Include headers, bullet points, tables, and any other content exactly as it appears."
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/png;base64,{base64_image}"
                            }
                        }
                    ]
                }
            ],
            "max_tokens": 4000
        }
        
        print(f"    Calling OpenRouter API with model: {model}")
        # Make API request
        response = requests.post(url, headers=headers, json=payload, timeout=60)
        
        # Check response
        if response.status_code != 200:
            print(f"    API returned status {response.status_code}")
            print(f"    Response: {response.text[:500]}")
            response.raise_for_status()
        
        result = response.json()
        
        # Debug: print response structure
        if "choices" not in result:
            print(f"    Unexpected response structure: {list(result.keys())}")
            print(f"    Full response: {json.dumps(result, indent=2)[:500]}")
            return ""
        
        if not result["choices"] or len(result["choices"]) == 0:
            print("    No choices in response")
            return ""
        
        text = result["choices"][0]["message"]["content"]
        print(f"    Successfully extracted {len(text)} characters")
        return text
        
    except requests.exceptions.RequestException as e:
        print(f"    Request error: {e}")
        if hasattr(e, 'response') and e.response is not None:
            try:
                error_detail = e.response.json()
                print(f"    API Error details: {json.dumps(error_detail, indent=2)}")
            except:
                print(f"    Response status: {e.response.status_code}")
                print(f"    Response text: {e.response.text[:500]}")
        return ""
    except Exception as e:
        print(f"    Unexpected error: {type(e).__name__}: {e}")
        import traceback
        traceback.print_exc()
        return ""

def process_pdf_via_screenshot(pdf_path, api_key, model):
    """Process PDF by converting to images and using vision API."""
    print(f"Converting {pdf_path.name} to images...")
    images = pdf_to_images(pdf_path)
    
    if not images:
        return "Error: Could not convert PDF to images."
    
    content_parts = []
    
    for page_num, image in enumerate(images, 1):
        print(f"  Processing page {page_num} via vision API...")
        text = ocr_image_to_text(image, api_key, model)
        
        if text.strip():
            content_parts.append(f"## Page {page_num}\n\n{text}\n")
        else:
            content_parts.append(f"## Page {page_num}\n\n(No text extracted)\n")
    
    return "\n".join(content_parts)

def main():
    # Load environment variables from .env file
    script_dir = Path(__file__).parent
    # Try loading from script directory first, then project root
    env_file = script_dir / ".env"
    if not env_file.exists():
        env_file = script_dir.parent.parent / ".env"
    
    if env_file.exists():
        load_dotenv(env_file)
        print(f"Loaded .env from: {env_file}")
    else:
        # Also try loading from current directory
        load_dotenv()
    
    # Get API key from environment variable
    api_key = os.getenv("OPENROUTER_API_KEY")
    if not api_key:
        print("Error: OPENROUTER_API_KEY environment variable not found.")
        print(f"Please create a .env file in one of these locations:")
        print(f"  - {script_dir / '.env'}")
        print(f"  - {script_dir.parent.parent / '.env'}")
        print(f"  - Current directory")
        print("\nWith the following content:")
        print("OPENROUTER_API_KEY=your-api-key-here")
        sys.exit(1)
    
    # Use a cheap Qwen vision model
    # Alternatives: "qwen/qwen-2-vl-7b-instruct", "google/gemini-flash-1.5", "openai/gpt-4o-mini"
    model = os.getenv("OPENROUTER_VISION_MODEL", "qwen/qwen-2-vl-7b-instruct")
    
    # PDF files to process
    pdf_files = [
        "Tenneroni_Victor_Resume.pdf",
        "Victor Tenneroni - 20251104 Deal Sheet.pdf"
    ]
    
    script_dir = Path(__file__).parent
    output_file = script_dir / "combined_markdown_approach2.md"
    
    all_content = []
    all_content.append("# PDF to Markdown Conversion - Approach 2 (Screenshot/Vision API)\n\n")
    all_content.append(f"This document was generated by converting PDF pages to images and using OpenRouter vision API ({model}) to extract text.\n\n")
    all_content.append("---\n\n")
    
    for pdf_file in pdf_files:
        pdf_path = script_dir / pdf_file
        if not pdf_path.exists():
            print(f"Warning: {pdf_file} not found, skipping...")
            continue
        
        print(f"\nProcessing {pdf_file}...")
        all_content.append(f"# {pdf_file}\n\n")
        
        try:
            content = process_pdf_via_screenshot(pdf_path, api_key, model)
            all_content.append(content)
            all_content.append("\n\n---\n\n")
        except Exception as e:
            print(f"Error processing {pdf_file}: {e}")
            all_content.append(f"Error: {str(e)}\n\n")
            all_content.append("---\n\n")
    
    # Write combined markdown file
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("".join(all_content))
    
    print(f"\nApproach 2 complete! Output saved to: {output_file}")

if __name__ == "__main__":
    main()
