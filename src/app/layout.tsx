import "@/styles/globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { absoluteUrl } from "@/lib/url";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import MobileStickyCtaBar from "@/components/layout/MobileStickyCallButton";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: "Kőműves Budapest | Burkoló | Generál kivitelezés – Tóth Bela EV",
    template: "%s – Tóth Bela EV",
  },
  description:
    "Tóth Bela EV – kőműves, burkoló és generál kivitelezés Budapest és környéke területén. 30+ év tapasztalat, pontos határidők, prémium kivitelezés.",
  keywords: [...siteConfig.keywordsFocus],
  openGraph: {
    title: "Kőműves Budapest | Burkoló | Generál kivitelezés",
    description:
      "30+ év tapasztalat. Professzionális kivitelezés Budapest és környékén.",
    type: "website",
    url: absoluteUrl("/"),
    images: [{ url: absoluteUrl(siteConfig.site.defaultOgImage) }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kőműves Budapest | Burkoló | Generál kivitelezés",
    description:
      "Tóth Bela EV – professzionális kivitelezés Budapest és környékén.",
    images: [absoluteUrl(siteConfig.site.defaultOgImage)],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body>
        <SiteHeader />
        <main className="min-h-[70vh]">{children}</main>
        <SiteFooter />
        <MobileStickyCtaBar />
      </body>
    </html>
  );
}
