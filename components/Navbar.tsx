"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, InboxIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SEO, socials } from "@/utils/company";
import { animateScroll as scroll } from "react-scroll";
import { motion, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Contact us", href: "/contact", current: false },
];
const socialMedia = [
  {
    name: "Instagram",
    href: socials.instagram,
    icon: "instagram.png",
  },
  {
    name: "Tiktok",
    href: socials.tiktok,
    icon: "tiktok.png",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  // used to scroll to top
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Disclosure as="header" className="bg-white shadow">
      {({ open }) => (
        <>
          {/* used to animate the line on top of the navbar when scrolling*/}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 transform origin-left"
            style={{ scaleX }}
          />
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-yellow-400 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <button onClick={scrollToTop}>
                    <img
                      className="h-10 w-auto"
                      src={SEO.logo_light}
                      alt="Reimmagined logo"
                    />
                  </button>
                </div>
              </div>
              <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                <button onClick={scrollToTop}>
                  <h1 className={"font-black"}>Films Reimagined</h1>
                </button>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-yellow-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-300">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                <Link href={"/contact"}>
                  <button
                    type="button"
                    className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Book now </span>

                    <span className={"flex gap-2"}>
                      {" "}
                      <InboxIcon className="h-6 w-6" aria-hidden="true" />
                      Book now
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <nav
              className="hidden lg:flex lg:space-x-8 lg:py-2 lg:justify-between"
              aria-label="Global"
            >
              <div>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? "bg-yellow-400 text-gray-900"
                        : "text-gray-900 hover:bg-yellow-50 hover:text-gray-900",
                      "inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex gap-4">
                {socialMedia.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>

                    <img
                      src={`images/social/${item.icon}`}
                      alt={item.name}
                      className="h-6 w-6"
                    ></img>
                  </a>
                ))}
              </div>
            </nav>
          </div>
          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-yellow-100 text-gray-900"
                      : "text-gray-900 hover:bg-yellow-50 hover:text-gray-900",
                    "block rounded-md py-2 px-3 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className={"flex gap-6 justify-end"}>
                {socialMedia.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>

                    <img
                      src={`images/social/${item.icon}`}
                      alt={item.name}
                      className="h-6 w-6"
                    ></img>
                  </a>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
