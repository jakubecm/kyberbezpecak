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
    greeting: "Welcome to my blog🛡️",
    description:
      "I write about cybersecurity here — from application security and SSDLC to all sorts of other topics. You can also find some tutorials and practical insights here, or interesting tidbits that I come across. And actually, I find them here, too. That’s why I started this blog. :)",
    readArticles: "Read articles",
    aboutMe: "About me",
    terminalWelcome: "Real programmers don't write documentation. If it was hard to write, it should be hard to understand.",
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
      "Hi! My name is {name}, and this blog serves as my public knowledge base on the world of cybersecurity.",
      "I currently work as an AppSec Engineer at Edhouse, where I handle software security, SSDLC, threat modeling, and, to some extent, DevOps. Previously, I worked as a freelance backend developer, which gave me a solid foundation for looking at code from a security perspective. I earned my bachelor's degree at FIT VUT in Brno and am currently continuing my studies in cybersecurity at FAI UTB.",
      "I write this blog for two main reasons: I want a clear place to track my own progress, and I also believe that the best way to learn is by explaining things to others (the Feynman Technique in practice).",
      "You might be wondering right now — why call it kyberbezpecak (roughly translated as cybersec guy)? It's pretty simple: I like it better than just using milanjakubec.cz, and to my surprise, no one had used this domain yet. Isn't that a shame?",
      "Here you'll find notes, analyses, and insights from my main field—application security—as well as topics I'm exploring to broaden my horizons (e.g., penetration testing), and every now and then, there might just be an article about something that caught my interest. This blog is a record of that journey.",
      "To conclude, I'd just like to add: don't expect infallible expert truths or groundbreaking discoveries in every post. Why? Because I'm not a senior with twenty years of experience. AppSec is a vast field, encompassing many disciplines across computer science. I'm doing my best to be the best AppSec engineer I can be, but I'm still learning — and I'll be learning for the rest of my life."
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
