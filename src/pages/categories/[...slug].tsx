import MainLayout from "@/layouts/MainLayout/MainLayout";
import ProductTemplate from "@/templates/Product/Product";
import ProductsTemplate from "@/templates/Products/Products";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function CategoriesSlug() {
  const { slug } = useRouter().query;

  if (!slug) {
    return <Typography>Not Found</Typography>;
  }

  return (
    <MainLayout>
      {slug.length === 1 ? (
        <ProductsTemplate categoryName={slug[0]} />
      ) : (
        <ProductTemplate productId={slug[1]} />
      )}
    </MainLayout>
  );
}
