import Image from "next/image";
import Link from "next/link";
import Homecomponent from "../components/home/Homecomponent";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Homecomponent />
    </main>
  );
}
