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
  "/brands/nike.png",
  "/brands/adidas.png",
  "/brands/levis.jpg",
  "/brands/puma.png",
  "/brands/solomon.jpg",
  "/brands/zara.webp",
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
      <Grid container spacing={8}>
        {brands.map((brand, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card sx={{ borderRadius: 3 }}>
              <CardActionArea>
                <CardMedia
                  image={brand}
                  sx={{
                    height: "100px",
                    // width: "200px",
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
