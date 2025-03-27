import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-gray-800 w-64 h-screen">
      <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
        <h2 className="text-2xl">Admin Panel</h2>
        {/* <img src="/logo.svg" alt="logo" className="h-8" /> */}
      </div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link href="#">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="#">Catalogue</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="#">Orders</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="#">Products</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="#">Customers</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="#">Markets</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="#">Vendors</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="#">Staff</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="#">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
