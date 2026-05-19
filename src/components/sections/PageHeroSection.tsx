import Badge from "../ui/Badge";
import SectionContainer from "../ui/SectionContainer";

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
    <SectionContainer className="py-14 md:py-18">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <div className="flex flex-wrap gap-2 mb-5">
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
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
