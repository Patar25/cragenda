import AuthButtons from "@/components/AuthButtons";
import { auth } from "@/auth";
import Image from "next/image";

// Header is an asynchronous server component so that it can fetch the
// current session on the server.  It displays a greeting when a user
// is signed in and always renders the AuthButtons component for
// sign-in/sign-out controls.
export default async function Header() {
  const session = await auth();
  return (
    <header className="p-4 flex justify-end items-center gap-4">
      {session?.user?.name && (
        <>
          <span className="font-medium">
            Hello, {session.user.name} {session.user.email}
          </span>
          <Image
            src={session.user.image ?? "/placeholder-avatar.png"}
            alt="User Avater"
            width={40}
            height={40}
            className="rounded-full"
          />
        </>
      )}
      <AuthButtons />
    </header>
  );
}
