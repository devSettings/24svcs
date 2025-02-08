import Link from "next/link";
import { Copyright, Mail, MapPinHouse, Phone } from "lucide-react";
import { TextHoverEffect } from "./24svcs/animated-text";

const products: { id: number; title: string }[] = [
  { id: 1, title: "Quick Sale POS" },
  { id: 2, title: "Izi Achat" },
  { id: 3, title: "Previews" },
];

const company: { id: number; title: string }[] = [
  { id: 1, title: "About" },
  { id: 2, title: "Carrers" },
  { id: 3, title: "Blog" },
  { id: 4, title: "Trust" },
  { id: 5, title: "Clients" },
  { id: 6, title: "Changelog" },
];

const resources: { id: number; title: string }[] = [
  { id: 1, title: "Community" },
  { id: 2, title: "Documentation" },
  { id: 3, title: "Guides" },
  { id: 4, title: "Blog" },
  { id: 5, title: "Pricing" },
];

const legal: { id: number; title: string }[] = [
  { id: 1, title: "Fair Use" },
  { id: 2, title: "Privacy Policy" },
  { id: 3, title: "Terms of Service" },
  { id: 4, title: "Trademark Policy" },
  { id: 5, title: "Cookie Policy" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t bg-zinc-950 px-4 py-20 text-gray-400 shadow md:px-6 lg:px-8">
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
          <div className="text-sm lg:col-span-4 lg:pl-24">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {/* Pages Section */}
              <div>
                <h3 className="mb-4 text-base font-medium text-white">
                  Products
                </h3>
                <ul className="space-y-3">
                  {products.map((product) => (
                    <li key={product.id}>
                      <Link
                        href="/studio"
                        className="transition-colors hover:text-white"
                      >
                        {product.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials Section */}
              <div>
                <h3 className="mb-4 text-base font-medium text-white">
                  Company
                </h3>
                <ul className="space-y-3">
                  {company.sort().map((item) => (
                    <li key={item.id}>
                      <Link
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-base font-medium text-white">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {resources.sort().map((resource) => (
                    <li key={resource.id}>
                      <Link
                        href="/signup"
                        className="transition-colors hover:text-white"
                      >
                        {resource.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Section */}
              <div>
                <h3 className="mb-4 text-base font-medium text-white">Legal</h3>
                <ul className="space-y-3">
                  {legal.map((item) => (
                    <li key={item.id}>
                      <Link
                        href="/privacy"
                        className="transition-colors hover:text-white"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="-mb-10 mt-5 flex h-[12rem] items-center justify-center lg:mb-0 lg:mt-0 lg:h-[20rem]">
        <TextHoverEffect text="24Svcs" />
      </div>
    </footer>
  );
}
