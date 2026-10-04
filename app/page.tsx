import Image from "next/image";
import Navbar from "./components/Navbar";
import { redirect } from "next/navigation";

export default function Home() {
  return (
      redirect("/product")
  );
}
