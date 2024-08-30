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
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState, useEffect } from "react";
import { useCheckoutStore } from "@/store/checkoutStore";
import { nextButtonLabels, steps } from "@/templates/Cart/Cart";

const shippingOptions = [
  {
    id: 1,
    name: "ارسال با ماشین",
    description: "تحویل بعد از 7 روز کاری",
    icon: <LocalShippingIcon fontSize="large" />,
    price: 5,
  },
  {
    id: 2,
    name: "ارسال با هواپیما",
    description: "تحویل بعد از 1 روز کاری",
    icon: <AirplanemodeActiveIcon fontSize="large" />,
    price: 15,
  },
  {
    id: 3,
    name: "تحویل فوری",
    description: "تحویل در همان روز",
    icon: <DirectionsBoatIcon fontSize="large" />,
    price: 25,
  },
  {
    id: 4,
    name: "عدم تعجیل در تحویل",
    description: "تحویل بعد از 10 روز کاری",
    icon: <TwoWheelerIcon fontSize="large" />,
    price: 3,
  },
];

interface StyledCardProps {
  selected: boolean;
}

const StyledCard = styled(Card)<StyledCardProps>(({ theme, selected }) => ({
  borderRadius: 16,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s",
  transform: selected ? "scale(1.05)" : "scale(1) ",
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

const Shipping: React.FC = () => {
  const { shippingInfo, setShippingInfo, activeStep, setActiveStep } =
    useCheckoutStore();
  const [selectedOption, setSelectedOption] = useState<number>(
    shippingInfo.selected
  );

  const [shippingPrice, setShippingPrice] = useState<number>(
    shippingInfo.priceSelected
  );
  const [shippingTitle, setShippingTitle] = useState<string>(
    shippingInfo.shippingTitle
  );
  const [shippingDescription, setShippingDescription] = useState<string>(
    shippingInfo.shippingDescription
  );
  const [error, setError] = useState<string>("");
  useEffect(() => {
    setShippingInfo({
      selected: selectedOption,
      priceSelected: shippingPrice,
      shippingTitle: shippingTitle,
      shippingDescription: shippingDescription,
    });
  }, [
    selectedOption,
    shippingPrice,
    shippingTitle,
    shippingDescription,
    setShippingInfo,
  ]);
  const handleSelect = (id: number) => {
    setSelectedOption(id);
    const selectedShippingOption = shippingOptions.find(
      (option) => option.id === id
    );
    if (selectedShippingOption) {
      setShippingPrice(selectedShippingOption.price);
      setShippingTitle(selectedShippingOption.name);
      setShippingDescription(selectedShippingOption.description);
      setError("");
    }
  };

  const handleNext = () => {
    if (selectedOption) {
      setActiveStep(activeStep + 1);
    } else {
      setError("Please select a Shipping option before proceeding.");
    }
  };

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
          نحوه ارسال بسته را تعیین نمایید
        </Typography>
        <Grid container spacing={12}>
          {shippingOptions.map((option) => (
            <Grid item xs={12} md={6} key={option.id}>
              <StyledCard selected={selectedOption === option.id}>
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
                  <Typography variant="h6" sx={{ mb: 2, color: "#004d40" }}>
                    {option.price} تومان
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
                    {selectedOption === option.id ? "انتخاب شده" : "انتخاب"}
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
          onClick={handleNext}
        >
          {activeStep === steps.length - 1
            ? "پایان"
            : nextButtonLabels[activeStep]}
        </Button>
      </Box>
    </Box>
  );
};

export default Shipping;
