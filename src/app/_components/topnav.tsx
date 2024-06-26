"use client"

import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { UploadButton } from "~/utils/uploadthing"

const TopNav = () => {
    const router = useRouter()
    return (
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
        <div className="text-4xl font-bold">Gallery</div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UploadButton endpoint="imageUploader" onClientUploadComplete={(res) =>{
                    router.refresh()
                }} />
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }

export {
    TopNav
}