import { useGetCategoryByName } from "@/api/categories/categories.queries";
import {
  useGetProductsByCategoryId,
  useGetProductsByPrice,
} from "@/api/products/products.queries";
import ProductCard from "@/components/products/ProductCard/ProductCard";
import { ProductType } from "@/types/types";
import {
  Box,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

type prop = {
  categoryName: string;
};

export default function ProductsTemplate({ categoryName }: prop) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const { data: category } = useGetCategoryByName(categoryName);
  const { data: filterData } = useGetProductsByPrice(
    category?.data.categories[0]._id,
    min,
    max
  );
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsByCategoryId(category?.data.categories[0]._id);

  function filterByPrice(e: any) {
    const value = e.target.value;
    const minMax = value.split("-");
    setMin(minMax[0]);
    setMax(minMax[1]);
  }

  return (
    <Grid container>
      <Grid
        item
        lg={2}
        borderRight={2}
        borderColor="#e5e5e5"
        textAlign="center"
        my={5}
      >
        <Typography variant="h4" mb={3}>
          Filter
        </Typography>
        <Stack>
          <FormLabel>By Price:</FormLabel>
          <RadioGroup>
            <FormControlLabel
              value="0-100"
              control={<Radio />}
              label="0-$100"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="101-200"
              control={<Radio />}
              label="$101-$200"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="201-300"
              control={<Radio />}
              label="$201-$300"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="301-400"
              control={<Radio />}
              label="$301-$400"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="401-500"
              control={<Radio />}
              label="$401-$500"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="501-600"
              control={<Radio />}
              label="$501-$600"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="601-700"
              control={<Radio />}
              label="$601-$700"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="701-800"
              control={<Radio />}
              label="$701-$800"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="801-900"
              control={<Radio />}
              label="$801-$900"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="901-1000"
              control={<Radio />}
              label="$901-$1000"
              onClick={(e) => filterByPrice(e)}
            />
            <FormControlLabel
              value="1001-1000000"
              control={<Radio />}
              label="more than $1000"
              onClick={(e) => filterByPrice(e)}
            />
          </RadioGroup>
        </Stack>
      </Grid>
      <Grid item lg={10}>
        {isLoading && <Typography variant="body1">Loading ...</Typography>}
        {isError && <Typography variant="body1">Error</Typography>}
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            my: 5,
            fontSize: "3rem",
            textTransform: "uppercase",
            textDecoration: "underline",
            textDecorationOffset: "8px",
          }}
        >
          {category?.data.categories[0].name}
        </Typography>
        <Box
          component="section"
          sx={{
            p: 4,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 5,
          }}
        >
          {filterData?.data.products ? (
            filterData.data.products.length !== 0 ? (
              filterData?.data.products.map((product: ProductType) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <Typography variant="body1">No products found</Typography>
            )
          ) : products?.data?.products ? (
            products?.data?.products?.map((product: ProductType) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <Typography variant="body1">No products found</Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
