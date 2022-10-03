export interface ItemNav {
  name: string;
  link?: string;
  description?: string;
  children?: ItemNav[];
}
export const dataNavigation: ItemNav[] = [
  {
    name: "product",
    children: [
      {
        name: "product 1",
        link: "/product/1",
        description: "product 1 description",
      },
      {
        name: "product 2",
        link: "/product/2",
        description: "product 2 description",
      },
      {
        name: "product 3",
        link: "/product/3",
        description: "product 3 description",
      },
    ],
  },
  {
    name: "networks",
    children: [
      {
        name: "network 1",
        link: "/network/1",
        description: "network 1 description",
      },
      {
        name: "network 2",
        link: "/network/2",
        description: "network 2 description",
      },
      {
        name: "network 3",
        link: "/network/3",
        description: "network 3 description",
      },
    ],
  },
  {
    name: "Governance",
    children: [
      {
        name: "Governance 1",
        link: "/Governance/1",
        description: "Governance 1 description",
      },
      {
        name: "Governance 2",
        link: "/Governance/2",
        description: "Governance 2 description",
      },
      {
        name: "Governance 3",
        link: "/Governance/3",
        description: "Governance 3 description",
      },
    ],
  },
  {
    name: "Developers",
    children: [
      {
        name: "Developers 1",
        link: "/Developers/1",
        description: "Developers 1 description",
      },
      {
        name: "Developers 2",
        link: "/Developers/2",
        description: "Developers 2 description",
      },
      {
        name: "Developers 3",
        link: "/Developers/3",
        description: "Developers 3 description",
      },
    ],
  },
  {
    name: "Community",
    children: [
      {
        name: "Community 1",
        link: "/Community/1",
        description: "Community 1 description",
      },
      {
        name: "Community 2",
        link: "/Community/2",
        description: "Community 2 description",
      },
      {
        name: "Community 3",
        link: "/Community/3",
        description: "Community 3 description",
      },
    ],
  },
  {
    name: "About",
    children: [
      {
        name: "About 1",
        link: "/About/1",
        description: "About 1 description",
      },
      {
        name: "About 2",
        link: "/About/2",
        description: "About 2 description",
      },
      {
        name: "About 3",
        link: "/About/3",
        description: "About 3 description",
      },
    ],
  },
];
