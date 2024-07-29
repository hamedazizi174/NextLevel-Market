import { Box, List, ListItem, Stack, Typography } from "@mui/material";
export default function Footer() {
  return (
    <Box component="footer" bgcolor="black" color="#eee">
      <Stack
        justifyContent="space-between"
        alignItems="center"
        sx={{
          py: { xs: 2, md: 4 },
        }}
      >
        <List sx={{ display: "flex", gap: 2, flex: 1, width: "100%" }}>
          <ListItem sx={{ justifyContent: "end" }}>
            <Typography variant="body1" fontWeight={600} fontSize="0.875rem">
              Terms of Use
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" fontWeight={600} fontSize="0.875rem">
              Privacy Policy
            </Typography>
          </ListItem>
        </List>
        <Typography variant="body1" fontWeight={600} fontSize="0.875rem">
          All Right reserved by Hamed Azizi | 2024
        </Typography>
      </Stack>
    </Box>
  );
}
