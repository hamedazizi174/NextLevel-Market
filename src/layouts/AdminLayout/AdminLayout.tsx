import { Box } from "@mui/material";
import Header from "../MainLayout/Header/Header";
import Footer from "../MainLayout/Footer/Footer";
import { ReactNode } from "react";

type prop = {
  children: ReactNode;
};

export default function AdminLayout({ children }: prop) {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
