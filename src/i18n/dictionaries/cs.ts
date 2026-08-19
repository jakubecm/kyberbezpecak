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
    badge: "kyberbezpečnost \u00B7 blog \u00B7 knowledge base",
    greeting: "Vítej na mém blogu🛡️",
    description:
      "Píšu tady o kybernetické bezpečnosti – od aplikační bezpečnosti a SSDLC, přes všechna možná další témata. Můžeš tu najít i nějaké návody a postřehy z praxe, nebo třeba zajímavosti, na které narazím. A vlastně je tady najdu i já. Proto blog vznikl. :)",
    readArticles: "Číst články",
    aboutMe: "O mně",
    terminalWelcome: "Real programmers don't write documentation. If it was hard to write, it should be hard to understand.",
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
      "Ahoj! Jmenuju se {name} a tenhle blog slouží jako moje veřejná knowledge base ze světa kyberbezpečnosti.",
      "Aktuálně pracuju jako AppSec Engineer ve firmě Edhouse, kde řeším bezpečnost softwaru, SSDLC, threat modeling a částečně i DevOps. Dříve jsem vyvíjel backend na volné noze, což mi dalo slušný základ pro to dívat se na kód bezpečnostní optikou. Vystudoval jsem bakaláře na FIT VUT v Brně a v současnosti pokračuju ve studiu kyberbezpečnosti na FAI UTB.",
      "Blog píšu ze dvou hlavních důvodů: chci mít přehledné místo pro trackování vlastního posunu a zároveň věřím, že nejlépe se člověk učí tím, že věci vysvětluje ostatním (Feynmanova technika v praxi).",
      "Možná vás teď napadá - proč kyberbezpečák? Je to celkem jednoduché, líbí se mi to víc než obyčejné milanjakubec.cz a k mému překvapení tu doménu doteď nikdo nevyužíval. No není to škoda?",
      "Najdete tu poznámky, analýzy a postřehy z mé hlavní domény – aplikační bezpečnosti, ale i z témat, kterými si rozšiřuju obzory (např. pentesting), a sem tam se možná prostě objeví článek na něco, co mě zaujalo. Tenhle blog je záznamem téhle cesty.",
      "Závěrem bych jen dodal: nečekejte tu v každém příspěvku neomylné expertní pravdy nebo převratné objevy. Proč? Protože nejsem senior s dvaceti lety praxe. AppSec je obrovský obor, zahrnující spoustu disciplín napříč informatikou. Já dělám maximum pro to, abych byl co nejlepším AppSec inženýrem, ale pořád se učím a celý život budu.",
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
      "Osobní blog o kyberbezpečnosti. Zkušenosti, novinky, zajímavosti a praktické návody z oblasti AppSec a dalších.",
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
