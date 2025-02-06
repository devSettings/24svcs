import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black px-4 py-12 text-gray-400 md:px-6 lg:px-8">
      <div className="container relative mx-auto max-w-7xl pl-3">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
          {/* Logo and Copyright Section */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1">
                <span className="font-bold text-black">24</span>
              </div>
              <span className="text-xl text-white">Svcs</span>
            </div>
            <p className="text-sm text-gray-500">
              © copyright 24Svcs 2024. All rights reserved.
            </p>
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
      <div className="inset-0 mt-10 flex items-center justify-center text-center">
        <div className="pointer-events-none select-none text-[20vw] font-bold leading-none text-[#191919] shadow">
          24Svcs
        </div>
      </div>
    </footer>
  );
}
