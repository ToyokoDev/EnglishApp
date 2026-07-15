import { LoginForm } from "@/components/login-form";
import { auth } from "@/lib/auth";
import { GalleryVerticalEndIcon } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) redirect("/home");
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted">
      {/* Xóa class: fixed, left-1/2, -translate-x-1/2 */}
      <div className="flex w-full max-w-sm flex-col gap-2">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEndIcon className="size-4" />
          </div>
          Plan App
        </a>
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
