import { Navbar } from "@/componets/Navbar";
import "./globals.css";



export const metadata = {
  title: "Next Photofedd app",
  description: "A simple photo feed app built with advanced rounting concepts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container my-4">
        {children}
        </div>
      </body>
    </html>
  );
}
