import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg">Paws and Claws Adoption Emporium</h1>
      <Link href="./pets">View animals up for adoption</Link>
    </div>
  );
}
