import { pageLocalization } from "@/constant/localization";

export const fieldData = [
  {
    label: pageLocalization.admin.productName,
    name: "name",
    type: "text",
  },
  {
    label: pageLocalization.admin.price,
    name: "price",
    type: "number",
  },
  {
    label: pageLocalization.admin.quantity,
    name: "quantity",
    type: "number",
  },
  {
    label: pageLocalization.admin.brand,
    name: "brand",
    type: "text",
  },
  {
    label: pageLocalization.admin.description,
    name: "description",
    type: "text",
  },
  {
    label: "",
    name: "images",
    type: "file",
  },
];
