import React from "react";
import Link from "next/link";

const Home = () => {
  console.log("Hello from home");
  return (
    <>
      <h1 className="text-6xl mb-8 font-bold">Next.js Course</h1>
      <Link href="/counter" className="btn btn-accent">
        Start
      </Link>
    </>
  );
};

export default Home;

// import Header from "@/components/Header";
// import Logo from "@/components/Logo";
// import ListContainer from "@/components/ListContainer";
// import { auth } from "@/auth";
// import prisma from "@/lib/prisma";

// The home page fetches the current user's lists and renders them alongside
// a search field and a button to create a new list.  The Header shows
// authentication controls and the user's name when they are signed in.  If
// no user is signed in, the lists array will be empty and the UI will
// encourage the user to sign in via the header.
// export default async function Home() {
//   const session = await auth();
//   let lists: { id: string; name: string }[] = [];
//   if (session?.user?.id) {
//     try {
//       lists = await prisma.list.findMany({
//         where: { ownerId: session.user.id },
//         orderBy: { createdAt: "desc" },
//         select: { id: true, name: true },
//       });
//     } catch (error) {
//       console.error("Error fetching lists", error);
//     }
//   }
//   return (
//     <div className="p-4 max-w-xl mx-auto">
//       <Header />
//       <div className="my-8 space-y-6">
//         <Logo />
//         <ListContainer lists={lists} />
//       </div>
//     </div>
//   );
// }
