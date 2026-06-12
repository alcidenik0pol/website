"use client";

import Link from "next/link";
import iconMap from "./DemoIcons";

export default function DemoTile({ slug, title, icon }) {
  const IconComponent = iconMap[icon];

  // Extract short title: text after " - " if present, otherwise full title
  const shortTitle = title.includes(" - ")
    ? title.split(" - ").pop()
    : title;

  return (
    <Link href={`/demo/${slug}`} className="group block">
      <div className="h-40 border border-border rounded-lg p-5 transition-colors hover:border-muted-foreground/50">
        {IconComponent && (
          <IconComponent className="w-8 h-8 text-muted-foreground transition-colors group-hover:text-foreground mb-3" />
        )}
        <h3 className="text-sm font-medium transition-colors group-hover:text-foreground">
          {shortTitle}
        </h3>
      </div>
    </Link>
  );
}
