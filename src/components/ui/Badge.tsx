type BadgeProps = {
  children: React.ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200">
      {children}
    </span>
  );
};

export default Badge;
