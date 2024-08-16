import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useCheckoutStore } from "@/store/checkoutStore";
import { nextButtonLabels, steps } from "@/templates/Cart/Cart";
import {
  useDeleteCart,
  useGetAllOrders,
  useUpdateCart,
} from "@/api/orders/orders.queries";
import { useCartStore } from "@/store/useCartStore";
import { useUserStore } from "@/store/userStore";
import { AddToCartProductType } from "@/types/types";

export default function ShoppingCart() {
  const { cart, removeFromCart, updateCount } = useCartStore();
  const { user } = useUserStore();
  const userCartIndex = cart.findIndex((item) => item.userId === user?._id);
  const { activeStep, setActiveStep, shoppingCartInfo } = useCheckoutStore();
  // const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (data) {
  //       const fetchPromises = data.map(async (product: any) => {
  //         setProductId(product.productId);
  //         await refetch();
  //         return product.productId;
  //       });
  //       const productIds = await Promise.all(fetchPromises);

  //       const promises = productIds.map((productId: any) =>
  //         getProductByIdApi(productId.toString())
  //       );
  //       const results = await Promise.all(promises);

  //       setLoading(false);

  //       const cartInfo = data.map((product: any, index: number) => ({
  //         productName: product.name,
  //         productImage: product.image,
  //         productPrice: product.price,
  //         productQty: product.qty,
  //         productTotalPrice: product.price * product.qty,
  //         id: productIds[index],
  //         qty: results[index]?.qty,
  //       }));

  //       setShoppingCartInfo(cartInfo);

  //       const calculatedTotalPrice = data.reduce(
  //         (result: any, product: any) => result + product.price * product.qty,
  //         0
  //       );
  //       setTotalPrice(calculatedTotalPrice);
  //     }
  //   };

  //   fetchData();
  // }, [data, setShoppingCartInfo, refetch, productData, productId]);

  const handleNext = () => {
    if (shoppingCartInfo) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const { mutate } = useDeleteCart();

  // const handleRemove = (id: string) => {
  //   mutate(id);
  // };

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {userCartIndex !== -1 ? (
          cart[userCartIndex].products.map(
            (product: AddToCartProductType, index) => (
              <Grid item xs={12} key={product.productId}>
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                    border: 1,
                    boxShadow: 5,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image={product.image}
                    alt={product.name}
                  />
                  <Box
                    sx={{ display: "flex", flexDirection: "column", flex: 1 }}
                  >
                    <CardContent>
                      <Typography component="div" variant="h5">
                        {product.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.primary"
                        component="div"
                      >
                        ${product.price}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 2,
                        pb: 2,
                      }}
                    >
                      <IconButton
                        onClick={() =>
                          updateCount({
                            products: [product],
                            userId: user ? user._id : "",
                            totalPrice: cart[userCartIndex].totalPrice,
                          })
                        }
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ mx: 2 }}>{product.count}</Typography>
                      <IconButton
                        onClick={() =>
                          updateCount({
                            products: [product],
                            userId: user ? user._id : "",
                            totalPrice: cart[userCartIndex].totalPrice,
                          })
                        }
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() =>
                      removeFromCart({
                        products: [product],
                        userId: user ? user._id : "",
                        totalPrice: cart[userCartIndex].totalPrice,
                      })
                    }
                  >
                    Delete
                  </Button>
                </Card>
              </Grid>
            )
          )
        ) : (
          <Box>No products in the cart.</Box>
        )}
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          pt: 2,
          px: 4,
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
          {activeStep === 0
            ? "برگشت"
            : activeStep === 1
            ? "برگشت به سبد خرید"
            : ` ${nextButtonLabels[activeStep - 2]}`}
        </Button>
        <Typography variant="h6">
          Total: ${cart[userCartIndex]?.totalPrice}
        </Typography>
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
}
