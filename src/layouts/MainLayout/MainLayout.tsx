import { Box } from "@mui/material";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
