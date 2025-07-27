import { HydrateClient } from "~/trpc/server";
import { Navbar } from "~/app/_components/navbar";

export default async function Home() {


  return (
    <HydrateClient>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-black">
        <Navbar />
      </div>
    </HydrateClient>
  );
}
