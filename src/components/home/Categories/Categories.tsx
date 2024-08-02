import { useGetCategories } from "@/api/categories/categories.queries";
import { pageLocalization } from "@/constant/localization";
import { CategoryType } from "@/types/types";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const { data: categories, isLoading, isError } = useGetCategories();
  return (
    <Box component="section" mb={5} p={4}>
      {isLoading && <Typography variant="h6">Loading ...</Typography>}
      {isError && <Typography variant="h6">Error</Typography>}
      <Stack gap={3} px={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h3" fontSize="1.5rem" fontWeight="bold">
            {pageLocalization.home.shopOurTopCategories}
          </Typography>
          <Link href="#">
            <Typography variant="h3" fontSize="1.2rem" fontWeight="500">
              {pageLocalization.home.allCategories}
            </Typography>
          </Link>
        </Stack>
        <Stack direction="row" gap="70px" pb="8px">
          {categories?.data.categories.map((category: CategoryType) => {
            return (
              <Link
                href={`/categories/${category?.name}`}
                style={{ position: "relative" }}
                key={category._id}
              >
                <Typography
                  variant="h5"
                  position="absolute"
                  top="0.75rem"
                  left="50%"
                  color="white"
                  fontSize="1.25rem"
                  fontWeight="600"
                  sx={{
                    transform: "translateX(-50%)",
                  }}
                >
                  {category?.name}
                </Typography>
                <Image
                  src={`http://localhost:8000/images/categories/icons/${category?.icon}`}
                  alt={category?.name}
                  height={296}
                  width={230}
                  style={{ objectFit: "contain" }}
                />
              </Link>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
