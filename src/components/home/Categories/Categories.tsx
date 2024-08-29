import { useGetCategories } from "@/api/categories/categories.queries";
import { pageLocalization } from "@/constant/localization";
import { CategoryType } from "@/types/types";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

export default function Categories() {
  const { data: categories } = useGetCategories();
  return (
    <Box mb={5} p={4}>
      <Stack gap={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5" fontWeight="bold">
            {pageLocalization.home.shopOurTopCategories}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            {pageLocalization.home.allCategories}
          </Typography>
        </Stack>
        <Stack direction="row" gap="70px" pb="8px">
          {categories?.data.categories.map(
            (category: CategoryType, index: number) => {
              return (
                <Card sx={{ borderRadius: 3 }} elevation={6} key={category._id}>
                  <CardActionArea href={`/categories/${category?.name}`}>
                    <CardMedia
                      image={`http://localhost:8000/images/categories/icons/${category?.icon}`}
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
                        {pageLocalization.admin.categoriesArray[index]}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            }
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
