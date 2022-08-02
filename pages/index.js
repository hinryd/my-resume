import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  PhoneIcon,
  CodeIcon,
  AtSymbolIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  PrinterIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className="fixed top-0 left-0 print:hidden bg-yellow-400 p-1 pb-3 pr-3 rounded-br-full overflow-hidden z-50"
        onClick={() => window.print()}
      >
        <PrinterIcon className="h-8 w-8 shrink-0 text-black" />
      </button>

      <button
        className="fixed top-0 right-0 print:hidden bg-yellow-400 p-1 pb-3 pl-3 rounded-bl-full overflow-hidden z-50"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <MoonIcon className="h-8 w-8 shrink-0 text-black" />
        ) : (
          <SunIcon className="h-8 w-8 shrink-0 text-black" />
        )}
      </button>

      <main className="grid md:grid-cols-12 gap-7 p-5 max-w-5xl mx-auto transition-all duration-500">
        <div className="col-span-12 md:col-span-3 flex flex-col gap-5">
          <section>
            <div className="h-48 w-48 overflow-hidden rounded-full border-8 border-gray-400 shadow-lg mx-auto md:m-0">
              <Image
                src="/profile.jpg"
                alt="profile"
                height={300}
                width={300}
              />
            </div>

            <h1 className="text-4xl font-bold tracking-wide text-center md:text-left">
              Henry Li
            </h1>
            <h3 className="font-light text-center md:text-left">
              Immediately available
            </h3>
          </section>

          <section>
            <h3 className="font-bold tracking-wider underline decoration-2">
              FIND ME
            </h3>
            <p className="flex gap-1 items-center">
              <PhoneIcon className="h-4 w-4 shrink-0" />
              <span>63774207</span>
            </p>
            <p className="flex gap-1 items-center">
              <AtSymbolIcon className="h-4 w-4 shrink-0" />
              <Link href="mailto:lkhh@pm.me">lkhh@pm.me</Link>
            </p>
            <p className="flex gap-1 items-center">
              <CodeIcon className="h-4 w-4 shrink-0" />
              <Link href="https://github.com/hinryd">github.com/hinryd</Link>
            </p>
          </section>

          <section>
            <h3 className="font-bold tracking-wider underline decoration-2">
              EDUCATION
            </h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold italic">The University of Manchester</p>
                <p className="italic text-sm shrink-0">Sep 12 - Jul 16</p>
                <p className="flex gap-1 items-center">
                  <AcademicCapIcon className="h-5 w-5 shrink-0 text-green-400" />{" "}
                  BA Economics
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-bold tracking-wider underline decoration-2">
              LANGUAGES
            </h3>
            <div className="tooltip tooltip-bottom w-full" data-tip="Fluent">
              <p className="flex gap-1 items-center">
                <GlobeAltIcon className="h-4 w-4 shrink-0 text-red-400" />
                <span className="-z-10">English</span>
                <p className="hidden print:inline font-bold">Fluent</p>
              </p>
              <progress
                className="progress progress-success print:hidden"
                value="95"
                max="100"
              />
            </div>

            <div className="tooltip tooltip-bottom w-full" data-tip="Native">
              <p className="flex gap-1 items-center">
                <GlobeAltIcon className="h-4 w-4 shrink-0 text-indigo-400" />
                <span className="-z-10">Cantonese</span>
                <p className="hidden print:inline font-bold">Native</p>
              </p>
              <progress
                className="progress progress-success print:hidden"
                value="100"
                max="100"
              />
            </div>

            <div
              className="tooltip tooltip-bottom w-full"
              data-tip="Proficient"
            >
              <p className="flex gap-1 items-center">
                <GlobeAltIcon className="h-4 w-4 shrink-0 text-yellow-400" />
                <span className="-z-10">Mandarin</span>
                <p className="hidden print:inline font-bold">Proficient</p>
              </p>
              <progress
                className="progress progress-success print:hidden"
                value="85"
                max="100"
              />
            </div>
          </section>
        </div>

        <div className="col-span-12 md:col-span-9 flex flex-col gap-5">
          <section>
            <h3 className="font-bold tracking-wider underline decoration-2">
              INTRO
            </h3>
            <p>
              I am a passionate software engineer who strives to write clean and
              maintainable code adhering to FP techniques and OOP principles.
              Desperate to step outside my comfort zone, I am pursuing a
              software position to learn more about different tech stacks in
              various disciplines in a progressive company.
            </p>
          </section>
          <section>
            <h3 className="font-bold tracking-wider underline decoration-2 mb-1">
              TOOLS
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              <div className="tooltip tooltip-bottom" data-tip="Rust">
                <Image src="/rust.svg" alt="Rust" height={35} width={35} />
              </div>
              <div className="tooltip tooltip-bottom" data-tip="Svelte">
                <Image
                  src="/svelte-icon.svg"
                  alt="Svelte"
                  height={35}
                  width={35}
                />
              </div>
              <div className="tooltip tooltip-bottom" data-tip="Selenium">
                <Image
                  src="/selenium.svg"
                  alt="Selenium"
                  height={35}
                  width={35}
                />
              </div>
              <div className="tooltip tooltip-bottom" data-tip="Bash">
                <Image src="/bash-icon.svg" alt="Bash" height={35} width={35} />
              </div>
              <div className="tooltip tooltip-bottom" data-tip="VS Code">
                <Image
                  src="/visual-studio-code.svg"
                  alt="VS Code"
                  height={35}
                  width={35}
                />
              </div>
              <div className="tooltip tooltip-bottom" data-tip="Vim">
                <Image src="/vim.svg" alt="Vim" height={35} width={35} />
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-bold tracking-wider underline decoration-2">
              EXPERIENCES
            </h3>
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold">
                      Ace Technologies Limited
                    </p>
                    <p className="italic">Analyst Programmer</p>
                  </div>
                  <p className="text-sm italic">Apr 22 - Present</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="tooltip tooltip-bottom" data-tip="Flutter">
                    <Image
                      src="/flutter.svg"
                      alt="Flutter"
                      height={35}
                      width={35}
                    />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Dart">
                    <Image src="/dart.svg" alt="Dart" height={35} width={35} />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Typescript">
                    <Image
                      src="/typescript-icon.svg"
                      alt="Typescript"
                      height={35}
                      width={35}
                    />
                  </div>
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip="AWS Lambda"
                  ></div>
                  <div className="tooltip tooltip-bottom" data-tip="Gitlab">
                    <Image
                      src="/gitlab.svg"
                      alt="Gitlab"
                      height={35}
                      width={35}
                    />
                  </div>
                </div>
                <ul className="list-disc ml-4">
                  <li>
                    Design and improve the software architecture and code
                    readability of the app
                  </li>
                  <li>
                    Optimize rendering performance of the app on web platform
                  </li>
                  <li>
                    Implement various new features, bug fixes and UX
                    improvements to the app
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold">
                      Global Logistics System (HK) Limited
                    </p>
                    <p className="italic">Analyst Programmer</p>
                  </div>
                  <p className="text-sm italic">Nov 21 - Apr 22</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="tooltip tooltip-bottom" data-tip="Angular">
                    <Image
                      src="/angular-icon.svg"
                      alt="angular"
                      height={35}
                      width={35}
                    />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="dotnet">
                    <Image
                      src="/dotnet.svg"
                      alt="dotnet"
                      height={35}
                      width={35}
                    />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Vue.js">
                    <Image src="/vue.svg" alt="Vue.js" height={35} width={35} />
                  </div>
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip="Tailwindcss"
                  >
                    <Image
                      src="/tailwindcss-icon.svg"
                      alt="Tailwindcss"
                      height={35}
                      width={35}
                    />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Vite">
                    <Image
                      src="/vitejs.svg"
                      alt="Vite"
                      height={35}
                      width={35}
                    />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Gitlab">
                    <Image
                      src="/gitlab.svg"
                      alt="Gitlab"
                      height={35}
                      width={35}
                    />
                  </div>
                </div>
                <ul className="list-disc ml-4">
                  <li>
                    Develop a new web application using modern toolings for
                    Cathay
                  </li>
                  <li>Compose extensive documentations for the new project</li>
                  <li>
                    Collaborate with DevOps colleagues to implement CI/CD
                    pipeline
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold">
                      MADTec Solutions Limited
                    </p>
                    <p className="italic">Web Developer</p>
                  </div>
                  <p className="text-sm italic shrink-0">Jan 21 - Aug 21</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="tooltip tooltip-bottom" data-tip="React">
                    <Image
                      src="/react.svg"
                      alt="React"
                      height={35}
                      width={35}
                    />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Vue.js">
                    <Image src="/vue.svg" alt="Vue.js" height={35} width={35} />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Nuxt.js">
                    <Image
                      src="/nuxt-icon.svg"
                      alt="Nuxt.js"
                      height={35}
                      width={35}
                    />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Bootstrap">
                    <Image
                      src="/bootstrap.svg"
                      alt="Bootstrap"
                      height={35}
                      width={35}
                    />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Python">
                    <Image
                      src="/python.svg"
                      alt="Python"
                      height={35}
                      width={35}
                    />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Github">
                    <Image
                      src="/github-icon.svg"
                      alt="github"
                      height={35}
                      width={35}
                    />
                  </div>
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip="Github Actions"
                  >
                    <Image
                      src="/github-actions.svg"
                      alt="Github Actions"
                      height={35}
                      width={35}
                    />
                  </div>
                  <div className="tooltip tooltip-bottom" data-tip="Docker">
                    <Image
                      src="/docker-icon.svg"
                      alt="Docker"
                      height={35}
                      width={35}
                    />
                  </div>
                </div>
                <ul className="list-disc ml-4">
                  <li>
                    Develop multiple full-stack web applications using JS-based
                    toolings
                  </li>
                  <li>Provide wireframes to design team for ideation</li>
                  <li>Implement CI/CD on Github for faster deployment</li>
                </ul>
              </div>

              {/* <div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold">
                      HGC Global Communications Limited
                    </p>
                    <p className="italic">Support Officer</p>
                  </div>
                  <p className="text-sm italic shrink-0">Mar 20 - Jan 21</p>
                </div>
                <ul className="list-disc ml-4">
                  <li>
                    Handle internal and external IT incidents with ITSM
                    compliance
                  </li>
                  <li>
                    Develop tools and templates to boost work productivity
                  </li>
                  <li>Collaborate with RPA provider to automate workflow</li>
                </ul>
              </div> */}

              {/* <div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold">
                      Automated Systems (HK) Limited
                    </p>
                    <p className="italic">Service Desk Specialist</p>
                  </div>
                  <p className="text-sm italic shrink-0">Jun 19 - Mar 20</p>
                </div>
                <ul className="list-disc ml-4">
                  <li>
                    Handle IT operations efficiently in 10 different projects
                  </li>
                  <li>Develop scripts to aid workflow and report generation</li>
                  <li>
                    Handle administrative tasks such as scheduling colleagues
                    duties and distributing works
                  </li>
                </ul>
              </div> */}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
