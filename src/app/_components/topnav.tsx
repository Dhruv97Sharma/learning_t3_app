import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs"

const TopNav = () => {
    return (
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
        <div className="text-4xl font-bold">Gallery</div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }

export {
    TopNav
}