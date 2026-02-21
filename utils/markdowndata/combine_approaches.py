#!/usr/bin/env python3
"""
Combine outputs from both approaches into a single markdown file.
"""

from pathlib import Path

def main():
    script_dir = Path(__file__).parent
    
    approach1_file = script_dir / "combined_markdown_approach1.md"
    approach2_file = script_dir / "combined_markdown_approach2.md"
    output_file = script_dir / "combined_markdown.md"
    
    combined_content = []
    combined_content.append("# PDF to Markdown Conversion - Combined Results\n\n")
    combined_content.append("This document contains the results from two independent conversion approaches:\n")
    combined_content.append("1. **Approach 1**: Direct PDF text extraction using pdfplumber\n")
    combined_content.append("2. **Approach 2**: Screenshot/OCR using OpenRouter vision API\n\n")
    combined_content.append("---\n\n")
    
    # Add Approach 1 content
    if approach1_file.exists():
        combined_content.append("# Approach 1: Direct PDF Reading\n\n")
        with open(approach1_file, "r", encoding="utf-8") as f:
            content = f.read()
            # Skip the header since we're adding our own
            lines = content.split("\n")
            # Skip first 3 lines (header)
            combined_content.append("\n".join(lines[3:]))
        combined_content.append("\n\n---\n\n")
    else:
        combined_content.append("# Approach 1: Direct PDF Reading\n\n")
        combined_content.append("(Approach 1 output not found)\n\n")
        combined_content.append("---\n\n")
    
    # Add Approach 2 content
    if approach2_file.exists():
        combined_content.append("# Approach 2: Screenshot/Vision API\n\n")
        with open(approach2_file, "r", encoding="utf-8") as f:
            content = f.read()
            # Skip the header since we're adding our own
            lines = content.split("\n")
            # Skip first 3 lines (header)
            combined_content.append("\n".join(lines[3:]))
    else:
        combined_content.append("# Approach 2: Screenshot/Vision API\n\n")
        combined_content.append("(Approach 2 output not found)\n\n")
    
    # Write combined file
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("".join(combined_content))
    
    print(f"Combined markdown file created: {output_file}")

if __name__ == "__main__":
    main()
