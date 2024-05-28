import Link from "next/link";
import { db } from "../server/db";
import { SignIn, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function Images(){
  const images = await db.query.images.findMany();

  return (
    <div className="flex flex-wrap gap-4">{images.map(
      ({ id, name, url }) => <div key={id} className="w-48"><img src={url} />{name}</div>
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
