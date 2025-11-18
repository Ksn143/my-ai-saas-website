import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-8 h-8 rounded bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold text-xs">KW</div>
             <span className="font-bold text-lg">Hikewa</span>
          </div>
          <p className="text-sm text-gray-500">AI-powered business operations for the modern entrepreneur.</p>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/product">Features</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/dfy">DFY Setup</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Hikewa Inc. All rights reserved.
      </div>
    </footer>
  );
}