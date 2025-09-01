import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Providers from "@/components/Providers";
import { ReactNode } from "react";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Cragenda",
  description: "An App to check off the climbs you want to do",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        <main className="p-20 max-w-5xl mx-auto">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}

// import "./globals.css";
// import { auth } from "@/auth";
// import Providers from "@/components/Providers";

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const session = await auth();

//   return (
//     <html lang="en">
//       <body>
//         {/* Wrap the application in the SessionProvider so that client components
//             can access the authentication session via useSession().  The
//             Header component is now rendered in the page itself instead of
//             the layout. */}
//         <Providers session={session}>{children}</Providers>
//       </body>
//     </html>
//   );
// }
