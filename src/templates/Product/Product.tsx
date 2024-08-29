import {
  useGetProductById,
  useGetSimilarProducts,
} from "@/api/products/products.queries";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Image from "next/image";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { TOKENS } from "@/constant/general";
import { useRouter } from "next/router";
import { ROUTES } from "@/constant/routes";
import { pageLocalization } from "@/constant/localization";
import { useUserStore } from "@/store/userStore";
import { useCartStore } from "@/store/useCartStore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ProductType } from "@/types/types";
import Comment from "@/components/product/Comment/Comment";

type prop = {
  productId: string;
};

export default function ProductTemplate({ productId }: prop) {
  const isLogin = !!localStorage.getItem(TOKENS.ACCESS);
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const addToCartStore = useCartStore((state) => state.addToCart);
  const [qty, setQty] = useState(1);
  const { data: product } = useGetProductById(productId);
  const { data: similarProducts } = useGetSimilarProducts(
    product?.data.products[0].category._id,
    product?.data.products[0].subcategory._id
  );

  function addToCart() {
    if (isLogin) {
      const cartProduct = {
        userId: user ? user._id : "",
        products: [
          {
            productId: product?.data.products[0]._id,
            name: product?.data.products[0].name,
            price: product?.data.products[0].price,
            image: `http://${product?.data.products[0].images[0]}`,
            count: qty,
          },
        ],
        totalPrice: qty * product?.data.products[0].price,
      };
      addToCartStore(cartProduct);
      toast.success(pageLocalization.cart.addToCartSuccess);
    } else {
      router.push(ROUTES.SIGNIN);
    }
  }

  function increaseQty() {
    if (product.data.products[0] && qty < product.data.products[0]?.quantity) {
      setQty((prev) => (prev += 1));
    } else {
      toast.error("بیشتر از انبار نمیتوان اضافه کرد", {
        className: "bg-red-400 text-white",
        position: "top-left",
      });
    }
  }

  function decreaseQty() {
    if (qty > 1) {
      setQty((prev) => (prev -= 1));
    } else {
      toast.error("کمترین تعداد 1 است", {
        className: "bg-red-400 text-white",
        position: "top-left",
      });
    }
  }

  return (
    <Box component="main" sx={{ py: 5, px: 10 }}>
      {product?.data?.products[0] ? (
        <Paper elevation={5} sx={{ borderRadius: "24px", overflow: "hidden" }}>
          <Stack flexDirection="row" gap={7}>
            <Toaster richColors />
            <Box sx={{ width: "50%" }}>
              <Image
                src={`http://${product?.data?.products[0]?.images[0]}`}
                alt={product?.data?.products[0]?.name}
                width={600}
                height={600}
              />
            </Box>
            <Stack>
              <Typography
                variant="h2"
                fontWeight="900"
                fontSize="2.25rem"
                mt={5}
                mb={4}
              >
                نام محصول : {product?.data?.products[0]?.name}
              </Typography>
              <Typography variant="h2" fontWeight="800" fontSize="2rem" mb={4}>
                نام برند : {product?.data?.products[0]?.brand}
              </Typography>
              <Stack direction="row" mb={3} gap={4}>
                <Typography variant="h2" fontWeight="800" fontSize="2rem">
                  مجموعه : {product?.data?.products[0]?.category.name}
                </Typography>
                <Typography variant="h2" fontWeight="800" fontSize="2rem">
                  زیر مجموعه : {product?.data?.products[0]?.subcategory.name}
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" mb={3}>
                <Typography variant="h5">افزودن به علاقه مندی ها</Typography>
                <IconButton aria-label="wishlist">
                  <FavoriteBorderIcon />
                </IconButton>
              </Stack>
              <Stack direction="row" alignItems="center" gap={2} mb={3}>
                <Typography variant="h5">تعداد :</Typography>
                <IconButton aria-label="remove" onClick={decreaseQty}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="h5">{qty}</Typography>
                <IconButton aria-label="Add" onClick={increaseQty}>
                  <AddIcon />
                </IconButton>
                {product?.data?.products[0]?.quantity === 0 ? (
                  <Typography variant="h5" color={red[500]}>
                    موجود نیست
                  </Typography>
                ) : (
                  <Typography variant="h6">
                    {product?.data?.products[0]?.quantity} عدد درانبار
                  </Typography>
                )}
              </Stack>
              <Stack>
                <Typography variant="h5" mb={3}>
                  9 نظر
                </Typography>
                <Typography variant="h5" mb={3}>
                  {product?.data?.products[0]?.price} تومان
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    py: 1,
                    px: 10,
                    borderRadius: 8,
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    maxWidth: "400px",
                  }}
                  onClick={addToCart}
                  disabled={!product?.data?.products[0]?.quantity}
                >
                  افزودن به سبد خرید
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Typography variant="h5" mb={3} px={4}>
            توضیحات محصول :
          </Typography>
          <Typography variant="body1" fontSize="1.5rem" mb={5} px={4}>
            شرکت هوآوی به عنوان یکی از شرکت‌های مطرح فعال در حوزه تکنولوژی
            شناخته می‌شود و محصولات این شرکت از محبوبیت بالایی برخوردار هستند.
            مانیتور Mateview SE محصول کمپانی Huawei با پوشش 90 درصدی محدوده رنگی
            (90% P3 Gmaut) از نظر وضوح و تطابق رنگی نمایشگری در میان همرده‌های
            خود بی‌رقیب است. این نمایشگر از کمپانی هواوی با برخورداری از
            تکنولوژی تغییر مود رنگی خود می‌تواند برای بازه‌ای از کارهای روزمره
            رنگ و نمای مناسب ارایه نماید. برای مثال می‌توانید برای کار طولانی
            روزانه حالت eBook را فعال کرده تا نمایشگر هواوی نوری همانند خواندن
            از روی کاغذ را برای شما شبیه سازی کند. این مانیتور با قابلیت تنظیم
            درجه در محور افقی و نسبت 92 درصدی پنل به کل صفحه، همچنین زبانه کنترل
            پنج جهته و فرکانس 75 هرتز بر ثانیه به همراه ورودی‌های HDMI و DP به
            همراه طراحی مدرن و نازک آخرین سری محصول کمپانی Huawei است. برند
            هوآوی یک شرکت چینی چندملیتی است که در زمینه فناوری ارتباطات و
            تجهیزات شبکه فعالیت دارد. این شرکت در سال 1987 تأسیس شد و مقر اصلی
            آن در شنژن، چین قرار دارد. از زمان تاسیس، هوآوی به یکی از بزرگترین
            تولیدکنندگان تجهیزات ارتباطی و شبکه در جهان تبدیل شده است. برند
            هوآوی در طی سالیان متمادی توانسته تا تجهیزات متنوعی از جمله تلفن‌های
            همراه، تجهیزات شبکه، مودم‌ها، تجهیزات اینترنت اشیاء (IoT)، تجهیزات
            جدیدتر مانند تلویزیون‌های هوشمند و دستگاه‌های تجربه واقعیت مجازی را
            تولید و به بازار عرضه کند. هوآوی در دهه‌های اخیر به دلیل نوآوری‌های
            خود در زمینه شبکه‌های 5G و تکنولوژی‌های پیشرفته مورد توجه قرار گرفته
            است. این برند به عنوان یکی از بزرگترین شرکت‌های فناوری جهان، تأثیر
            قابل توجهی بر صنعت فناوری و ارتباطات دارد و به عنوان یک موضوع مورد
            توجه در حوزه‌های تجاری، اقتصادی، امنیتی و سیاستی به شمار می‌رود.
            مانیتورها به عنوان اجزای اساسی در تجربه کاری و سرگرمی مدرن اهمیت
            بسزایی دارند. در این بررسی تخصصی، ما به بررسی و ارزیابی مانیتور
            هوآوی Mate View SE Standard Edition با سایز 23.8 اینچ می‌پردازیم.
            این مانیتور با توجه به ویژگی‌ها و عملکرد خود، آیا می‌تواند به یک
            گزینه مناسب برای نیازهای کاربران در زمینه‌های کاری و سرگرمی تبدیل
            شود؟
          </Typography>
        </Paper>
      ) : null}
      <Box mb={5} p={4}>
        <Stack gap={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" fontWeight="bold">
              محصولات مشابه
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {pageLocalization.home.showAll}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            gap="50px"
            pb="8px"
            sx={{ overflowX: "scroll" }}
          >
            {similarProducts?.data?.products?.map((product: ProductType) => {
              return (
                <Card
                  sx={{ borderRadius: 3, minWidth: "230px" }}
                  key={product._id}
                >
                  <CardActionArea>
                    <CardMedia
                      image={`http://${product?.images[0]}`}
                      sx={{
                        height: "256px",
                        width: "230px",
                        transition: "transform 0.5s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h5" fontWeight="600">
                        {product?.name}
                      </Typography>
                      <Typography variant="h5" fontWeight="600">
                        قیمت : {product?.price} تومان
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </Stack>
          <Paper elevation={6} sx={{ p: "20px" }}>
            <Typography variant="h5" mb={3}>
              نظرهای کاربران
            </Typography>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <Comment key={index} />
            ))}
          </Paper>
        </Stack>
      </Box>
    </Box>
  );
}
