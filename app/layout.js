import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ดูหนังออนไลน์ ดูหนังฟรี คมชัดระดับ Full HD",
  description: "บริการดูหนังออนไลน์แบบถูกลิขสิทธิ์
ดูหนังออนไลน์ฟรี ดูหนังใหม่ ดูหนังเต็มเรื่อง 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <GoogleTagManager gtmId="GTM-WS6MM7N8" />

      <body className={inter.className}>
        
        {children}
      

      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"/> 
      </body>
    

    </html>
  );
}
