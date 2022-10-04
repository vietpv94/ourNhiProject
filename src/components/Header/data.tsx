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
        name: "Stake with Lido",
        link: "/product/1",
        description: "product 1 description",
      },
      {
        name: "Lido Referral Program",
        link: "/product/2",
        description: "product 2 description",
      },
      {
        name: "Ethereum Referral Terms",
        link: "/product/3",
        description: "product 3 description",
      },
      {
        name: "Solana Referral Terms",
        link: "/product/3",
        description: "product 3 description",
      },
      {
        name: "Lido Ecosystem",
        link: "/product/3",
        description: "product 3 description",
      },
      {
        name: "Dune Analytics",
        link: "/product/3",
        description: "product 3 description",
      },
      {
        name: "Token Terminal",
        link: "/product/3",
        description: "product 3 description",
      },

    ],
  },
  {
    name: "networks",
    children: [
      {
        name: "Ethereum",
        link: "/network/1",
        description: "network 1 description",
      },
      {
        name: "Solana",
        link: "/network/2",
        description: "network 2 description",
      },
      {
        name: "Kusama",
        link: "/network/3",
        description: "network 3 description",
      },
      {
        name: "Polygon",
        link: "/network/3",
        description: "network 3 description",
      },
      {
        name: "Polkadot",
        link: "/network/3",
        description: "network 3 description",
      },
    ],
  },
  {
    name: "Governance",
    children: [
      {
        name: "Forum",
        link: "/Governance/1",
        description: "Governance 1 description",
      },
      {
        name: "Easy Track",
        link: "/Governance/2",
        description: "Governance 2 description",
      },
      {
        name: "User Guide",
        link: "/Governance/3",
        description: "Governance 3 description",
      },
      {
        name: "Lido DAO",
        link: "/Governance/1",
        description: "Governance 1 description",
      },
      {
        name: "Off-chain Voting",
        link: "/Governance/2",
        description: "Governance 2 description",
      },
      {
        name: "Lido Bug Bounty",
        link: "/Governance/3",
        description: "Governance 3 description",
      }, 
      {
        name: "Governance Process",
        link: "/Governance/3",
        description: "Governance 3 description",
      },
    ],
  },
  {
    name: "Developers",
    children: [
      {
        name: "GitHub",
        link: "/Developers/1",
        description: "Developers 1 description",
      },
      {
        name: "Documentation",
        link: "/Developers/2",
        description: "Developers 2 description",
      },
      {
        name: "Primer",
        link: "/Developers/3",
        description: "Developers 3 description",
      },
      {
        name: "Audits",
        link: "/Developers/1",
        description: "Developers 1 description",
      },
    ],
  },
  {
    name: "Community",
    children: [
      {
        name: "Discord",
        link: "/Community/1",
        description: "Community 1 description",
      },
      {
        name: "Twitter",
        link: "/Community/2",
        description: "Community 2 description",
      },
      {
        name: "Telegram",
        link: "/Community/3",
        description: "Community 3 description",
      },
    ],
  },
  {
    name: "About",
    children: [
      {
        name: "Contact Us",
        link: "/About/1",
        description: "About 1 description",
      },
      {
        name: "Blog",
        link: "/About/2",
        description: "About 2 description",
      },
      {
        name: "FAQ",
        link: "/About/3",
        description: "About 3 description",
      },
      {
        name: "Help Center",
        link: "/About/1",
        description: "About 1 description",
      },
      {
        name: "Careers",
        link: "/About/2",
        description: "About 2 description",
      },
      {
        name: "Press Kit",
        link: "/About/3",
        description: "About 3 description",
      },
    ],
  },
];
