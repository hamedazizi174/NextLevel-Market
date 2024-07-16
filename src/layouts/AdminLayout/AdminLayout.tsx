import { Box } from "@mui/material";
import Header from "../MainLayout/Header/Header";
import Footer from "../MainLayout/Footer/Footer";
import { ChildrenType } from "@/types/types";

export default function AdminLayout({ children }: ChildrenType) {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
