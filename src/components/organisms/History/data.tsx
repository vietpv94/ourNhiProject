export const dataSortBy = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Amount",
  },
  {
    id: 3,
    name: "Status",
  },
  {
    id: 4,
    name: "Date",
  },
];

export const dataSortTime = [
  {
    id: 1,
    name: "all",
  },

  {
    id: 2,
    name: "This Week",
  },
  {
    id: 3,
    name: "This Month",
  },
  {
    id: 4,
    name: "This Year",
  },
  {
    id: 5,
    name: "today",
  },
];

export interface DataStaking {
  id: string;
  package: number;
  token: string;
  dateOfRegistration: string;
}

export interface DataPayout {
  id: number;
  stakingValue: number;
  value: number;
  createdAt: string;
  currency: number;
}

export interface DataTransaction {
  id: string;
  value: number;
  walletAddress: string;
  status: "success" | "pending" | "failed";
  time: string;
}
