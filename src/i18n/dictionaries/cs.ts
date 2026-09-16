export interface ExperienceRole {
  title: string;
  period: string;
  text: string;
}

export interface ExperienceItem {
  period: string;
  current?: boolean;
  title: string;
  meta: string;
  text?: string;
  tags: readonly string[];
  roles?: readonly ExperienceRole[];
}

export interface EducationItem {
  period: string;
  ongoing?: boolean;
  degree: string;
  school: string;
}

export interface Dictionary {
  navbar: {
    articles: string;
    about: string;
    contact: string;
    home: string;
    menu: string;
    closeMenu: string;
    switchToLight: string;
    switchToDark: string;
    switchLanguage: string;
  };
  home: {
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    description: string;
    facts: {
      author: string;
      role: string;
      study: string;
      focus: string;
      status: string;
    };
    factValues: {
      role: string;
      study: string;
      focus: string;
      status: string;
    };
    fullCv: string;
    latest: string;
    allArticles: string;
    empty: string;
  };
  index: {
    id: string;
    date: string;
    title: string;
    category: string;
    reading: string;
  };
  blog: {
    eyebrow: string;
    title: string;
    description: string;
    searchLabel: string;
    searchPlaceholder: string;
    clearSearch: string;
    all: string;
    filterLabel: string;
    noResults: string;
    found: string;
    articles: string;
    inCategory: string;
    forQuery: string;
    nothingFound: string;
    tryDifferent: string;
  };
  article: {
    back: string;
    contents: string;
    category: string;
    published: string;
    updated: string;
    reading: string;
    tags: string;
    share: string;
    copyLink: string;
    copied: string;
  };
  about: {
    title: string;
    metaDescription: string;
    eyebrow: string;
    name: string;
    headline: string;
    bio: readonly string[];
    writeMe: string;
    facts: {
      work: string;
      study: string;
    };
    factValues: {
      work: string;
      study: string;
    };
    sections: {
      experience: string;
      education: string;
      certifications: string;
      skills: string;
      contact: string;
    };
    now: string;
    ongoing: string;
    experience: readonly ExperienceItem[];
    education: readonly EducationItem[];
    certTable: {
      name: string;
      issuer: string;
      issued: string;
      validity: string;
      noExpiry: string;
      expired: string;
    };
    verifyCredly: string;
    skills: readonly { key: string; items: readonly string[] }[];
    contactTitle: string;
    contactDescription: string;
  };
  contact: {
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
  };
  footer: {
    quote: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
  pagination: {
    label: string;
    previous: string;
    next: string;
  };
}

const cs: Dictionary = {
  navbar: {
    articles: "Články",
    about: "O mně",
    contact: "Kontakt",
    home: "Kyberbezpečák – domů",
    menu: "menu",
    closeMenu: "zavřít",
    switchToLight: "Přepnout na světlý režim",
    switchToDark: "Přepnout na tmavý režim",
    switchLanguage: "Switch to English",
  },
  home: {
    titleStart: "Zápisky z ",
    titleAccent: "kyberbezpečnosti",
    titleEnd: ". Hlavně pro mě, klidně i pro tebe.",
    description:
      "Píšu o aplikační bezpečnosti, SSDLC a o všem dalším, na co narazím. Návody, postřehy z praxe a zajímavosti, sepsané tak, abych se k nim mohl vracet.",
    facts: {
      author: "autor",
      role: "role",
      study: "studium",
      focus: "fokus",
      status: "status",
    },
    factValues: {
      role: "AppSec Engineer @ Edhouse",
      study: "Kyberbezpečnost, FAI UTB",
      focus: "SSDLC, threat modeling, DevSecOps",
      status: "pořád se učí",
    },
    fullCv: "celé CV",
    latest: "Index / nejnovější",
    allArticles: "Všechny články",
    empty: "Zatím tu nic není. První článek je na cestě.",
  },
  index: {
    id: "ID",
    date: "Datum",
    title: "Název",
    category: "Kategorie",
    reading: "Čtení",
  },
  blog: {
    eyebrow: "Index / všechny články",
    title: "Články",
    description:
      "Všechno na jednom místě. Hledej podle názvu, popisu nebo tagů.",
    searchLabel: "Hledat v článcích",
    searchPlaceholder: "hledat…",
    clearSearch: "Smazat hledání",
    all: "Vše",
    filterLabel: "Filtrovat podle kategorie",
    noResults: "Žádné výsledky",
    found: "Nalezeno",
    articles: "článků",
    inCategory: "v kategorii",
    forQuery: "pro",
    nothingFound: "Nic nenalezeno",
    tryDifferent: "Zkus změnit filtr nebo hledaný výraz.",
  },
  article: {
    back: "Zpět na články",
    contents: "Obsah",
    category: "kategorie",
    published: "vydáno",
    updated: "upraveno",
    reading: "čtení",
    tags: "tagy",
    share: "sdílet",
    copyLink: "kopírovat odkaz",
    copied: "zkopírováno",
  },
  about: {
    title: "O mně",
    metaDescription:
      "Milan Jakubec – AppSec Engineer. Zkušenosti, vzdělání, certifikace a kontakt.",
    eyebrow: "O mně / CV",
    name: "Milan Jakubec",
    headline: "AppSec Engineer | DevSecOps",
    bio: [
      "Od roku 2025 pracuju jako AppSec inženýr, předtím jsem vyvíjel backend v ASP.NET Core. Snažím se propojovat vývoj, byznys a compliance: integruju bezpečnostní nástroje do CI/CD, ale hlavně se snažím dostat bezpečnost do celého vývojového cyklu.",
      "Nejde mi jen o hledání zranitelností, ale i o to, aby vůbec nevznikaly. Proto se věnuju threat modelingu, architektonickým review a souladu s NIS2 a CRA.",
      "Blog píšu, abych měl přehled o vlastním posunu a protože se nejlépe učím tím, že věci vysvětluju ostatním.",
    ],
    writeMe: "Napiš mi",
    facts: {
      work: "práce",
      study: "studium",
    },
    factValues: {
      work: "Edhouse s.r.o.",
      study: "Ing. Kyberbezpečnost, UTB",
    },
    sections: {
      experience: "Zkušenosti",
      education: "Vzdělání",
      certifications: "Certifikace",
      skills: "Dovednosti",
      contact: "Kontakt",
    },
    now: "nyní",
    ongoing: "probíhá",
    experience: [
      {
        period: "09/2025 – ",
        current: true,
        title: "Application Security Engineer",
        meta: "Edhouse s.r.o. · částečný úvazek · Zlín",
        text: "Pomáhám budovat firemní AppSec tým a zavádět SSDLC. Zákazníkům pomáhám s kyberbezpečností: zabezpečení CI/CD pipeline, SAST nástroje (CodeQL), SSDLC, threat modeling, security analýzy.",
        tags: ["DevSecOps", "SSDLC", "CodeQL", "Threat modeling"],
      },
      {
        period: "08/2024 – 09/2025",
        title: "Backend Developer",
        meta: "Metio Software s.r.o. · freelance · remote",
        text: "Architektura informačních systémů, implementace MVC.",
        tags: ["ASP.NET Core", "Azure DevOps"],
      },
      {
        period: "01/2020 – 08/2022",
        title: "Student Trainee Center",
        meta: "Výběrový program Microsoftu pro studenty",
        text: "Do programu se z velkého počtu uchazečů dostane jen hrstka lidí. Rozvíjí technické dovednosti i soft skills: vedení týmů, projektů a vlastní vzdělávání.",
        tags: ["Azure", "Leadership"],
        roles: [
          {
            title: "Azure Dpt Lead",
            period: "10/2021 – 08/2022",
            text: "Koordinoval jsem dva group leadery v Azure oddělení, každý s týmem zhruba 10 studentů.",
          },
          {
            title: "Azure IT Pro AG Leader",
            period: "03/2021 – 10/2021",
            text: "Vedl jsem tým 8 studentů zaměřený na Azure, Azure Active Directory a Intune.",
          },
          {
            title: "Azure IT Pro AG Student",
            period: "01/2020 – 03/2021",
            text: "Psal jsem články pro blog studuj.digital. Takže tohle není můj první blog.",
          },
        ],
      },
    ],
    education: [
      {
        period: "2025 – 2027",
        ongoing: true,
        degree: "Kybernetická bezpečnost (Ing.)",
        school: "Univerzita Tomáše Bati ve Zlíně, FAI",
      },
      {
        period: "2022 – 2025",
        degree: "Informační technologie (Bc.)",
        school: "Vysoké učení technické v Brně, FIT",
      },
    ],
    certTable: {
      name: "Název",
      issuer: "Vydavatel",
      issued: "Vydáno",
      validity: "Platnost",
      noExpiry: "bez expirace",
      expired: "vypršela",
    },
    verifyCredly: "ověřit na Credly",
    skills: [
      {
        key: "/appsec",
        items: ["SSDLC", "Threat modeling", "Architektonická review", "SAST (CodeQL)", "SBOM"],
      },
      { key: "/devsecops", items: ["Zabezpečení CI/CD", "Azure DevOps", "Azure"] },
      { key: "/compliance", items: ["NIS2", "Cyber Resilience Act"] },
      { key: "/dev", items: ["C# / .NET", "ASP.NET Core", "PHP", "Networking"] },
    ],
    contactTitle: "Dotaz, feedback nebo nápad na spolupráci?",
    contactDescription: "Napiš mi.",
  },
  contact: {
    name: "Jméno",
    email: "E-mail",
    subject: "Předmět",
    message: "Zpráva",
    send: "Odeslat zprávu",
    sending: "Odesílám…",
    success: "Zpráva byla odeslána. Díky!",
    error: "Něco se pokazilo. Zkus to prosím znovu.",
    namePlaceholder: "Jan Novák",
    emailPlaceholder: "jan@email.cz",
    subjectPlaceholder: "Dotaz k článku o…",
    messagePlaceholder: "Tvoje zpráva…",
  },
  footer: {
    quote: "Nejlépe se člověk učí tím, že věci vysvětluje ostatním.",
  },
  notFound: {
    title: "404",
    description: "Tahle stránka neexistuje.",
    backHome: "Zpět na hlavní stránku",
  },
  pagination: {
    label: "Stránkování",
    previous: "Předchozí stránka",
    next: "Další stránka",
  },
};

export default cs;
