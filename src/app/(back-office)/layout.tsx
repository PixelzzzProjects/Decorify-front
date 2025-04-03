import Navbar from "@/widgets/back-office/navbar/ui/Navbar";
import Sidebar from "@/widgets/back-office/sidebar/ui/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar />
      <div className="w-full">
        {/* Header */}
        <Navbar />
        <main className="p-8 bg-green-100 text-yellow-600">{children}</main>
        {/* Main body */}
      </div>
      {/* main body */}
    </div>
  );
}
