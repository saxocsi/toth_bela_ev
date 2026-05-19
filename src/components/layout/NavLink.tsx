"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={[
        "text-sm font-medium transition",
        isActive ? "text-white" : "text-neutral-300 hover:text-white",
      ].join(" ")}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
};

export default NavLink;
