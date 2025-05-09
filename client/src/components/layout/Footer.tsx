import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2024 Zenkinns. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/about" className="text-gray-500 hover:text-primary">
            About Us
          </Link>
          <Link href="/products" className="text-gray-500 hover:text-primary">
            Products
          </Link>
          <Link href="/franchise" className="text-gray-500 hover:text-primary">
            Franchise
          </Link>
        </div>
      </div>
    </footer>
  );
}