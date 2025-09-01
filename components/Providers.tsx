"use client";

import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

type ProvidersProps = {
  children: ReactNode;
};

const providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default providers;

// "use client";

// import { SessionProvider } from "next-auth/react";
// import type { Session } from "next-auth";

// interface ProvidersProps {
//   children: React.ReactNode;
//   session: Session | null;
// }

// // Providers wraps its children in a SessionProvider so that client
// // components can access the session via the useSession hook.  This
// // component must be a client component because SessionProvider is
// // client-only.
// export default function Providers({ children, session }: ProvidersProps) {
//   return <SessionProvider session={session}>{children}</SessionProvider>;
// }
