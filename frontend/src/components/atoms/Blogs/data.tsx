import one from "@Assets/images/home/blogs/1.png";
import two from "@Assets/images/home/blogs/2.png";
import three from "@Assets/images/home/blogs/3.png";

export interface DataBlogs {
  title: string;
  image: string;
  time: string;
}

export const data: DataBlogs[] = [
  {
    title: "Polkadot & Kusama APR UI Update",
    image: one,
    time: "September 10, 2022",
  },
  {
    image: two,
    title: "Additions to the Lido on Solana Node Operator Set - Wave 3",
    time: "September 10, 2022",
  },
  {
    image: three,
    title: "The Ethereum Merge - FAQ",
    time: "September 10, 2022",
  },
];
