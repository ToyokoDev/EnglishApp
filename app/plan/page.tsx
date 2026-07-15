import CardContainer from "@/components/ui/card-container";
import CardVocab from "@/components/ui/card-vocab";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex flex-col gap-6 h-screen items-center">
      <div>
        {/*className -> responsive*/}
        <CardContainer />
        <CardVocab />
      </div>
    </div>
  );
}
