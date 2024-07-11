import MainLayout from "@/layouts/MainLayout/MainLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <div>hi</div>
    </MainLayout>
  );
}
