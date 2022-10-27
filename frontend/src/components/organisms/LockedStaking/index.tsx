import logo from "@Assets/images/molecules/card/sol-token.png";
import {
  CardStaking,
  ICardStakingData
} from "@Components/molecules/CardStaking";
import { Duration } from "@Components/molecules/Duration";
import Pagination from "@Components/molecules/Pagination";
import { loading, unloading } from "@Redux/actions/loading";
import { setModal } from "@Redux/actions/modal";
import { selectPack } from "@Redux/actions/staking";
import { stakingServices } from "@Services/index";
import currency from "currency.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, GridWrapper, Header, PaginationWrapper, Pool } from "./style";

export interface ILockedStakingProps {
  durations: number[];
}

const PAGE_SIZE = 20;
export function LockedStaking(props: ILockedStakingProps) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<number>(props.durations[0]);
  const [packs, setPacks] = useState<ICardStakingData[]>([]);
  const [totalRows, setTotalRows] = useState(0);
  const [page, setPage] = useState(1);
  const [poolStaked, setPoolStaked] = useState<{
    currentStakeValue: number;
    maxPoolValue: number;
  }>();

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleStakeNow = (pack: ICardStakingData) => {
    dispatch(
      setModal({
        modal: "stake-confirm",
        data: { selectedPack: pack, type: 1 }
      })
    );
  };

  const loadPackByDuration = async (
    duration: number,
    page: number,
    limit: number
  ) => {
    dispatch(loading());
    const { data, totalRow } = await stakingServices.getStakingPack(
      duration,
      page,
      limit
    );
    setSelected(duration);
    setTotalRows(totalRow);
    setPacks(data?.packs || []);
    setPoolStaked({
      currentStakeValue: data?.currentStakeValue | 0,
      maxPoolValue: data?.maxPoolValue || 0
    });
    dispatch(unloading());
  };

  useEffect(() => {
    if (props.durations.length > 0) {
      loadPackByDuration(props.durations[0], page, PAGE_SIZE);
    }
  }, [props.durations, page]);

  return (
    <>
      <Header>
        <Pool>
          <span className="label">Pool: </span>
          <span className="value">
            {currency(poolStaked?.currentStakeValue || 0, {
              symbol: "$",
              precision: 0
            }).format()}
            /
            <span className="total">
              {" "}
              {currency(poolStaked?.maxPoolValue || 0, {
                symbol: "$",
                precision: 0
              }).format()}
            </span>
          </span>
        </Pool>
        <Duration
          type="month"
          list={props.durations}
          selected={selected}
          setSelected={(duration: number) =>
            loadPackByDuration(duration, 1, PAGE_SIZE)
          }
        />
      </Header>
      <GridWrapper>
        <Grid>
          {packs.length
            ? packs.map((pack, index) => (
                <CardStaking
                  onClick={handleStakeNow}
                  data={{ ...pack, tvl: poolStaked?.currentStakeValue || 0 }}
                  key={`grid-item-${index}`}
                />
              ))
            : null}
        </Grid>
      </GridWrapper>
      <PaginationWrapper>
        <Pagination
          totalCount={totalRows}
          pageSize={PAGE_SIZE}
          currentPage={page}
          onPageChange={(page: number) => handlePageChange(page)}
        />
      </PaginationWrapper>
    </>
  );
}
