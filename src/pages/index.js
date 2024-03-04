import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Gabriel Cannes Portifolio</title>
        <meta name="description" content="Auto generated" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-300 px-10 md:px-20 lg:px-40 dark:bg-gray-800">
        {/* Nav */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:bg-gradient-to-r from-cyan-500 to-teal-500 dark:text-transparent dark:bg-clip-text">
              Developed By Cannes, Gabriel
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:bg-gray-400 rounded-full p-1"
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-gray-400">
              Gabriel Coelho Cannes
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:bg-gradient-to-r from-cyan-500 to-teal-500 dark:text-transparent dark:bg-clip-text">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">
              Front-end developer with a solid grasp of HTML, CSS, and
              JavaScript, along with expertise in Angular and React frameworks.
              Dedicated to refining skills for designing user-friendly
              interfaces. Eager to contribute to innovative projects using the
              latest technologies. Open to collaboration and enthusiastic about
              potential partnerships.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle className="cursor-pointer" />
            <AiFillLinkedin className="cursor-pointer" />
            <AiFillYoutube className="cursor-pointer" />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover"></Image>
          </div>
        </section>
        {/* Services */}
        <section>
          <div>
            <h3 className="text-3xl py-4 dark:bg-gradient-to-r from-cyan-500 to-teal-500 dark:text-transparent dark:bg-clip-text">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
              Responsive Web Design, Front-End Development, UI/UX Design,
              Website Maintenance, Cross-Browser Compatibility across{" "}
              <span className="text-teal-500">
                multiple Front-end frameworks
              </span>{" "}
              such as Angular, React, Vue, Next.js
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
              I offer from a wide range of services, including design,
              programming and teaching
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:w-1/3">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              ></Image>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:bg-gradient-to-r from-cyan-500 to-teal-500 dark:text-transparent dark:bg-clip-text">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-gray-500">
                Creating elegant designs suited for your needs following core
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Canva</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:w-1/3">
              <Image
                src={code}
                width={100}
                height={100}
                className="mx-auto"
              ></Image>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:bg-gradient-to-r from-cyan-500 to-teal-500 dark:text-transparent dark:bg-clip-text">
                Well Written Code
              </h3>
              <p className="py-2 dark:text-gray-500">
                Crafting and maintaining maintainable code, ensuring efficient
                and scalable solutions for optimal software performance.
              </p>
              <h4 className="py-4 text-teal-600">Frameworks tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">React</p>
              <p className="text-gray-800 py-1 dark:text-white">Angular</p>
              <p className="text-gray-800 py-1 dark:text-white">Vue</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 lg:w-1/3">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              ></Image>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:bg-gradient-to-r from-cyan-500 to-teal-500 dark:text-transparent dark:bg-clip-text">
                Strait to the point Consultant
              </h3>
              <p className="py-2 dark:text-gray-500">
                Strategic Consultant in Crafting Engaging User Experiences and
                Optimal Web Solutions.
              </p>
              <h4 className="py-4 text-teal-600">Tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Zoom</p>
              <p className="text-gray-800 py-1 dark:text-white">Google Meet</p>
              <p className="text-gray-800 py-1 dark:text-white">Code Share</p>
            </div>
          </div>
        </section>
        {/* Portifolio */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:bg-gradient-to-r from-cyan-500 to-teal-500 dark:text-transparent dark:bg-clip-text">
              Portifolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
              <span className="text-teal-500">Experienced </span> Front-End
              Developer adept at turning designs into polished, user-friendly
              websites. Proficient in HTML, CSS, and JavaScript. Let's{" "}
              <span className="text-teal-500">create </span>
              seamless digital experiences together.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              ></Image>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              ></Image>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
