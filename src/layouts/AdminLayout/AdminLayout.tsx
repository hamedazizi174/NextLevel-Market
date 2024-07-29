import { Grid } from "@mui/material";
import { ChildrenType } from "@/types/types";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SideBar from "./SideBar/SideBar";

export default function AdminLayout({ children }: ChildrenType) {
  return (
    <Grid container minHeight="100vh">
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item md={3} lg={2} sx={{ display: { xs: "none", md: "block" } }}>
        <SideBar />
      </Grid>
      <Grid item xs={12} md={9} lg={10}>
        {children}
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
