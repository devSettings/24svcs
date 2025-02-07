import Link from "next/link";
import { Copyright, Mail, MapPinHouse, Phone } from "lucide-react";
import { TextHoverEffect } from "./24svcs/animated-text";
export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black px-4 py-12 text-gray-400 md:px-6 lg:px-8">
      <div className="container relative mx-auto max-w-7xl pl-3">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
          {/* Logo and Copyright Section */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-700 p-1">
                <span className="font-bold text-white">24</span>
              </div>
              <span className="text-xl font-medium text-white">Svcs</span>
            </div>
            <p className="flex items-center gap-1 text-sm text-zinc-500">
              <Copyright size={14} />
              <span>{new Date().getFullYear()}, 24svcs Inc.</span>
            </p>
            <div className="mb-10 mt-5 flex gap-6 lg:mb-0">
              <div className="space-y-2">
                <p className="flex gap-1 text-xs text-muted-foreground">
                  <Phone size={14} strokeWidth={1.5} />
                  <span>Phone number</span>
                </p>
                <p className="text-xs text-white">+509 3930-9079</p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Mail size={14} strokeWidth={1.5} />
                  <span>Email</span>
                </p>
                <p className="text-xs text-white">24svcs@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Links Container */}
          <div className="text-sm font-light lg:col-span-4 lg:pl-24">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {/* Pages Section */}
              <div>
                <h3 className="mb-4 text-base font-medium text-white">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/studio"
                      className="transition-colors hover:text-white"
                    >
                      Studio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/clients"
                      className="transition-colors hover:text-white"
                    >
                      Clients
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="transition-colors hover:text-white"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="transition-colors hover:text-white"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Socials Section */}
              <div>
                <h3 className="mb-4 text-base font-medium text-white">
                  Socials
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-white"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-white"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-white"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="transition-colors hover:text-white"
                    >
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Section */}
              <div>
                <h3 className="mb-4 text-base font-medium text-white">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/privacy"
                      className="transition-colors hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="transition-colors hover:text-white"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookie-policy"
                      className="transition-colors hover:text-white"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Register Section */}
              <div>
                <h3 className="mb-4 text-base font-medium text-white">
                  Register
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/signup"
                      className="transition-colors hover:text-white"
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/login"
                      className="transition-colors hover:text-white"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/forgot-password"
                      className="transition-colors hover:text-white"
                    >
                      Forgot Password
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-5 flex h-[12rem] items-center justify-center lg:h-[30rem]">
        <TextHoverEffect text="24Svcs" />
      </div> */}
    </footer>
  );
}
