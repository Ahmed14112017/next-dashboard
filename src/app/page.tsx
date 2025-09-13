// import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/font";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <div className="flex items-center justify-start p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/logo-image.png"
            width={100}
            height={100}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/logo-image.png"
            width={50}
            height={50}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start justify-center">
        <div className="w-80">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <div>
            <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-3xl text-white">
              login
              <span>
                <ArrowRightIcon className="size-6 " />
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
