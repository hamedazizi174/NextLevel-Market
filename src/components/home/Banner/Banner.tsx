import { Box } from "@mui/material";
import Image from "next/image";

export default function Banner() {
  return (
    <Box borderRadius="20px" overflow="hidden">
      <Image src="/hero/a.webp" alt="book" width="1500" height="350" />
    </Box>
  );
}
