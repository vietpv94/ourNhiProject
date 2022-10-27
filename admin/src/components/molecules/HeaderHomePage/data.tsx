export interface DataItemNav {
  name: string;
  link?: string;
  description?: string;
  children?: DataItemNav[];
}
export const dataNavigation: DataItemNav[] = [];
