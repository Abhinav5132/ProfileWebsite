import "./globals.css";
import { Titlebar } from "./page" 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Titlebar></Titlebar>
        {children}
      </body>
    </html>
  );
}
