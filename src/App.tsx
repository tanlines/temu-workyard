import "./App.css";
import {
  ChevronDownIcon,
  StarIcon,
} from "lucide-react";
import homeHeaderImage from "./assets/home-header-img.avif";
import accentHeaderImage from "./assets/accent-header.svg";
import { cn } from "./lib/utils";
import { WorkyardSvg } from "./components/WorkyardSvg";

export default function App() {
  return (
    <>
      <Navigation />
      <MainContent />
    </>
  );
}

function MainContent() {
  return (
    <div className={cn("bg-teal", "h-screen w-full")}>
      <div
        className={cn(
          "flex inset-0 flex-end absolute justify-center top-40 left-0",
          "w-full h-full z-0",
        )}
      >
        <img
          src={accentHeaderImage}
          alt="Workyard"
          className="pointer-events-none"
        />
      </div>
      <div
        className={cn(
          "flex flex-row items-center justify-between gap-4",
          "max-w-7xl m-auto px-5 pt-20 z-10",
        )}
      >
        <div className={cn("flex flex-col gap-4", "w-3xl z-2 p-4")}>
          <h1
            className={cn(
              "text-white font-bold leading-16",
              "text-xl xs:text-2xl md:text-5xl",
            )}
          >
            Workforce management built for the field
          </h1>
          <p className={cn("text-white", "text-lg")}>
            Track your crew with GPS. <br /> Save time. Cut costs. Ensure
            compliance. <br /> Get started in minutes with Workyard.
          </p>
          <div className={cn("flex flex-row gap-2 items-center")}>
            <button
              className={cn(
                "flex-[1 1 auto] rounded-md",
                "bg-turquoise hover:bg-turquoise text-black font-semibold",
                "text-2xl h-18 w-40 lg:w-60",
                "hover:translate-y-1 hover:shadow-xl shadow-lg",
                "transition-all duration-300",
              )}
            >
              Get started
            </button>
            <div className={cn("flex flex-col gap-2", "px-2 py-4")}>
              <div className="flex flex-row">
                {[...Array(5)].map((_, idx) => (
                  <StarIcon key={idx} className="size-6 text-yellow-500" />
                ))}
              </div>
              <p className={cn("text-white font-medium", "text-sm")}>
                Trusted by 0+ workers
              </p>
            </div>
          </div>
        </div>
        <div className={cn("w-3xl z-2", "p-4")}>
          <img src={homeHeaderImage} alt="Workyard" />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div
      className={cn("flex justify-center", "bg-teal h-18 w-full font-medium")}
    >
      <div
        className={cn(
          "flex flex-row flex-1 items-center justify-between",
          "max-w-7xl m-auto px-5 z-50",
        )}
      >
        <nav className="flex justify-center items-center">
          <WorkyardSvg
            className={cn("w-3/12 min-w-20 max-w-40", "text-white mr-8")}
          />
          <ul className={cn("flex flex-row", "text-white")}>
            <NavItem title="Product" />
            <NavItem title="Solutions" />
            <NavItem title="Integrations" chevron={false} />
            <NavItem title="Pricing" chevron={false} />
            <NavItem title="Reviews" chevron={false} />
            <NavItem title="Resources" />
          </ul>
        </nav>
        <div className={cn("flex flex-row items-center justify-center gap-2")}>
          <a
            href="/"
            className={cn(
              "text-white hover:text-turquoise",
              "text-sm pr-4",
              "transition-all duration-300",
            )}
          >
            Contact sales
          </a>
          <button
            className={cn(
              "flex-[1 1 auto] rounded-md",
              "bg-turquoise hover:bg-turquoise text-black font-semibold",
              "text-sm h-12 w-18 md:w-24 lg:w-36",
              "hover:translate-y-1 shadow-lg",
              "transition-all duration-300",
            )}
          >
            Try free
          </button>
          <button
            className={cn(
              "rounded-md font-semibold text-sm h-11 w-18",
              "bg-[#cafffa] hover:bg-[#0fffe6] text-teal hover:text-black",
              "hover:translate-y-1",
              "transition-all duration-300",
            )}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function NavItem({
  title,
  chevron = true,
}: {
  title: string;
  chevron?: boolean;
}) {
  return (
    <li
      className={cn(
        "flex flex-row items-center gap text-[2px]",
        "hover:text-turquoise transition-all duration-300 group",
      )}
    >
      <a href="/" className={cn("text-xs", "md:text-sm")}>
        {title}
      </a>
      {chevron ? (
        <ChevronDownIcon
          className={cn(
            "size-4 ml-2 mr-4 md:size-5",
            "group-hover:rotate-180 transition-all duration-300",
          )}
        />
      ) : (
        <span className="mr-4" />
      )}
    </li>
  );
}
