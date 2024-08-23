import { pageLocalization } from "@/constant/localization";
import { ProductType } from "@/types/types";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useGetAllProducts } from "@/api/products/products.queries";

export default function BestSelling() {
  const { data: bestSellingProducts } = useGetAllProducts(10, "");
  return (
    <Box mb={5} p={4}>
      <Stack gap={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5" fontWeight="bold">
            {pageLocalization.home.bestSelling}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            {pageLocalization.home.showAll}
          </Typography>
        </Stack>
        {/* <Swiper
          slidesPerView={5}
          spaceBetween={1}
          navigation={true}
          pagination={{ clickable: true }}
          rewind={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
        > */}
        <Stack direction="row" gap="50px" pb="8px" sx={{ overflowX: "scroll" }}>
          {bestSellingProducts?.data.products.map((product: ProductType) => {
            return (
              // <SwiperSlide key={product._id}>
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
              // </SwiperSlide>
            );
          })}
        </Stack>
        {/* </Swiper> */}
      </Stack>
    </Box>
  );
}
