import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-6xl mb-3">Digital Id</h1>
      <Link href={"/sign-in"} className="m-1 p-3 bg-cyan-500 hover:bg-cyan-500/75">Get Started</Link>
    </>
  );
}
