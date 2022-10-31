import ethereum from "@Assets/images/home/header/ethereum.png";
import solana from "@Assets/images/home/header/solana.png";
import pokadot from "@Assets/images/home/header/pokadot.png";
import polygon from "@Assets/images/home/header/polygon.png";
import kusama from "@Assets/images/home/header/kusama.png";
import github from "@Assets/images/home/header/github.png";
import twitter from "@Assets/images/home/header/twitter.png";
import telegram from "@Assets/images/home/header/telegram.png";
import discord from "@Assets/images/home/header/discord.png";
import researchForum from "@Assets/images/home/header/research-forum.png";
import nodeOperator from "@Assets/images/home/header/node-operator.png";
import governanceProcess from "@Assets/images/home/header/governance-process.png";
import lego from "@Assets/images/home/header/lego.png";
import snapshotVoting from "@Assets/images/home/header/snapshot-voting.png";
import aragonVoting from "@Assets/images/home/header/aragon-voting.png";
import easyTrackVoting from "@Assets/images/home/header/easy-track-voting.png";
import duneAnalitycs from "@Assets/images/home/header/dune-analitycs.png";
import tokenTerminal from "@Assets/images/home/header/token-terminal.png";
import nancenAnalytics from "@Assets/images/home/header/nancen-analytics.png";
import blog from "@Assets/images/home/header/blog.png";
export interface DataItemNav {
  name: string;
  type?: number;
  link?: string;
  description?: string;
  icon?: string;
  children?: DataItemNav[];
}
export const dataNavigation: DataItemNav[] = [
  {
    name: "networks",
    type: 1,
    children: [
      {
        name: "Ethereum",
        link: "https://lidofinance/ethereum",
        description: "ETH",
        icon: ethereum,
        type: 1,
      },
      {
        name: "Solana",
        link: "https://lido.fi/solana",
        description: "SOL",
        icon: solana,
        type: 1,
      },
      {
        name: "Kusama",
        link: "https://lido.fi/kusama",
        description: "KSM",
        icon: kusama,
        type: 1,
      },
      {
        name: "Polygon",
        link: "https://lido.fi/polygon",
        description: "MATIC",
        icon: polygon,
        type: 1,
      },
      {
        name: "Polkadot",
        link: "https://lido.fi/polkadot",
        description: "DOT",
        icon: pokadot,
        type: 1,
      },
    ],
  },
  {
    name: "Node operators",
    type: 2,
    children: [
      {
        name: "Node Operator Portal",
        link: "https://operatorportal.lido.fi/",
        description:
          "Consolidated info and resources related to Lido’s Node Operator sets, all in one place",
        icon: nodeOperator,
        type: 2,
      },
      {
        name: "Apply to be a Node Operator",
        link: "https://operatorportal.lido.fi/apply-to-be-a-lido-node-operator",
        description:
          "Explore requirements and apply to be a Lido Node Operator",
        icon: nodeOperator,
        type: 2,
      },
      {
        name: "Existing Lido Operators Resources",
        link: "https://operatorportal.lido.fi/existing-operator-portal",
        description:
          "View details about Lido's expectations for Node Operators",
        icon: nodeOperator,
        type: 2,
      },
    ],
  },
  {
    name: "Governance",
    type: 2,
    children: [
      {
        name: "Research forum",
        link: "https://research.lido.fi/",
        description:
          "Join the forum to find answers or discuss your ideas for Lido",
        icon: researchForum,
        type: 2,
      },
      {
        name: "Governance process",
        link: "https://easytrack.io/lido",
        description:
          "Explore how the decisions in Lido governance process are made",
        icon: governanceProcess,
        type: 2,
      },
      {
        name: "LEGO",
        link: "https://research.lido.fi/t/lido-dao-member-manual/25",
        description: "Explore how Lido Ecosystem Grants Organization grows",
        icon: lego,
        type: 2,
      },
      {
        name: "Snapshot voting",
        link: "https://mainnet.lido.fi/#/lido-dao/",
        description: "Take part in off-chain Snapshot voting",
        icon: snapshotVoting,
        type: 2,
      },
      {
        name: "Aragon voting",
        link: "https://snapshot.org/#/lido-snapshot.eth",
        description: "Explore Lido’s on-chain votes",
        icon: aragonVoting,
        type: 2,
      },
      {
        name: "Easy track voting",
        link: "https://lido.fi/bug-bounty",
        description:
          "Explore Easy Track - a way to make on-chain decisions using veto voting",
        icon: easyTrackVoting,
        type: 2,
      },
    ],
  },
  {
    name: "Analytics",
    type: 1,
    children: [
      {
        name: "Dune Analytics",
        link: "https://dune.com/LidoAnalytical/Lido-Finance-Extended",
        description: "Track current metrics of Lido protocol",
        icon: duneAnalitycs,
        type: 1,
      },
      {
        name: "Token Terminal",
        link: "https://tokenterminal.com/terminal/projects/lido-finance",
        description: "Explore fundamental analysis for crypto",
        icon: tokenTerminal,
        type: 1,
      },
      {
        name: "Nansen Analytics",
        link: "https://pro.nansen.ai/lido",
        description: "Track real-time Lido staking statistics",
        icon: nancenAnalytics,
        type: 1,
      },
    ],
  },
  {
    name: "Developers",
    type: 3,
    children: [
      {
        name: "GitHub",
        link: "https://github.com/lidofinance",
        description: "Connect with the Lido GitHub community and repositories",
        icon: github,
        type: 3,
      },
      {
        name: "stETH integration guide",
        link: "https://docs.lido.fi/",
        type: 3,
      },
      {
        name: "Bug Bounty",
        link: "https://lido.fi/static/Lido:Ethereum-Liquid-Staking.pdf",
        type: 3,
      },
      {
        name: "Documentation",
        link: "https://github.com/lidofinance/audits",
        type: 3,
      },
      {
        name: "Audits",
        link: "",
        type: 3,
      },
    ],
  },
  {
    name: "Community",
    type: 1,
    children: [
      {
        name: "Twitter",
        link: "https://twitter.com/lidofinance",
        icon: twitter,
        type: 1,
      },
      {
        name: "Discord",
        link: "https://discord.com/invite/lido",
        icon: discord,
        type: 1,
      },

      {
        name: "Telegram",
        link: "https://t.me/globalpeacecoin68",
        icon: telegram,
        type: 1,
      },
      {
        name: "Research forum",
        link: "https://www.reddit.com/r/LidoFinance",
        icon: researchForum,
        type: 1,
      },
    ],
  },
  {
    name: "About",
    type: 3,
    children: [
      {
        name: "Blog",
        link: "https://blog.lido.fi/",
        description: "Join our Blog and explore more info about Lido",
        icon: blog,
        type: 3,
      },
      {
        name: "FAQ",
        link: "https://lido.fi/faq",
        type: 3,
      },
      {
        name: "Help Center",
        link: "https://help.lido.fi/",
        type: 3,
      },
      {
        name: "Documentation",
        link: "https://lido.fi/contact",
        type: 3,
      },
      {
        name: "Careers",
        link: "https://careers.lido.fi/",
        type: 3,
      },
      {
        name: "Download press kit",
        link: "https://lido.fi/static/LIDO_press_kit.zip",
        type: 3,
      },
    ],
  },
];
