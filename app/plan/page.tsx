

import CardVocab from "@/components/ui/card-vocab";
import { PlayButton } from "@/components/ui/play-btn";
import { CreateVocabPopup } from "@/components/ui/createVocabPopup";
import HeroWord from "@/components/ui/hero-word";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex min-h-screen flex-col items-center pt-10">
      <div className="w-full flex flex-col items-center">
        <HeroWord />
        <CardVocab vocab='Serendipity' definition='surprised lucky' type='noun'/>
        <div className='flex'>
        <PlayButton />
        <CreateVocabPopup userId={session.user.id} />
        </div>
      </div>
    </div>
  );
}
