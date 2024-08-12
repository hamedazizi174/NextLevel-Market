import OrderDetails from "@/components/cart/Invoice/Invoice";
import PaymentTemplate from "@/components/cart/PaymentTemplate/PaymentTemplate";
import ShippingTemplate from "@/components/cart/ShippingTemplate/ShippingTemplate";
import ShoppingCartTemplate from "@/components/cart/ShoppingCartTemplate/ShoppingCartTemplate";
import SpecificationsTemplate from "@/components/cart/SpecificationsTemplate/SpecificationsTemplate";
import { useCheckoutStore } from "@/store/checkoutStore";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";

export const steps = [
  "Cart",
  "Specifications",
  "Shipping",
  "payment",
  "Invoice Preview",
];

export const nextButtonLabels = [
  "Go to Specifications",
  "Go to Shipping",
  "Go to Payment",
  "Go Invoice Preview",
  "Finish",
];

export default function CartTemplate() {
  const { activeStep, setActiveStep } = useCheckoutStore();

  const [skipped] = useState(new Set<number>());

  const isStepSkipped = (activeStep: number) => {
    return skipped.has(activeStep);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 ? (
        <ShoppingCartTemplate />
      ) : activeStep === 1 ? (
        <ShippingTemplate />
      ) : activeStep === 2 ? (
        <PaymentTemplate />
      ) : (
        <OrderDetails />
      )}
    </Box>
  );
}
