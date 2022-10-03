import { MixBytesIcon } from "./icon/mixbytes";
import { QuantstampIcon } from "./icon/quantstamp";
import { SigmaPrime } from "./icon/sigmaprime";

export interface DataAudits {
  icon: React.ReactNode;
  description: string;
}

export const dataAudits: DataAudits[] = [
  {
    icon: <QuantstampIcon />,
    description:
      "Quantstamp’s mission is to secure the decentralized internet, and has protected over $8B in digital asset risk from hackers. More than 170 startups, foundations and enterprises work with Quantstamp to keep their innovative products safe.",
  },
  {
    icon: <MixBytesIcon />,
    description:
      "MixBytes is a team of experienced developers providing top-notch blockchain solutions, smart contract security audits and tech advisory",
  },
  {
    icon: <SigmaPrime />,
    description:
      "Sigmaprime has an extensive background in information security, blockchain, and system design. Sigmaprime performs in-depth security assessments for decentralised systems, while also researching and developing core blockchain infrastructure.",
  },
];
