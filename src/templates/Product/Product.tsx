import { useGetProductById } from "@/api/products/products.queries";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { purple, red } from "@mui/material/colors";
import Image from "next/image";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { usePostToCart } from "@/api/orders/orders.queries";
import { TOKENS, USER } from "@/constant/general";
import { useRouter } from "next/router";
import { ROUTES } from "@/constant/routes";
import { pageLocalization } from "@/constant/localization";

type prop = {
  productId: string;
};

export default function ProductTemplate({ productId }: prop) {
  const isLogin = !!localStorage.getItem(TOKENS.ACCESS);
  const router = useRouter();
  // const userStore = useUserStore((state) => state.user);
  const user = JSON.parse(localStorage.getItem(USER) as string);
  const [qty, setQty] = useState(1);
  const { data: product, isLoading, isError } = useGetProductById(productId);
  const { mutate: postToCartMutate } = usePostToCart();

  function addToCart() {
    if (isLogin) {
      console.log(product);
      const cartProduct = {
        user: user._id,
        products: [{ product: product.data.products[0]._id, count: qty }],
        deliveryStatus: false,
      };
      postToCartMutate(cartProduct);
      toast.success(pageLocalization.cart.addToCartSuccess);
    } else {
      router.push(ROUTES.ADMIN);
    }
  }

  function increaseQty() {
    if (product.data.products[0] && qty < product.data.products[0]?.quantity) {
      setQty((prev) => (prev += 1));
    } else {
      toast.error("You Can't Add More Than Stuck", {
        className: "bg-red-400 text-white",
        position: "top-left",
      });
    }
  }

  function decreaseQty() {
    if (qty > 1) {
      setQty((prev) => (prev -= 1));
    } else {
      toast.error("Min Number is 1", {
        className: "bg-red-400 text-white",
        position: "top-left",
      });
    }
  }

  return (
    <Box component="main" sx={{ py: 10, px: 20 }}>
      {isLoading && (
        <Typography variant="h2">
          Loading ... <CircularProgress />
        </Typography>
      )}
      {isError && (
        <Typography variant="h2">Error Something Bad Happend</Typography>
      )}
      {product?.data?.products[0] ? (
        <Paper elevation={5} sx={{ borderRadius: "24px" }}>
          <Stack flexDirection="row" flexWrap="wrap">
            <Toaster richColors />
            <Box position="relative" sx={{ width: "50%" }}>
              <Image
                style={{ flexGrow: 1, borderRadius: "24px 0 0 24px" }}
                src={`http://${product?.data?.products[0]?.images[0]}`}
                alt={product?.data?.products[0]?.name}
                fill
                objectFit="cover"
              />
            </Box>
            <Box
              sx={{
                paddingInlineStart: { lg: 24 },
                width: { lg: "50%" },
              }}
            >
              <Typography
                variant="h2"
                fontWeight="900"
                fontSize="2.25rem"
                mt={3}
                mb={3}
              >
                {product?.data?.products[0]?.name}
              </Typography>
              <Typography variant="body1" mb={5} color="#6b7280">
                {product?.data?.products[0]?.description}
              </Typography>
              <Typography variant="h5" mb={2}>
                Quantity
              </Typography>
              <Stack direction="row" alignItems="center" gap={2}>
                <IconButton aria-label="remove" onClick={decreaseQty}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="h5">{qty}</Typography>
                <IconButton aria-label="Add" onClick={increaseQty}>
                  <AddIcon />
                </IconButton>
                {product?.data?.products[0]?.quantity === 0 ? (
                  <Typography variant="h5" color={red[500]}>
                    Out Of Stuck
                  </Typography>
                ) : (
                  <Typography variant="body2">
                    {product?.data?.products[0]?.quantity} in Stuck
                  </Typography>
                )}
              </Stack>
              <Stack py={3} pr={3}>
                <Typography variant="h3" fontSize="1.875rem" mb={1}>
                  ${product?.data?.products[0]?.price?.toFixed(2)}
                </Typography>
                {/* reviews */}
                <Stack flexDirection="row" mb={3}>
                  <Typography variant="body2" marginInlineStart={2}>
                    603 reviews
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  sx={{
                    py: 1,
                    px: 10,
                    borderRadius: 8,
                    bgcolor: "#9333ea",
                    color: "white",
                    ":hover": {
                      bgcolor: purple[600],
                    },
                  }}
                  onClick={addToCart}
                  disabled={!product?.data?.products[0]?.quantity}
                >
                  Add to cart
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Paper>
      ) : null}
    </Box>
  );
}
