import { pageLocalization } from "@/constant/localization";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setOrdersStatus: Dispatch<SetStateAction<boolean | undefined>>;
};

export default function OrdersStatus({ setOrdersStatus }: Props) {
  const changeShowingOrders = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "true") {
      setOrdersStatus(true);
    } else {
      setOrdersStatus(false);
    }
  };

  return (
    <FormControl sx={{ position: "absolute", right: 40, top: 20 }}>
      <RadioGroup row onChange={changeShowingOrders}>
        <FormControlLabel
          value={true}
          control={<Radio />}
          label={pageLocalization.admin.delivered}
        />
        <FormControlLabel
          value={false}
          control={<Radio />}
          label={pageLocalization.admin.notDelivered}
        />
      </RadioGroup>
    </FormControl>
  );
}
