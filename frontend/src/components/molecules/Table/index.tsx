import { breakpoints } from "@Utils/theme";
import _ from "lodash";
import * as React from "react";
import { useCallback } from "react";
import { useMedia } from "react-use";
import Pagination from "../Pagination";
import { Footer, TableWrapper } from "./style";

export interface ITableProps {
  header: string[];
  data: any[];
  total: number;
  onMovePage: (page: number) => void;
}

let PageSize = 10;

export function Table({ data, total, header, onMovePage }: ITableProps) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const isMobile = useMedia(breakpoints.xs);
  const handlePageChange = (page: number) => {
    onMovePage(page);
    setCurrentPage(page);
  };

  const renderData = useCallback(() => {
    if (!data) return <></>;
    return data.map((item, index) => (
      <tr key={`table-tr-${index}`}>
        {Object.keys(item).map((key, index) => (
          <td key={`tbody-tr-${index}`}>{item[_.camelCase(key)]}</td>
        ))}
      </tr>
    ));
  }, [data]);

  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {header.map((item, index) => (
              <th className={item} key={`thead-tr-${index}`}>
                {item === "date of registration" && isMobile
                  ? "Time"
                  : _.startCase(item)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </table>
      <Footer>
        <span>
          Showing data {data.length > 0 ? (currentPage - 1) * PageSize + 1 : 0}{" "}
          to{" "}
          {data.length > 0 ? Math.min(currentPage * PageSize, data.length) : 0}{" "}
          of {total} entries
        </span>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={total}
          pageSize={PageSize}
          onPageChange={(page: number) => handlePageChange(page)}
        />
      </Footer>
    </TableWrapper>
  );
}
