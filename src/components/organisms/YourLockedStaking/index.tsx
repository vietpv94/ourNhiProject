import logo from "@Assets/images/molecules/card/sol-token.png";
import {
  YourStakingCard,
  IYourStakingCardData,
} from "@Components/molecules/CardStaking";
import { Duration } from "@Components/molecules/Duration";
import Pagination from "@Components/molecules/Pagination";
import { loading, unloading } from "@Redux/actions/loading";
import { setModal } from "@Redux/actions/modal";
import { stakingServices } from "@Services/index";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, GridWrapper, PaginationWrapper } from "./style";

export interface IYourLockedStakingProps {
  isLocked: boolean;
}
const PAGE_SIZE = 20;

export function YourLockedStaking(props: IYourLockedStakingProps) {
  const [packs, setPacks] = useState<IYourStakingCardData[]>([]);
  const [totalRows, setTotalRows] = useState(0);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleUnStakeNow = (pack: IYourStakingCardData) => {
    dispatch(
      setModal({ modal: "unstake-confirm", data: { selectedPack: pack } })
    );
  };

  const loadPackByDuration = async (isLocked: boolean) => {
    dispatch(loading());
    const { data, totalRow } = await stakingServices.getStakingHistory({
      page,
      limit: PAGE_SIZE,
      status: 1,
      type: isLocked ? 1 : 2,
    });
    setTotalRows(totalRow);
    setPacks(data || []);
    dispatch(unloading());
  };

  useEffect(() => {
    loadPackByDuration(props.isLocked);
  }, [props.isLocked]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <GridWrapper>
        <Grid>
          {packs.length
            ? packs.map((pack, index) => (
                <YourStakingCard
                  onClick={handleUnStakeNow}
                  data={pack}
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
