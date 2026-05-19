type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = ({
  children,
  className = "",
}: SectionContainerProps) => {
  return (
    <section className={`mx-auto max-w-6xl px-4 ${className}`}>
      {children}
    </section>
  );
};

export default SectionContainer;
