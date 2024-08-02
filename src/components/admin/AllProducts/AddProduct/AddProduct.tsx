import { CATEGORIES } from "@/constant/general";
import { pageLocalization } from "@/constant/localization";
import {
  Box,
  Button,
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddProduct() {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const { register, handleSubmit } = useForm();

  function addProduct() {}

  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={openModal}
        sx={{ position: "absolute", right: 40, top: 20 }}
      >
        {pageLocalization.admin.addProduct}
      </Button>
      <Modal open={open} onClose={closeModal} sx={{ pt: "20px" }}>
        <Card sx={{ width: "500px", margin: "auto" }}>
          <CardContent>
            <Box component="form" onSubmit={handleSubmit(addProduct)}>
              <TextField
                label={pageLocalization.admin.productName}
                {...register("name")}
                margin="normal"
                autoFocus
                fullWidth
                required
              />
              <TextField
                label={pageLocalization.admin.price}
                {...register("price")}
                type="number"
                margin="normal"
                fullWidth
                required
              />
              <TextField
                label={pageLocalization.admin.quantity}
                {...register("quantity")}
                margin="normal"
                fullWidth
                required
              />
              <InputLabel id="select-category">
                {pageLocalization.admin.category}
              </InputLabel>
              <Select
                {...register("category")}
                labelId="select-category"
                fullWidth
                required
              >
                {CATEGORIES.map((category, index) => (
                  <MenuItem value={category} key={index}>
                    {pageLocalization.admin.categoriesArray[index]}
                  </MenuItem>
                ))}
              </Select>
              {/* <InputLabel id="select-subcategory">
                {pageLocalization.admin.subcategory}
              </InputLabel> */}
              {/* <Select
                {...register("subcategory")}
                labelId="select-category"
                fullWidth
                required
              >
                {CATEGORIES.map((category, index) => (
                  <MenuItem value={category} key={index}>
                    {pageLocalization.admin.categoriesArray[index]}
                  </MenuItem>
                ))}
              </Select> */}
              <TextField
                label={pageLocalization.admin.brand}
                {...register("brand")}
                margin="normal"
                fullWidth
                required
              />
              <TextField
                label={pageLocalization.admin.description}
                {...register("descripton")}
                margin="normal"
                fullWidth
                required
              />
              <TextField type="file" margin="normal" fullWidth />
              <Button type="submit" variant="contained" fullWidth>
                {pageLocalization.admin.addProduct}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
}
