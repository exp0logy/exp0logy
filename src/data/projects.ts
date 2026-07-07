export type Project = {
  name: string;
  status: "Production" | "Completed" | "Demo";
  description: string;
  stack: string[];
  url: string;
  appUrl?: string;
};

export const production: Project[] = [
  {
    name: "TorqueOS",
    status: "Production",
    description:
      "Multi-tenant SaaS platform designed, built, and shipped end to end: React frontend, Node/TypeScript API, Postgres with row-level security, and self-hosted CI/CD to production.",
    stack: ["React", "TypeScript", "Node.js", "Postgres", "Supabase", "Docker"],
    url: "https://torqueos.net",
    appUrl: "https://app.torqueos.net",
  },
  {
    name: "NCMT",
    status: "Production",
    description:
      "Web platform for North Central Midlands Transport, serving real users in production. Built and deployed end to end, from data layer to UI to infrastructure.",
    stack: ["React", "TypeScript", "Node.js", "Postgres"],
    url: "https://ncmt.com.au",
  },
  {
    name: "Metis Ninjas",
    status: "Completed",
    description:
      "NFT minting dapp for the Metis Ninjas collection on the Metis Andromeda L2: wallet connection, automatic network switching, and tiered mint pricing against the collection's smart contract. Project completed; site remains live.",
    stack: ["React", "Redux", "web3.js", "Bootstrap"],
    url: "https://metisninjas.netlify.app",
  },
];

export const demos: Project[] = [
  {
    name: "koji-wav",
    status: "Demo",
    description: "One-page demo site for a fictional sound-design studio.",
    stack: ["React", "Vite"],
    url: "https://koji-wav.netlify.app",
  },
  {
    name: "fake-plumbing",
    status: "Demo",
    description: "Video landing page demo for a fictional Australian plumber.",
    stack: ["React", "Vite"],
    url: "https://fake-plumbing.netlify.app",
  },
];
