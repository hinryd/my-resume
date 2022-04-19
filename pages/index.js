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
} from "@heroicons/react/solid";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className="absolute top-0 left-0 print:hidden bg-yellow-400 p-2 pb-3 pr-3 rounded-br-full"
        onClick={() => window.print()}
      >
        <PrinterIcon className="h-6 w-6 shrink-0 text-black" />
      </button>

      <button
        className="absolute top-0 right-0 print:hidden bg-yellow-400 p-2 pb-3 pl-3 rounded-bl-full"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <MoonIcon className="h-6 w-6 shrink-0 text-black" />
        ) : (
          <SunIcon className="h-6 w-6 shrink-0 text-black" />
        )}
      </button>

      <div className="grid gap-8 p-5 max-w-2xl mx-auto">
        <section>
          <Image
            className="rounded-full"
            src="/48958400.jpg"
            alt="profile"
            height={200}
            width={200}
          />
          <h1 className="text-4xl font-bold tracking-wider">Henry Li</h1>
          <h3>Immediately available</h3>
        </section>

        <section>
          <h3 className="font-bold tracking-widest underline decoration-2">
            CONNECT
          </h3>
          <p className="flex gap-1 items-center">
            <PhoneIcon className="h-4 w-4 shrink-0" />
            <span>63774207</span>
          </p>
          <p className="flex gap-1 items-center">
            <AtSymbolIcon className="h-4 w-4 shrink-0" />
            <Link href="mailto:lkhh@protonmail.com">lkhh@protonmail.com</Link>
          </p>
          <p className="flex gap-1 items-center">
            <CodeIcon className="h-4 w-4 shrink-0" />
            <Link href="https://github.com/hinryd">github.com/hinryd</Link>
          </p>
        </section>

        <section>
          <h3 className="font-bold tracking-widest underline decoration-2">
            LANGUAGES
          </h3>
          <div className="tooltip tooltip-bottom w-full" data-tip="Fluent">
            <p className="flex gap-1 items-center">
              <GlobeAltIcon className="h-4 w-4 shrink-0 text-red-400" />
              <span className="-z-10">English</span>
              <span className="hidden print:inline">(Fluent)</span>
            </p>
            <progress
              className="progress progress-success print:hidden"
              value="90"
              max="100"
            />
          </div>
          <div className="tooltip tooltip-bottom w-full" data-tip="Native">
            <p className="flex gap-1 items-center">
              <GlobeAltIcon className="h-4 w-4 shrink-0 text-indigo-400" />
              <span className="-z-10">Cantonese</span>
              <span className="hidden print:inline">(Native)</span>
            </p>
            <progress
              className="progress progress-success print:hidden"
              value="100"
              max="100"
            />
          </div>
          <div className="tooltip tooltip-bottom w-full" data-tip="Proficient">
            <p className="flex gap-1 items-center">
              <GlobeAltIcon className="h-4 w-4 shrink-0 text-yellow-400" />
              <span className="-z-10">Mandarin</span>
              <span className="hidden print:inline">(Proficient)</span>
            </p>
            <progress
              className="progress progress-success print:hidden"
              value="80"
              max="100"
            />
          </div>
        </section>

        <section>
          <h3 className="font-bold tracking-widest underline decoration-2">
            EDUCATION
          </h3>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold italic">The University of Manchester</p>
              <p className="flex gap-1 items-center">
                <AcademicCapIcon className="h-4 w-4 shrink-0 text-green-400" />{" "}
                BA Economics
              </p>
            </div>
            <p className="italic text-sm shrink-0">Sep 12 - Jul 16</p>
          </div>
        </section>

        <section>
          <h3 className="font-bold tracking-widest underline decoration-2">
            INTRODUCTION
          </h3>
          <p>
            A software developer with a strong analytical mind seeking for a
            position in a dynamic and progressive company
          </p>
        </section>

        <section>
          <h3 className="font-bold tracking-widest underline decoration-2">
            TECHNOLOGIES
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <div className="tooltip tooltip-bottom" data-tip="Typescript">
              <Image
                src="/typescript-icon.svg"
                alt="Typescript"
                height={35}
                width={35}
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Svelte">
              <Image
                src="/svelte-icon.svg"
                alt="Svelte"
                height={35}
                width={35}
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Node.js">
              <Image
                src="/nodejs-icon.svg"
                alt="Node.js"
                height={35}
                width={35}
              />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="pnpm">
              <Image src="/pnpm.svg" alt="pnpm" height={35} width={35} />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Deno">
              <Image src="/deno.svg" alt="Deno" height={35} width={35} />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Rust">
              <Image src="/rust.svg" alt="Rust" height={35} width={35} />
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-bold tracking-widest underline decoration-2">
            EXPERIENCES
          </h3>
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xl font-bold">
                    Global Logistics System (HK) Limited
                  </p>
                  <p>Analyst Programmer</p>
                </div>
                <p className="text-sm italic shrink-0">Nov 21 - Apr 22</p>
              </div>
              <div className="flex items-center gap-2">
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
                <div className="tooltip tooltip-bottom" data-tip="Vite">
                  <Image src="/vitejs.svg" alt="Vite" height={35} width={35} />
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
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xl font-bold">Madtec</p>
                  <p>Web Developer</p>
                </div>
                <p className="text-sm italic shrink-0">Jan 21 - Aug 21</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="tooltip tooltip-bottom" data-tip="React">
                  <Image src="/react.svg" alt="React" height={35} width={35} />
                </div>
                <div className="tooltip tooltip-bottom" data-tip="Vue.js">
                  <Image src="/vue.svg" alt="Vue.js" height={35} width={35} />
                </div>
                <div className="tooltip tooltip-bottom" data-tip="Flutter">
                  <Image
                    src="/flutter.svg"
                    alt="Flutter"
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
              </div>
              <ul className="list-disc ml-4">
                <li>
                  Develop multiple frontend web applications with Vue related
                  technologies
                </li>
                <li>
                  Develop backend API gateway to support frontend
                  functionalities such as authentication, business logic,
                  database
                </li>
                <li>
                  Provide wireframing and collaborate with design team to
                  enhance user interface
                </li>
                <li>
                  Work with CI/CD pipeline to automate project deployment and
                  testing
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xl font-bold">HGC</p>
                  <p>Support Officer</p>
                </div>
                <p className="text-sm italic shrink-0">Mar 20 - Jan 21</p>
              </div>

              <ul className="list-disc ml-4">
                <li>
                  Assisted on internal and external IT incidents with ITSM
                  compliance
                </li>
                <li>
                  Developed tools and templates to assist on service delivery
                  (Selenium IDE, Python)
                </li>
                <li>
                  Collaborated with external RPA provider to automate specific
                  workflow (Blue Prism)
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xl font-bold">
                    Automated System Holdings Limited
                  </p>
                  <p>Service Desk Specialist</p>
                </div>
                <p className="text-sm italic shrink-0">Jun 19 - Mar 20</p>
              </div>

              <ul className="list-disc ml-4">
                <li>
                  Ensured efficient IT operations on multiple projects (up to
                  10) and complied to predefined SLA
                </li>
                <li>
                  Developed several scripts to assist with projects work ow and
                  report generation (Selenium IDE, VBA, Lua)
                </li>
                <li>
                  Aided with administrative tasks such as scheduling colleagues
                  duties
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
