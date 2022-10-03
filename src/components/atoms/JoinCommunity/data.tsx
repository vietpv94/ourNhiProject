import { BlogIcon } from "./icon/blog";
import { DiscordIcon } from "./icon/discord";
import { GithubIcon } from "./icon/github";
import { ResearchIcon } from "./icon/research";
import { TelegramIcon } from "./icon/telegram";
import { TwitterIcon } from "./icon/twitter";

export interface DataJoinCommunity {
  title: string;
  description: string;
  icon: (isHover: boolean) => React.ReactNode;
  color: string;
}

export const data: DataJoinCommunity[] = [
  {
    title: "Telegram",
    description: "Join the community",
    icon: (isHover: boolean) => <TelegramIcon isHover={isHover} />,
    color: "#2A3751",
  },
  {
    title: "Twitter",
    description: "Twitter",
    icon: (isHover: boolean) => <TwitterIcon isHover={isHover} />,
    color: "#00A3FF",
  },
  {
    title: "Discord",
    description: "Ask questions",
    icon: (isHover: boolean) => <DiscordIcon isHover={isHover} />,
    color: "#4A65EF",
  },
  {
    title: "Github",
    description: "Contribute to the codebase",
    icon: (isHover: boolean) => <GithubIcon isHover={isHover} />,
    color: "#FDB393",
  },
  {
    title: "Research forum",
    description: "Stay updated",
    icon: (isHover: boolean) => <ResearchIcon isHover={isHover} />,
    color: "#00A3FF",
  },
  {
    title: "Blog",
    description: "Learn about Lido the codebase",
    icon: (isHover: boolean) => <BlogIcon isHover={isHover} />,
    color: "#2A3751",
  },
];
