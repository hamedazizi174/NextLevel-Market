import { useGetCategories } from "@/api/categories/categories.queries";
import {
  useEditProduct,
  useGetProductById,
} from "@/api/products/products.queries";
import { useGetSubcategories } from "@/api/subcategories/subcategories.queries";
import { pageLocalization } from "@/constant/localization";
import { CategoryType, SubcategoryType } from "@/types/types";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { fieldData } from "./fieldData";

type Props = {
  open: boolean;
  id: string;
  closeModal: () => void;
};

export default function EditModal({ open, closeModal, id }: Props) {
  const { data: product } = useGetProductById(id);
  const values = {
    name: product?.data.products[0].name,
    price: product?.data.products[0].price,
    quantity: product?.data.products[0].quantity,
    brand: product?.data.products[0].brand,
    description: product?.data.products[0].description,
    category: product?.data.products[0].category._id,
    subcategory: product?.data.products[0].subcategory._id,
  };
  const { register, handleSubmit, reset } = useForm({ values });
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const { data: categories } = useGetCategories();
  const { data: subcategories } = useGetSubcategories(selectedCategoryId);
  const { mutate: editProductMutate } = useEditProduct(id);

  function editProduct(data: FieldValues) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      key !== "images"
        ? formData.append(key, data[key])
        : data.images.length
        ? formData.append("images", data.images[0])
        : null;
    });
    editProductMutate(formData);
    reset();
    closeModal();
    toast.success(pageLocalization.admin.editProductSuccess);
  }

  useEffect(() => {
    setSelectedCategoryId(values.category);
  }, [values.category]);

  return (
    <>
      <Toaster richColors position="top-left" />
      <Modal
        open={open}
        onClose={closeModal}
        sx={{ pt: 3, maxWidth: "900px", margin: "auto" }}
      >
        <Card sx={{ maxHeight: "80%", overflowY: "scroll" }}>
          <CardContent>
            <Box component="form" onSubmit={handleSubmit(editProduct)}>
              <Grid container spacing={2}>
                {fieldData.map((item, index) => (
                  <Grid item xs={12} sm={6} xl={4} key={index}>
                    <TextField
                      type={item.type}
                      label={item.label}
                      {...register(item.name as any)}
                      fullWidth
                      required={item.type === "file" ? false : true}
                    />
                  </Grid>
                ))}
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("category")}
                    select
                    label={pageLocalization.admin.category}
                    onChange={(e) => setSelectedCategoryId(e.target.value)}
                    defaultValue={values.category}
                    fullWidth
                    required
                  >
                    {categories?.data?.categories?.map(
                      (category: CategoryType, index: number) => {
                        return (
                          <MenuItem value={category._id} key={index}>
                            {pageLocalization.admin.categoriesArray[index]}
                          </MenuItem>
                        );
                      }
                    )}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("subcategory")}
                    select
                    label={pageLocalization.admin.subcategory}
                    defaultValue={values.subcategory}
                    fullWidth
                    required
                  >
                    {subcategories?.data?.subcategories?.map(
                      (subcategory: SubcategoryType, index: number) => (
                        <MenuItem value={subcategory._id} key={index}>
                          {subcategory.name}
                        </MenuItem>
                      )
                    )}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth>
                    {pageLocalization.admin.editProduct}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
}
