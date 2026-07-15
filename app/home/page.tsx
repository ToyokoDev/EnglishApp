import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers"; // Nhập từ đây
const Home = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) redirect("/login");
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div>Home Page</div>
    </div>
  );
};
export default Home;
