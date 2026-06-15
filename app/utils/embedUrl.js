/**
 * Convert a raw demo URL into an embeddable iframe src.
 * Returns null when no embed is available (triggers placeholder).
 */
export function getEmbedUrl(url, type) {
  if (!url || !type) return null;

  switch (type) {
    case "youtube": {
      const short = url.match(/youtu\.be\/([^?&]+)/);
      if (short) return `https://www.youtube.com/embed/${short[1]}?vq=hd720&rel=0`;
      const match = url.match(/[?&]v=([^&]+)/);
      return match ? `https://www.youtube.com/embed/${match[1]}?vq=hd720&rel=0` : null;
    }
    case "google-drive": {
      return url.replace(/\/view\?.*$/, "/preview");
    }
    case "iframe": {
      return url;
    }
    case "video": {
      return url;
    }
    default:
      return null;
  }
}
