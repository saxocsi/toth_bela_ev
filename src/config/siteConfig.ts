export type ServiceItem = {
  title: string;
  shortDescription: string;
  longDescription: string;
  slug: "burkolas" | "komuves" | "general";
};

export type TestimonialItem = {
  name: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CategoryKey = "all" | "furdo" | "konyha" | "terasz" | "homlokzat";

export type ReferenceCategory = {
  key: CategoryKey;
  label: string;
};

export type ReferenceItem = {
  src: string;
  alt: string;
  category: Exclude<CategoryKey, "all">;
};

export const siteConfig = {
  company: {
    name: "Tóth Bela EV",
    area: "Budapest és környéke",
    phone: "06308643295",
    email: "krishigh123@gmail.com",
    experienceLine: "1990 óta a szakmában • 30+ év tapasztalat",
    brandLine:
      "Prémium kivitelezés, pontos határidők, rugalmas és profi csapat.",
  },

  keywordsFocus: [
    "kőműves Budapest",
    "burkoló Budapest",
    "generál kivitelezés Budapest",
    "Budapest és környéke",
  ],

  whyChooseUs: [
    "30+ év szakmai tapasztalat (1990 óta)",
    "Pontos határidő és megbízható kivitelezés",
    "Garanciális vállalás (igény szerint számlával)",
    "Tiszta, rendezett munkavégzés",
    "Rugalmas, erős, profi csapat",
    "Ingyenes egyeztetés és felmérés (megbeszélés alapján)",
  ],

  services: [
    {
      title: "Burkolás",
      shortDescription:
        "Fürdőszoba, konyha, terasz – hideg- és melegburkolás prémium kivitelezéssel.",
      longDescription:
        "Vállalunk teljes burkolási munkát: aljzat előkészítés, vízszigetelés, fal- és padlóburkolás, fugázás, szegélyezés. Kiemelten figyelünk a pontos szintezésre, esztétikus kiosztásra és tartós végeredményre.",
      slug: "burkolas",
    },
    {
      title: "Kőműves munkák",
      shortDescription:
        "Szerkezetépítés, falazás, betonozás, térkövezés, hőszigetelés – korrekt minőségben.",
      longDescription:
        "Komplett kőműves feladatok: falazás, vakolás, betonozás, javítások, nyíláskiváltás, alapozás, szerkezet építés. Kültéren térkövezés, járda, lépcső és egyéb kerti építmények. Igény szerint hőszigetelés és felületképzés.",
      slug: "komuves",
    },
    {
      title: "Generál kivitelezés",
      shortDescription:
        "Teljes körű kivitelezés az alapoktól a kész átadásig – egy kézben, átláthatóan.",
      longDescription:
        "Generál kivitelezés keretében koordináljuk a munkafolyamatokat: felmérés, tervezési egyeztetés, ütemezés, anyagok, kivitelezés és átadás. Célunk a gyors, precíz és stresszmentes megoldás – Budapest és környékén.",
      slug: "general",
    },
  ] as ServiceItem[],

  workflowSteps: [
    {
      title: "Felmérés",
      description:
        "Telefonon egyeztetünk, majd helyszíni felmérés alapján pontosítjuk a feladatot.",
    },
    {
      title: "Ajánlat",
      description:
        "Átlátható ajánlatot adunk – határidővel, anyag- és munkadíj bontással.",
    },
    {
      title: "Kivitelezés",
      description:
        "Pontos ütemezés, tiszta munkavégzés, prémium minőség és megbízható átadás.",
    },
  ],

  serviceAreaList: [
    "Budapest I–XXIII. kerület",
    "Budaörs",
    "Érd",
    "Diósd",
    "Törökbálint",
    "Biatorbágy",
    "Dunakeszi",
    "Szentendre",
    "Gödöllő",
    "Vecsés",
  ],

  references: {
    categories: [
      { key: "all", label: "Összes" },
      { key: "furdo", label: "Fürdő" },
      { key: "konyha", label: "Konyha" },
      { key: "terasz", label: "Terasz" },
      { key: "homlokzat", label: "Homlokzat" },
    ] as ReferenceCategory[],
    items: [
      {
        src: "/images/references/ref1.jpg",
        alt: "Referencia 1",
        category: "furdo",
      },
      {
        src: "/images/references/ref2.jpg",
        alt: "Referencia 2",
        category: "konyha",
      },
      {
        src: "/images/references/ref3.jpg",
        alt: "Referencia 3",
        category: "terasz",
      },
      {
        src: "/images/references/ref4.jpg",
        alt: "Referencia 4",
        category: "homlokzat",
      },
      {
        src: "/images/references/ref1.jpg",
        alt: "Referencia 5",
        category: "furdo",
      },
      {
        src: "/images/references/ref2.jpg",
        alt: "Referencia 6",
        category: "konyha",
      },
    ] as ReferenceItem[],
  },

  testimonials: [
    {
      name: "Kovács Péter",
      text: "Precíz, gyors és korrekt csapat. A határidőt tartották, a végeredmény nagyon igényes lett.",
    },
    {
      name: "Nagy Ildikó",
      text: "Rugalmas egyeztetés, profi munkavégzés. Minden lépés átlátható volt, ajánlom.",
    },
    {
      name: "Szabó Gábor",
      text: "Tiszta munka, minőségi anyagok, korrekt hozzáállás. Végig azt kaptuk, amit ígértek.",
    },
  ] as TestimonialItem[],

  faq: [
    {
      question: "Mennyi idő alatt adtok ajánlatot?",
      answer:
        "A felmérés/egyeztetés után jellemzően 24–72 órán belül küldünk ajánlatot a munka összetettségétől függően.",
    },
    {
      question: "Vállaltok kisebb javításokat is?",
      answer:
        "Igen, kisebb kőműves és burkolási javításokat is vállalunk – érdemes telefonon egyeztetni.",
    },
    {
      question: "Budapesten kívül is dolgoztok?",
      answer:
        "Igen, Budapest agglomerációjában is vállalunk munkát – a pontos címtől és projekttől függően.",
    },
    {
      question: "Van garancia?",
      answer:
        "Igen, a kivitelezésre garanciát vállalunk. A részleteket az ajánlatban rögzítjük.",
    },
  ] as FaqItem[],

  contact: {
    offerEmailSubject: "Árajánlatkérés – Tóth Bela EV",
    offerEmailBody:
      "Kedves Tóth Béla!\n\nSzeretnék árajánlatot kérni.\n\nHelyszín (cím):\nMunka típusa (burkolás/kőműves/generál):\nRövid leírás:\nHatáridő elképzelés:\n\nKöszönöm!\nNév:\nTelefonszám:\n",
  },

  site: {
    urlFallback: "http://localhost:3000",
    defaultOgImage: "/og-default.png",
  },
} as const;
