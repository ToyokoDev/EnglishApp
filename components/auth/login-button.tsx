import Link from "next/link";
import { LogIn } from "lucide-react";
import { Button } from "../ui/button";

export const LoginButton = () => {
  return (
    <Button variant="secondary" className="font-semibold h-10" asChild>
      <Link href="/login">
        <LogIn className="w-4 h-4" />
        Sign In
      </Link>
    </Button>
  );
};
