import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers"; // Nhập từ đây

const LandingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) redirect("/home");
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      landing page
    </div>
  );
};
export default LandingPage;
