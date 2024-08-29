import { Avatar, Paper, Typography } from "@mui/material";

export default function Comment() {
  return (
    <Paper elevation={3} sx={{ padding: "10px", margin: "10px" }}>
      <Avatar>H</Avatar>
      <Typography variant="body1" m={2}>
        <strong>حامد</strong>: محصول خیلی خوبیه همین الان به دستم رسید
      </Typography>
    </Paper>
  );
}
