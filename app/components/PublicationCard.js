import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";

export default function PublicationCard({ publication }) {
  const { title, description, year, type, externalUrl, exit, exitAmount, ipo, ipoAmount } = publication;

  const typeLabel = type === "investment" ? "Investment" : "Engineering";

  return (
    <div className="group flex items-start justify-between gap-4 py-2 border-b border-border/50 last:border-0">
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="outline" className="text-xs px-1.5 py-0 font-normal">
            {year}
          </Badge>
          {type && (
            <Badge variant="secondary" className="text-xs px-1.5 py-0 font-normal">
              {typeLabel}
            </Badge>
          )}
          {exit && (
            <Badge variant="outline" className="text-xs px-1.5 py-0 font-normal">
              Exit → {exit}
              {exitAmount && ` · ${exitAmount}`}
            </Badge>
          )}
          {ipo && (
            <Badge variant="outline" className="text-xs px-1.5 py-0 font-normal">
              IPO → {ipo}
              {ipoAmount && ` · ${ipoAmount}`}
            </Badge>
          )}
        </div>
        {externalUrl ? (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-foreground group-hover:text-primary transition-colors"
          >
            {title}
          </a>
        ) : (
          <h2 className="text-base font-medium text-foreground">
            {title}
          </h2>
        )}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      {externalUrl && (
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors mt-1"
          aria-label="External link"
        >
          <ArrowUpRight className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}
