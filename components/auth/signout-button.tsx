"use client";

import { authClient } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const SignoutButton = () => {
  const router = useRouter();
  const signout = async () =>
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/login"),
      },
    });
  return (
    <Button
      onClick={signout}
      variant="secondary"
      className="font-semibold h-10"
      asChild
    >
      <div className="flex">
        <LogOut className="w-4 h-4" />
        Sign Out
      </div>
    </Button>
  );
};
