import PublicationCard from "./PublicationCard";

export default function PublicationList({ publications }) {
  // Group by year and sort by year descending
  const groupedByYear = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

  return (
    <div className="space-y-8">
      {sortedYears.map((year) => (
        <div key={year} className="space-y-4">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {year}
          </h2>
          <div className="space-y-3">
            {groupedByYear[year].map((publication) => (
              <PublicationCard
                key={publication.slug}
                publication={publication}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
