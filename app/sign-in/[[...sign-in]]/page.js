import { SignIn, SignedOut } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div>
      <SignedOut>
        <SignIn className="m-1 p-3 bg-cyan-500 hover:bg-cyan-500/75 " />
      </SignedOut>
    </div>
  );
}
