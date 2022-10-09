export interface DataItemNav {
  name: string;
  link?: string;
  description?: string;
  children?: DataItemNav[];
}
export const dataNavigation: DataItemNav[] = [
  {
    name: "product",
    children: [
      {
        name: "App",
        description: "Stake Ethereum with Lido",
      },
      {
        name: "Lido Referral Program",
        link: "/product/2",
        description: "Earn rewards by spreading Lido",
      },
      {
        name: "Lido Ecosystem",
        link: "/product/3",
        description: "Explore apps and services using stETH",
      },
      {
        name: 'Nansen Analytics',
        link: '/product/3',
        description: 'Track real-time Lido staking statistics',
      },
      {
        name: "Dune Analytics",
        link: "/product/3",
        description: "Track current metrics of Lido protocol",
      },
      {
        name: "Token Terminal",
        link: "/product/3",
        description: "Fundamentals for crypto",
      },
      {
        name: "LEGO",
        link: "/product/3",
        description: "Lido’s ecosystem grants initiative",
      },
    ],
  },
  {
    name: "networks",
    children: [
      {
        name: "Ethereum",
      },
      {
        name: "Solana",
      },
      {
        name: "Kusama",
      },
      {
        name: "Polygon",
      },
      {
        name: "Polkadot",
      },
    ],
  },
  {
    name: "Governance",
    children: [
      {
        name: "Forum",
      },
      {
        name: "Easy Track",
      },
      {
        name: "User Guide",
      },
      {
        name: "Lido DAO",
      },
      {
        name: "Off-chain Voting",
      },
      {
        name: "Lido Bug Bounty",
      }, 
      {
        name: "Governance Process",
      },
    ],
  },
  {
    name: "Developers",
    children: [
      {
        name: "GitHub",
      },
      {
        name: "Documentation",
      },
      {
        name: "Primer",
      },
      {
        name: "Audits",
      },
    ],
  },
  {
    name: "Community",
    children: [
      {
        name: "Discord",
      },
      {
        name: "Twitter",
      },
      {
        name: "Telegram",
      },
    ],
  },
  {
    name: "About",
    children: [
      {
        name: "Contact Us",
      },
      {
        name: "Blog",
      },
      {
        name: "FAQ",
      },
      {
        name: "Help Center",
      },
      {
        name: "Careers",
      },
      {
        name: "Press Kit",
      },
    ],
  },
];
