import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useCheckoutStore } from "@/store/checkoutStore";
import { ROUTES } from "@/constant/routes";

const paymentOptions = [
  {
    id: 1,
    name: "کارت بانکی",
    description: "با کارت بانکیتان پرداخت کنید",
    icon: <CreditCardIcon fontSize="large" />,
  },
  {
    id: 2,
    name: "انتقال از شماره حساب",
    description: "از شماره حسابتان انتقال دهید",
    icon: <AccountBalanceIcon fontSize="large" />,
  },
  {
    id: 3,
    name: "پی پال",
    description: "با پی پال پرداخت کنید",
    icon: <PaymentIcon fontSize="large" />,
  },
  {
    id: 4,
    name: "نقدی",
    description: "با پول نقد حساب کنید",
    icon: <LocalAtmIcon fontSize="large" />,
  },
];

interface StyledCardProps {
  selected: boolean;
}

const StyledCard = styled(Card)<StyledCardProps>(({ theme, selected }) => ({
  borderRadius: 16,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s",
  transform: selected ? "scale(1.05)" : "scale(1)",
  border: selected ? `2px solid ${theme.palette.primary.main}` : "none",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const SelectButton = styled(Button)(({ theme }) => ({
  borderRadius: 12,
  background: theme.palette.primary.main,
  color: "#fff",
  fontSize: 20,
}));

export default function Payment() {
  const {
    activeStep,
    setActiveStep,
    paymentOptionsInfo,
    setPaymentOptionsInfo,
  } = useCheckoutStore();
  const [selectedOptionpayment, setSelectedOptionPayment] =
    React.useState<number>(paymentOptionsInfo.selected);

  const [paymentOptionName, setPaymentOptionName] = React.useState<string>(
    paymentOptionsInfo.paymentOptionTitle
  );

  const [paymentDescription, setPaymentDescription] = React.useState<string>(
    paymentOptionsInfo.paymentOptionDescription
  );

  React.useEffect(() => {
    setPaymentOptionsInfo({
      selected: selectedOptionpayment,
      paymentOptionTitle: paymentOptionName,
      paymentOptionDescription: paymentDescription,
    });
  }, [
    selectedOptionpayment,
    paymentOptionName,
    paymentDescription,

    setPaymentOptionsInfo,
  ]);
  const handleSelect = (id: number) => {
    setSelectedOptionPayment(id);
    const selectedPaymentOption = paymentOptions.find(
      (option) => option.id === id
    );
    if (selectedPaymentOption) {
      setPaymentOptionName(selectedPaymentOption.name);
      setPaymentDescription(selectedPaymentOption.description);
      setError("");
    }
  };
  const [error, setError] = React.useState<string>("");

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box sx={{ p: 2, backgroundColor: "#e0f7fa", minHeight: "100vh" }}>
      <Paper
        elevation={3}
        sx={{ p: 4, borderRadius: 4, backgroundColor: "#ffffff" }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ mb: 4, color: "#00796b" }}
        >
          نحوه پرداخت را مشخص نمایید
        </Typography>
        <Grid container spacing={12}>
          {paymentOptions.map((option) => (
            <Grid item xs={12} md={6} key={option.id}>
              <StyledCard selected={selectedOptionpayment === option.id}>
                <CardContent sx={{ textAlign: "center", padding: "24px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 2,
                      color: "#00796b",
                    }}
                  >
                    {option.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ mb: 1, color: "#004d40" }}
                  >
                    {option.name}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, color: "#004d40" }}>
                    {option.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "center", paddingBottom: "16px" }}
                >
                  <SelectButton
                    variant="contained"
                    onClick={() => handleSelect(option.id)}
                    sx={{ mt: 2 }}
                  >
                    {selectedOptionpayment === option.id
                      ? "انتخاب شده"
                      : "انتخاب"}
                  </SelectButton>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
        {error && (
          <Typography
            variant="body2"
            color="error"
            align="center"
            sx={{ mt: 2 }}
          >
            {error}
          </Typography>
        )}
      </Paper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          pt: 2,
          pl: 4,
          pr: 4,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          disabled={activeStep === 0}
          onClick={handleBack}
          startIcon={<ArrowForwardIosIcon />}
        >
          {"برگشت"}
        </Button>
        <Button
          endIcon={<ArrowBackIosNewIcon />}
          variant="contained"
          onClick={() => setActiveStep(0)}
          href={ROUTES.PAYMENT}
        >
          {"پرداخت"}
        </Button>
      </Box>
    </Box>
  );
}
