import OrderDetails from "@/components/cart/Invoice/Invoice";
import PaymentTemplate from "@/components/cart/PaymentTemplate/PaymentTemplate";
import ShippingTemplate from "@/components/cart/ShippingTemplate/ShippingTemplate";
import ShoppingCart from "@/components/cart/ShoppingCartTemplate/ShoppingCartTemplate";
import { useCheckoutStore } from "@/store/checkoutStore";
import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";

export const steps = ["سبد خرید", "نحوه ارسال", "پرداخت"];

export const nextButtonLabels = [
  "رفتن به نحوه ارسال",
  "رفتن به پرداخت",
  "پایان",
];

export default function CartTemplate() {
  const { activeStep, setActiveStep } = useCheckoutStore();

  const [skipped] = useState(new Set<number>());

  const isStepSkipped = (activeStep: number) => {
    return skipped.has(activeStep);
  };

  return (
    <>
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
        <ShoppingCart />
      ) : activeStep === 1 ? (
        <ShippingTemplate />
      ) : (
        <PaymentTemplate />
      )}
    </>
  );
}
