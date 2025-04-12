import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "autolux",
  description: "Auto sales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Image
          src="ellipse.svg"
          alt="Ellipse"
          width={725}
          height={723}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: -999,
          }}
        />
      </body>
    </html>
  );
}
