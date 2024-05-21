import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <div className={`flex flex-row items-center leading-none text-white`}>
          <p className="text-[44px]">DewGang Tracker</p>
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={` text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to DewGang's Stardew Tracker.</strong> This is a tracking tool intended to help players of Stardew Valley.
          </p>
          <Link href='/dashboard'>
            <Button color="primary" variant="shadow" size="lg">Enter</Button>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image 
            src="/icons/Main_Logo.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt=""
          />
          <Image
            src="/icons/Main_Logo.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
