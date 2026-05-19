type DividerProps = {
  className?: string;
};

const Divider = ({ className = "" }: DividerProps) => {
  return <div className={`h-px w-full bg-white/10 ${className}`} />;
};

export default Divider;
