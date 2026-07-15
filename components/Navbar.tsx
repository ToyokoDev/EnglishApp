import { Calendar, Home, Swords } from "lucide-react";
import ModeToggle from "./ModeToggle";
import { auth } from "../lib/auth";
import { Button } from "./ui/button";
import Link from "next/link";
import { headers } from "next/headers";
import { LoginButton } from "./auth/login-button";
import { SignoutButton } from "./auth/signout-button";
type Props = {};

export default async function Navbar({}: Props) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <nav className="flex items-center w-full h-16 fixed top-0 z-50 bg-background/70 backdrop-blur-md border-b border-border shadow-sm ">
      <div className="flex justify-between item-center w-full mx-[10%]">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl font-bold text-primary font-mono tracker-wider"
          >
            <span className="flex">
              ToDev
              <Swords className="h-4 w-4 rounded-sm text-blue-300" />
            </span>
          </Link>
        </div>

        {/*navbar components*/}

        <div className="hidden md:flex space-x-4 items-center ">
          <div>
            <Button variant="ghost" className="font-semibold h-10" asChild>
              <Link href="/plan">
                <Calendar className="w-4 h-4" />
                Plan
              </Link>
            </Button>
          </div>
          <div>
            <Button variant="ghost" className="font-semibold h-10" asChild>
              <Link href="/home">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </Button>
          </div>

          <ModeToggle />

          {/*Sign in button*/}

          {session ? <SignoutButton /> : <LoginButton />}
        </div>
      </div>
    </nav>
  );
}
