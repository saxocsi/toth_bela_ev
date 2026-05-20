type BadgeProps = {
  children: React.ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-neutral-950/70 px-3 py-1 text-xs text-neutral-100 backdrop-blur-md">
      {children}
    </span>
  );
};

export default Badge;
