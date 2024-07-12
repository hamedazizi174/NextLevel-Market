import { Box } from "@mui/material";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ReactNode } from "react";

type prop = {
  children: ReactNode;
};

export default function MainLayout({ children }: prop) {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
