import { pageLocalization } from "@/constant/localization";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const brands = [
  "/brands/adidas.png",
  "/brands/asos.png",
  "/brands/cotopaxi.png",
  "/brands/hanifa.png",
  "/brands/nike.png",
  "/brands/patagonia.jpg",
  "/brands/raymond.png",
  "/brands/samsung.jpg",
  "/brands/skechers.jpg",
  "/brands/solomon.png",
  "/brands/dell.png",
  "/brands/asus.png",
];

export default function BestBrands() {
  return (
    <Stack gap={3} mt={5} p={4}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          {pageLocalization.home.bestBrand}
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          {pageLocalization.home.showAll}
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {brands.map((brand, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card sx={{ borderRadius: 3 }} elevation={6}>
              <CardActionArea>
                <CardMedia
                  image={brand}
                  sx={{
                    height: "100px",
                    transition: "transform 0.5s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
