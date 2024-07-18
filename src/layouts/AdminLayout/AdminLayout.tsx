import { Box, Grid } from "@mui/material";
import { ChildrenType } from "@/types/types";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SideBar from "./SideBar/SideBar";

export default function AdminLayout({ children }: ChildrenType) {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
