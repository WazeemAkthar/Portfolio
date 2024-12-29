import "./globals.css"; // Global CSS
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Portfolio",
  description:
    "My portfolio showcasing web development and copywriting careers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header>
            <Navbar />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
