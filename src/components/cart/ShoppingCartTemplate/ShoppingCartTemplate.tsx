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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useCheckoutStore } from "@/store/checkoutStore";
import { nextButtonLabels, steps } from "@/templates/Cart/Cart";
import { useCartStore } from "@/store/useCartStore";
import { useUserStore } from "@/store/userStore";
import { AddToCartProductType } from "@/types/types";

export default function ShoppingCart() {
  const { cart, removeFromCart, updateCount } = useCartStore();
  const { user } = useUserStore();
  const userCartIndex = cart.findIndex((item) => item.userId === user?._id);
  const { activeStep, setActiveStep, shoppingCartInfo } = useCheckoutStore();

  const handleNext = () => {
    if (shoppingCartInfo) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box sx={{ px: 4 }}>
      <Grid container spacing={2}>
        {userCartIndex !== -1 ? (
          cart[userCartIndex].products.map((product: AddToCartProductType) => (
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
                <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                  <CardContent>
                    <Typography component="div" variant="h5">
                      {product.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      component="div"
                    >
                      {product.price} تومان
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
                  sx={{ fontSize: "20px", fontWeight: 700 }}
                  onClick={() =>
                    removeFromCart({
                      products: [product],
                      userId: user ? user._id : "",
                      totalPrice: cart[userCartIndex].totalPrice,
                    })
                  }
                >
                  حذف
                </Button>
              </Card>
            </Grid>
          ))
        ) : (
          <Box>محصولی در سبد خرید نیست.</Box>
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
          sx={{ fontSize: "20px", fontWeight: 700 }}
          onClick={handleBack}
          startIcon={<ArrowForwardIosIcon />}
        >
          {activeStep === 0
            ? "برگشت"
            : activeStep === 1
            ? "برگشت به سبد خرید"
            : ` ${nextButtonLabels[activeStep - 2]}`}
        </Button>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          قیمت کل: {cart[userCartIndex]?.totalPrice} تومان
        </Typography>
        <Button
          endIcon={<ArrowBackIosNewIcon />}
          variant="contained"
          sx={{ fontSize: "20px", fontWeight: 700 }}
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
