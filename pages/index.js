import Head from "next/head";
import Avatar from "../components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google NextJS Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left Section */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right Section */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full cursor-pointer hover:bg-gray-100" />

          {/* Avatar */}
          <Avatar url="https://avatars.githubusercontent.com/u/13258343?s=60&v=4" />
        </div>
      </header>

      {/* Body */}
      <form>
        <Image
          width="272"
          height="92"
          src="/assets/images/googlelogo_color_272x92dp.png"
        />
      </form>

      {/* Footer */}
    </div>
  );
}
