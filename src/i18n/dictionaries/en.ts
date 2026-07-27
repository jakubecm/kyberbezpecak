import type { Dictionary } from "./cs";

const en: Dictionary = {
  navbar: {
    home: "Home",
    blog: "Blog",
    about: "About",
    toggleTheme: "Toggle theme",
    toggleThemeDark: "Switch to light mode",
    toggleThemeLight: "Switch to dark mode",
    openMenu: "Open menu",
  },
  home: {
    badge: "cybersecurity \u00B7 blog \u00B7 knowledge base",
    greeting: "Hi, I'm",
    description:
      "I write about cybersecurity here \u2013 from application security and SSDLC to various CTF experiments. You'll find my notes, guides and practical insights. And so will I. That's why this blog exists. :)",
    readArticles: "Read articles",
    aboutMe: "About me",
    terminalWelcome: "Welcome to kyberbezpecak.cz 🛡️",
    latestArticles: "Latest articles",
    allArticles: "All articles",
    categories: "Categories",
  },
  blog: {
    title: "Blog",
    description:
      "All articles in one place. Filter by category or search by keywords.",
    searchPlaceholder: "Search articles...",
    all: "All",
    noResults: "No results",
    found: "Found",
    articles: "articles",
    inCategory: "in category",
    forQuery: "for",
    nothingFound: "Nothing found",
    tryDifferent: "Try changing the filter or search term.",
    backToBlog: "Back to blog",
  },
  about: {
    title: "About me",
    subtitle: 'Who is the "kyberbezpečák"?',
    terminalCmd: "cat /home/milan/about.txt",
    bioName: "Milan Jakubec",
    bio: [
      "Hi! My name is {name} and this blog serves as my public personal knowledge base focused on cybersecurity. I currently work at Edhouse as an AppSec Engineer, where I focus on software security and SSDLC (secure software development lifecycle). Before that, I worked as a freelance backend developer for a year. As for education, I'm currently studying cybersecurity at FAI UTB, having previously completed my bachelor's at FIT VUT in Brno.",
      "I enjoy writing and it's always been a strength of mine. We all know the Feynman technique works, and at the same time I've been missing a centralized place where I could track my own progress and be able to return to an older thought or topic. I share my experiences, notes and insights from the security field here \u2013 from application security (AppSec), which is my direct domain, but also from security areas that I'm interested in but don't have as much experience with yet, like pentesting and similar topics.",
      "The goal of this blog is to write about cybersecurity topics that interest me, and at the same time help other people who are just getting into the world of cybersecurity, or want to find their way around and learn something. I would have appreciated such a blog in the past myself, because a lot of information is scattered across various forums, blogs, YouTube channels and so on, and it's not exactly easy to navigate it all.",
    ],
    skills: [
      {
        title: "AppSec",
        desc: "Application security, OWASP, code review",
      },
      {
        title: "Red & Blue Team",
        desc: "Offensive and defensive security",
      },
      {
        title: "CTF & Education",
        desc: "Certifications, self-study",
      },
    ],
    contact: "Contact",
    contactDescription:
      "Got a question, feedback, or an idea for collaboration? Write to me.",
  },
  contact: {
    name: "Name *",
    email: "Email *",
    subject: "Subject *",
    message: "Message *",
    send: "Send message",
    sending: "Sending...",
    success: "✓ Message sent successfully. Thanks!",
    error: "✗ Something went wrong. Please try again.",
    namePlaceholder: "John Doe",
    emailPlaceholder: "john@email.com",
    subjectPlaceholder: "Question about...",
    messagePlaceholder: "Your message...",
  },
  newsletter: {
    title: "Stay in the loop",
    description:
      "Subscribe and get new articles delivered straight to your inbox (once I get around to hooking up the service ;)).",
    placeholder: "your@email.com",
    subscribe: "Subscribe",
    success:
      "✓ Thanks for subscribing! (Nothing will arrive yet, service integration coming soon.)",
  },
  footer: {
    description:
      "Personal blog about cybersecurity. Sharing experiences, news and practical guides from AppSec and beyond.",
    navigation: "Navigation",
    socialNetworks: "Social networks",
    allRightsReserved: "All rights reserved.",
  },
  notFound: {
    title: "404",
    description: "This page was not found.",
    backHome: "Back to homepage",
  },
  pagination: {
    label: "Pagination",
    previous: "Previous page",
    next: "Next page",
  },
};

export default en;
