const cs = {
  navbar: {
    home: "Domů",
    blog: "Blog",
    about: "O mně",
    toggleTheme: "Přepnout téma",
    toggleThemeDark: "Přepnout na světlý režim",
    toggleThemeLight: "Přepnout na tmavý režim",
    openMenu: "Otevřít menu",
  },
  home: {
    badge: "kybernetická bezpečnost \u00B7 blog \u00B7 knowledge base",
    greeting: "Ahoj, jsem",
    description:
      "Píšu si tady o kybernetické bezpečnosti – od aplikační bezpečnosti a SSDLC přes různé CTF experimenty. Najdeš tady moje poznámky, návody a postřehy z praxe. A vlastně je tady najdu i já. Proto blog vznikl. :)",
    readArticles: "Číst články",
    aboutMe: "O mně",
    terminalWelcome: "Vítej na kyberbezpecak.cz 🛡️",
    latestArticles: "Nejnovější články",
    allArticles: "Všechny články",
    categories: "Kategorie",
  },
  blog: {
    title: "Blog",
    description:
      "Všechny články na jednom místě. Filtruj podle kategorie nebo vyhledávej podle klíčových slov.",
    searchPlaceholder: "Hledat články...",
    all: "Všechny",
    noResults: "Žádné výsledky",
    found: "Nalezeno",
    articles: "článků",
    inCategory: "v kategorii",
    forQuery: "pro",
    nothingFound: "Nic nenalezeno",
    tryDifferent: "Zkus změnit filtr nebo hledaný výraz.",
    backToBlog: "Zpět na blog",
  },
  about: {
    title: "O mně",
    subtitle: 'Kdo je ten "kyberbezpečák"?',
    terminalCmd: "cat /home/milan/about.txt",
    bioName: "Milan Jakubec",
    bio: [
      "Ahoj! Jmenuju se {name} a tenhle blog slouží jako moje veřejná osobní knowledge base zaměřená na kyber. Aktuálně pracuju ve firmě Edhouse jako AppSec Engineer, kde se věnuju bezpečnosti softwaru a SSDLC (secure software development lifecycle). Předtím jsem rok pracoval jako backend developer na volné noze. Co do studia, aktuálně jsem student kyberbezpečnosti na FAI UTB, předtím jsem vystudoval bakaláře na FIT VUT v Brně.",
      "Rád píšu a psaní mi vždycky docela šlo, všichni víme, že Feynmanova technika funguje a zároveň mi chybí nějaké ucelené místo, s pomocí kterého bych mohl trackovat vlastní progress a mít možnost se vrátít třeba k nějaké starší myšlence nebo problematice. Sdílím tady svoje zkušenosti, poznámky a postřehy z oblasti bezpečnosti – od aplikační bezpečnosti (AppSec), což je přímo moje doména, ale i z oblastí bezpečnosti, o které se třeba zajímám, ale zatím v nich nemám tolik zkušeností, což je třeba pentesting a podobně.",
      "Cílem tohoto blogu je psát o tématech v kyber, co mě zajímají, a zároveň pomoci dalším lidem, kteří se do světa kyberbezpečnosti teprve dostávají, nebo se v něm chtějí zorientovat a něco se dozvědět. Já sám bych takový blog v minulosti ocenil, protože spousta informací je rozesetá po různých fórech, blogách, YouTube kanálech a podobně, a není úplně jednoduché se v tom všem zorientovat.",
    ],
    skills: [
      {
        title: "AppSec",
        desc: "Bezpečnost aplikací, OWASP, code review",
      },
      {
        title: "Red & Blue Team",
        desc: "Ofenzivní i defenzivní bezpečnost",
      },
      {
        title: "CTF & Vzdělávání",
        desc: "Certifikace, self-study",
      },
    ],
    contact: "Kontakt",
    contactDescription:
      "Máš dotaz, feedback nebo nápad na spolupráci? Napiš mi.",
  },
  contact: {
    name: "Jméno *",
    email: "E-mail *",
    subject: "Předmět *",
    message: "Zpráva *",
    send: "Odeslat zprávu",
    sending: "Odesílám...",
    success: "✓ Zpráva byla úspěšně odeslána. Díky!",
    error: "✗ Něco se pokazilo. Zkus to prosím znovu.",
    namePlaceholder: "Jan Novák",
    emailPlaceholder: "jan@email.cz",
    subjectPlaceholder: "Dotaz k článku o...",
    messagePlaceholder: "Tvoje zpráva...",
  },
  newsletter: {
    title: "Zůstaň v obraze",
    description:
      "Přihlaš se k odběru a dostávej nové články přímo do schránky (až se rozhoupu rozchodit napojení na službu ;)).",
    placeholder: "tvuj@email.cz",
    subscribe: "Odebírat",
    success:
      "✓ Díky za přihlášení! (Zatím ti nebude chodít nic, napojení na službu bude snad brzy.)",
  },
  footer: {
    description:
      "Osobní blog o kybernetické bezpečnosti. Sdílím zkušenosti, novinky a praktické návody z oblasti AppSec a dalších.",
    navigation: "Navigace",
    socialNetworks: "Sociální sítě",
    allRightsReserved: "Všechna práva vyhrazena.",
  },
  notFound: {
    title: "404",
    description: "Tato stránka nebyla nalezena.",
    backHome: "Zpět na hlavní stránku",
  },
  pagination: {
    label: "Stránkování",
    previous: "Předchozí stránka",
    next: "Další stránka",
  },
} as const;

export default cs;

export interface Dictionary {
  navbar: {
    home: string;
    blog: string;
    about: string;
    toggleTheme: string;
    toggleThemeDark: string;
    toggleThemeLight: string;
    openMenu: string;
  };
  home: {
    badge: string;
    greeting: string;
    description: string;
    readArticles: string;
    aboutMe: string;
    terminalWelcome: string;
    latestArticles: string;
    allArticles: string;
    categories: string;
  };
  blog: {
    title: string;
    description: string;
    searchPlaceholder: string;
    all: string;
    noResults: string;
    found: string;
    articles: string;
    inCategory: string;
    forQuery: string;
    nothingFound: string;
    tryDifferent: string;
    backToBlog: string;
  };
  about: {
    title: string;
    subtitle: string;
    terminalCmd: string;
    bioName: string;
    bio: readonly string[];
    skills: readonly { title: string; desc: string }[];
    contact: string;
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
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    subscribe: string;
    success: string;
  };
  footer: {
    description: string;
    navigation: string;
    socialNetworks: string;
    allRightsReserved: string;
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
