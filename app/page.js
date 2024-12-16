import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-6xl mb-3">Digital Id</h1>
      <SignedOut>
        <Link href={"/sign-in"} className="m-1 p-3 bg-cyan-500 hover:bg-cyan-500/75">
          Get Started
        </Link>
      </SignedOut>
      <SignedIn>
      <Link href={"/dashboard"} className="m-1 p-3 bg-cyan-500 hover:bg-cyan-500/75">
          Dasboard
        </Link>
      </SignedIn>
    </>
  );
}
