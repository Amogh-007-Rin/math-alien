import Appbar from "@/components/Appbar";
import Image from "next/image";


export default function Home() {
  return (
    <div className="h-screen w-full bg-[url('/images/background.jpg')] bg-cover bg-center">
      <Appbar></Appbar>
    </div>
  );
}
