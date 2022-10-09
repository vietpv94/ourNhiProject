import _ from "lodash";
import * as React from "react";
import Pagination from "../Pagination";
import { Footer, TableWrapper } from "./style";

export interface ITableProps {
  header: string[];
  data: any[];
}

let PageSize = 10;

export function Table({ data, header }: ITableProps) {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {header.map((item, index) => (
              <th className={item} key={`thead-tr-${index}`}>
                {_.startCase(item)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data
            .slice((currentPage - 1) * PageSize, currentPage * PageSize)
            .map((item, index) => (
              <tr key={`table-tr-${index}`}>
                {Object.keys(item).map((key, index) => (
                  <td key={`tbody-tr-${index}`}>{item[_.camelCase(key)]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <Footer>
        <span>
          Showing data {data.length > 0 ? (currentPage - 1) * PageSize + 1 : 0}{" "}
          to{" "}
          {data.length > 0 ? Math.min(currentPage * PageSize, data.length) : 0}{" "}
          of {data.length} entries
        </span>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </Footer>
    </TableWrapper>
  );
}
