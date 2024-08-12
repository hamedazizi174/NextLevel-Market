import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";
import { useCheckoutStore } from "@/store/checkoutStore";
import { useRef } from "react";
import { nextButtonLabels, steps } from "@/templates/Cart/Cart";

const OrderDetails = () => {
  const { reset } = useCheckoutStore();
  const componentRef = useRef<HTMLDivElement>(null);
  const {
    activeStep,
    shoppingCartInfo,
    personalInfo,
    paymentOptionsInfo,
    shippingInfo,
  } = useCheckoutStore();
  const handleReset = () => {
    reset();
  };
  return (
    <Card>
      <CardContent ref={componentRef}>
        <Typography variant="h4" component="div">
          Order Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h6">Personal Information</Typography>
            <Typography variant="body1">
              <strong>Order ID:</strong> {personalInfo.orderNumber}
            </Typography>
            <Typography variant="body1">
              <strong>First Name:</strong> {personalInfo.firstName}
            </Typography>
            <Typography variant="body1">
              <strong>Last Name:</strong> {personalInfo.lastName}
            </Typography>
            <Typography variant="body1">
              <strong>Phone Number:</strong> {personalInfo.phoneNumber}
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> {personalInfo.address}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Shipping and Payment</Typography>
            <Typography variant="body1">
              <strong>Shipping Name:</strong> {shippingInfo.shippingTitle}
            </Typography>
            <Typography variant="body1">
              <strong>Shipping Description:</strong>{" "}
              {shippingInfo.shippingDescription}
            </Typography>
            <Typography variant="body1">
              <strong>Price:</strong> {shippingInfo.priceSelected}
            </Typography>
            <Typography variant="body1">
              <strong>Payment Name:</strong>{" "}
              {paymentOptionsInfo.paymentOptionTitle}
            </Typography>
            <Typography variant="body1">
              <strong>Payment Description:</strong>{" "}
              {paymentOptionsInfo.paymentOptionDescription}
            </Typography>
            <Typography variant="body1">
              <strong>Total Price:</strong>
            </Typography>
            <Typography variant="body1">
              <strong>Date:</strong> {personalInfo.date}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h5" component="div" style={{ marginTop: "20px" }}>
          Cart Items
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Image</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shoppingCartInfo.map((item) => (
                <TableRow key={item.productId}>
                  <TableCell>
                    <Avatar
                      variant="rounded"
                      src={item.productImage}
                      alt={item.productName}
                    />
                  </TableCell>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.productPrice}</TableCell>
                  <TableCell>{item.productQty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      {activeStep === steps.length && (
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
          <Button variant="contained" href="/" onClick={handleReset}>
            {activeStep === steps.length
              ? "Go To Home"
              : nextButtonLabels[activeStep]}
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              console.log("print");
            }}
          >
            {activeStep === steps.length
              ? "Print"
              : nextButtonLabels[activeStep]}
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default OrderDetails;
