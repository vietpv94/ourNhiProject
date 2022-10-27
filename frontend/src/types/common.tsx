export type CommonFilter = {
  page?: number;
  limit?: number;
  type?: number;
  status?: number;
  keyword?: string;
  fromDate?: string;
  toDate?: string;
};

export type GetChildFilter = {
  depth?: number;
  maxDepth?: number;
  from?: string;
};
