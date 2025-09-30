import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//global metadata
export const metadata = {
  title: "Blog",
  description: "A list of posts with insights",
  //metadata properties that are compatible with social media shares --> creates a preview
  //openGraph can be used in static and dynamic pages too
  openGraph: {
    title: "Blog",
    description: "A list of posts with insights",
    type: "website",
    url: "http://localhost:3000",
    images: ["imgUrl"],
    //make sure the image is stored in the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
