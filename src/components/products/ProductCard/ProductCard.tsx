import { ProductType } from "@/types/types";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type prop = {
  product: ProductType;
};

export default function ProductCard({ product }: prop) {
  return (
    <Link href={`/categories/${product?.category.name}/${product?._id}`}>
      <Card elevation={20}>
        <CardContent>
          <Stack gap={2} p={1} minHeight="384px">
            <Typography variant="h5" fontWeight="600" fontSize="1.125rem">
              {product?.name}
            </Typography>
            <Box height={240} flexGrow={1} position="relative">
              <Image
                style={{ borderRadius: 6 }}
                src={`http://${product?.images[0]}`}
                alt={product?.name}
                fill
                objectFit="cover"
              />
            </Box>
            <Typography variant="body1">${product?.price}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
}
