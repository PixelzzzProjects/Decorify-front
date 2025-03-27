import Navbar from "@/widgets/back-office/navbar/ui/Navbar";
import Sidebar from "@/widgets/back-office/sidebar/ui/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar />
      <div className="w-full">
        {/* Header */}
        <Navbar />
        <main>{children}</main>
        {/* Main body */}
      </div>
      {/* main body */}
    </div>
  );
}
