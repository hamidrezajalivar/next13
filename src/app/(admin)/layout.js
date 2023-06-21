import { Inter } from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" className="overflow-x-hidden">
      <head></head>
      <body className={`bg-myCustomBgBody h-screen p-0 m-0 overflow-x-hidden`}>
        route group
        <br />
        {children}
      </body>
    </html>
  );
}
