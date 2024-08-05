import { ResAllProducts } from "@/types/types";
import { Pagination } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  items: ResAllProducts;
};

export default function PaginationCom({ page, setPage, items }: Props) {
  function changePage(event: React.ChangeEvent<unknown>, newPage: number) {
    setPage(newPage);
  }

  return (
    <Pagination
      count={items?.total_pages}
      page={page}
      color="secondary"
      onChange={changePage}
    />
  );
}
