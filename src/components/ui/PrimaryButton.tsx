import Link from "next/link";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
};

const PrimaryButton = ({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: PrimaryButtonProps) => {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/40";

  const sizeClass = size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-sm";

  const variantClass =
    variant === "primary"
      ? "bg-white text-black hover:bg-neutral-200"
      : "border border-white/30 text-white hover:bg-white hover:text-black";

  return (
    <Link
      href={href}
      className={[base, sizeClass, variantClass, className].filter(Boolean).join(" ")}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
