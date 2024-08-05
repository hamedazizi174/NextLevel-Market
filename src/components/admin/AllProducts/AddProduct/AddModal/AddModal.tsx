import { useGetCategories } from "@/api/categories/categories.queries";
import { usePostProduct } from "@/api/products/products.queries";
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
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { fieldData } from "./fieldDatd";

type Props = {
  open: boolean;
  closeModal: () => void;
};

export default function AddModal({ open, closeModal }: Props) {
  const { register, handleSubmit, reset } = useForm();
  const { data: categories } = useGetCategories();
  const [selectedCategoryId, setSelectedCategoryId] = useState<
    string | unknown
  >("");
  const { data: subcategories } = useGetSubcategories(
    selectedCategoryId as string
  );
  const { mutate: addProductMutate } = usePostProduct();

  function addProduct(data: FieldValues) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      key === "images"
        ? formData.append("images", data.images[0])
        : formData.append(key, data[key]);
    });
    addProductMutate(formData);
    reset();
    closeModal();
  }

  return (
    <Modal
      open={open}
      onClose={closeModal}
      sx={{ pt: 3, maxWidth: "900px", margin: "auto" }}
    >
      <Card sx={{ maxHeight: "80%", overflow: "scroll" }}>
        <CardContent>
          <Box component="form" onSubmit={handleSubmit(addProduct)}>
            <Grid container spacing={2}>
              {fieldData.map((item, index) => (
                <Grid item xs={12} sm={6} xl={4} key={index}>
                  <TextField
                    type={item.type}
                    label={item.label}
                    {...register(item.name)}
                    fullWidth
                    required
                  />
                </Grid>
              ))}
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("category")}
                  select
                  label={pageLocalization.admin.category}
                  onChange={(e) => setSelectedCategoryId(e.target.value)}
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
                  {pageLocalization.admin.addProduct}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Modal>
  );
}
