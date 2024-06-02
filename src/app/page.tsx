import Link from "next/link";
import { db } from "../server/db";
import { SignIn, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images(){
  
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">{images.map(
      ({ id, name, url }) => <div key={id} className="flex w-48 h-48 flex-col">
        <Image src={url} style={{ objectFit:"contain"}} width={192} height={192} alt={name} />{name}</div>
    )}</div>
  )
}

export default async function HomePage() {
  
  // console.log(images);
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">You are not signed in, please sign in using the above SignIn button to continue.</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
