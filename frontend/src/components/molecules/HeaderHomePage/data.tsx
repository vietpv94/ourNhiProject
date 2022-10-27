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
        description: "Stake Solana with Lido",
        link: "https://lidofinance.io/stake",
      },
      {
        name: "Lido Referral Program",
        link: "https://lido.fi/referral",
        description: "Earn rewards by spreading Lido",
      },
      {
        name: "Lido Ecosystem",
        link: "https://lido.fi/lido-ecosystem",
        description: "Explore apps and services using stETH",
      },
      {
        name: "Nansen Analytics",
        link: "https://pro.nansen.ai/lido",
        description: "Track real-time Lido staking statistics",
      },
      {
        name: "Dune Analytics",
        link: "https://dune.com/LidoAnalytical/Lido-Finance-Extended",
        description: "Track current metrics of Lido protocol",
      },
      {
        name: "Token Terminal",
        link: "https://tokenterminal.com/terminal/projects/lido-finance",
        description: "Fundamentals for crypto",
      },
      {
        name: "LEGO",
        link: "https://lego.lido.fi/",
        description: "Lido’s ecosystem grants initiative",
      },
    ],
  },
  {
    name: "networks",
    children: [
      {
        name: "Ethereum",
        link: "https://lidofinance/ethereum",
      },
      {
        name: "Solana",
        link: "https://lido.fi/solana",
      },
      {
        name: "Kusama",
        link: "https://lido.fi/kusama",
      },
      {
        name: "Polygon",
        link: "https://lido.fi/polygon",
      },
      {
        name: "Polkadot",
        link: "https://lido.fi/polkadot",
      },
    ],
  },
  {
    name: "Governance",
    children: [
      {
        name: "Forum",
        link: "https://research.lido.fi/",
      },
      {
        name: "Easy Track",
        link: "https://easytrack.io/lido",
      },
      {
        name: "User Guide",
        link: "https://research.lido.fi/t/lido-dao-member-manual/25",
      },
      {
        name: "Lido DAO",
        link: "https://mainnet.lido.fi/#/lido-dao/",
      },
      {
        name: "Off-chain Voting",
        link: "https://snapshot.org/#/lido-snapshot.eth",
      },
      {
        name: "Lido Bug Bounty",
        link: "https://lido.fi/bug-bounty",
      },
      {
        name: "Governance Process",
        link: "https://lido.fi/governance",
      },
    ],
  },
  {
    name: "Developers",
    children: [
      {
        name: "GitHub",
        link: "https://github.com/lidofinance",
      },
      {
        name: "Documentation",
        link: "https://docs.lido.fi/",
      },
      {
        name: "Primer",
        link: "https://lido.fi/static/Lido:Ethereum-Liquid-Staking.pdf",
      },
      {
        name: "Audits",
        link: "https://github.com/lidofinance/audits",
      },
    ],
  },
  {
    name: "Community",
    children: [
      {
        name: "Discord",
        link: "https://discord.com/invite/lido",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/lidofinance",
      },
      {
        name: "Telegram",
        link: "https://t.me/globalpeacecoin68",
      },
      {
        name: "Reddit",
        link: "https://www.reddit.com/r/LidoFinance",
      },
    ],
  },
  {
    name: "About",
    children: [
      {
        name: "Contact Us",
        link: "mailto:info@lido.fi",
      },
      {
        name: "Blog",
        link: "https://blog.lido.fi/",
      },
      {
        name: "FAQ",
        link: "https://lido.fi/faq",
      },
      {
        name: "Help Center",
        link: "https://help.lido.fi/",
      },
      {
        name: "Careers",
        link: "https://careers.lido.fi/",
      },
      {
        name: "Press Kit",
        link: "https://lido.fi/static/LIDO_press_kit.zip",
      },
    ],
  },
];
