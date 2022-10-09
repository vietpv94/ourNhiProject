import * as React from "react";
import Pagination from "../Pagination";
import { TableWrapper } from "./style";

export interface ITableProps {}

let PageSize = 10;

export function Table(props: ITableProps) {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <TableWrapper>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={300}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </TableWrapper>
  );
}
