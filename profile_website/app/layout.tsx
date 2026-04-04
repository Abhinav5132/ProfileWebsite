import "./globals.css";
import { Titlebar } from "./page" 
import  VeiwPort  from '@/components/VeiwPort';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <div className="fixed inset-0 -z-10">
          <VeiwPort></VeiwPort>
        </div>
        <Titlebar></Titlebar>
         {children}  
      </body>
    </html>
  );
}
