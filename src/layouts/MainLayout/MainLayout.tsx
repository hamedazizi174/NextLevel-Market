import { Box } from "@mui/material";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ChildrenType } from "@/types/types";

export default function MainLayout({ children }: ChildrenType) {
  return (
    <Box minHeight="100vh">
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
