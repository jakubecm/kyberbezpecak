/** Source: https://www.credly.com/users/milanjakubec/badges (newest first) */
export interface Certification {
  name: string;
  issuer: string;
  issued: string;
  expired?: string;
}

export const CERTIFICATIONS: readonly Certification[] = [
  { name: "CCNA: Introduction to Networks", issuer: "Cisco", issued: "02/2026" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco", issued: "04/2021" },
  {
    name: "Microsoft 365 Certified: Enterprise Administrator Expert",
    issuer: "Microsoft",
    issued: "04/2021",
    expired: "04/2023",
  },
  {
    name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    issued: "04/2021",
  },
  {
    name: "Microsoft 365 Certified: Security Administrator Associate",
    issuer: "Microsoft",
    issued: "01/2021",
    expired: "01/2023",
  },
  {
    name: "Microsoft 365 Certified: Teams Administrator Associate",
    issuer: "Microsoft",
    issued: "11/2020",
    expired: "11/2022",
  },
  { name: "Microsoft 365 Certified: Fundamentals", issuer: "Microsoft", issued: "11/2020" },
  { name: "MTA: Introduction to Programming Using Python", issuer: "Microsoft", issued: "06/2020" },
];

export const CREDLY_URL = "https://www.credly.com/users/milanjakubec/badges";
