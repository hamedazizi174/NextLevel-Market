import { useAddCartToOrders } from "@/api/orders/orders.queries";
import { localization } from "@/constant/localization";
import { ROUTES } from "@/constant/routes";
import { useCartStore } from "@/store/useCartStore";
import { useUserStore } from "@/store/userStore";
import { UserType } from "@/types/types";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

export default function PaymentTemplate() {
  const user = useUserStore((state) => state.user);
  const clearCart = useCartStore((state) => state.clearCart);
  const cart = useCartStore((state) => state.cart);
  const userCartIndex = cart.findIndex((item) => item.userId === user?._id);
  const { mutate: addCartToOrdersMutate } = useAddCartToOrders();

  const addCartToOrders = () => {
    const productsArr = cart[userCartIndex].products.map((product) => {
      return {
        product: product.productId,
        count: product.count,
      };
    });
    const order = {
      user: user?._id as string,
      products: productsArr,
      deliveryStatus: false,
    };
    addCartToOrdersMutate(order);
    clearCart(user as UserType);
  };

  return (
    <Dialog open={true}>
      <DialogTitle>{localization.confirmPayment}</DialogTitle>
      <DialogActions>
        <Button
          variant="contained"
          color="success"
          onClick={addCartToOrders}
          href={ROUTES.SUCCESS_PAYMENT}
          fullWidth
        >
          {localization.yes}
        </Button>
        <Button
          variant="contained"
          color="error"
          href={ROUTES.FAIL_PAYMENT}
          fullWidth
        >
          {localization.cancel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
