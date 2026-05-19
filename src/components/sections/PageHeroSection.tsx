import Badge from "@/components/ui/Badge";
import SectionContainer from "@/components/ui/SectionContainer";

type PageHeroSectionProps = {
  title: string;
  subtitle: string;
  badges?: string[];
};

const PageHeroSection = ({
  title,
  subtitle,
  badges = [],
}: PageHeroSectionProps) => {
  return (
    <SectionContainer className="pt-28 pb-14 md:pt-32 md:pb-18">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-neutral-300 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </SectionContainer>
  );
};

export default PageHeroSection;
