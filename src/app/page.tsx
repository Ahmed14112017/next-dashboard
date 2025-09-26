// import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/font";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex  min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <div className="flex items-center justify-start md:w-3/5  md:py-12">
          <Image
            src="/Amgo-logo.png"
            width={200}
            height={200}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/Amgo-logo.png"
            width={100}
            height={100}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center md:justify-start p-6">
        <div className=" w-[50%] md:w-[25%] ">
          <p className="mb-4">
            <strong>wellcome to Acme. </strong>this is example for the Next.js
            Learn course,brought to you by vercel
          </p>
          <Link
            href={""}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
}
