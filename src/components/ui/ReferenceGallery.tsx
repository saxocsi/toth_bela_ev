"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { type CategoryKey, type ReferenceCategory, type ReferenceItem } from "@/config/siteConfig";
import LightboxModal from "./LightboxModal";

type ReferenceGalleryProps = {
  categories: ReferenceCategory[];
  items: ReferenceItem[];
  enableCategoryFilter?: boolean;
};

const ReferenceGallery = ({
  categories,
  items,
  enableCategoryFilter = true,
}: ReferenceGalleryProps) => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const current = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filteredItems.length) % filteredItems.length,
    );
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  return (
    <div>
      {enableCategoryFilter && (
        <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Kategória szűrő">
          {categories.map((category) => {
            const isActive = category.key === activeCategory;
            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                aria-pressed={isActive}
                className={[
                  "rounded-full px-4 py-2 text-sm border transition",
                  isActive
                    ? "border-white bg-white text-black"
                    : "border-white/15 bg-white/5 text-white hover:bg-white/10",
                ].join(" ")}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            aria-label={`Megnyitás: ${item.alt}`}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/30" />
          </button>
        ))}
      </div>

      <LightboxModal
        isOpen={lightboxIndex !== null}
        imageSrc={current?.src ?? ""}
        imageAlt={current?.alt ?? ""}
        onClose={closeLightbox}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  );
};

export default ReferenceGallery;
