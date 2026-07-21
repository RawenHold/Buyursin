import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ProposalBuilder } from "@/modules/proposal/proposal-builder";
import { ADMIN_COOKIE, verifyAdminToken } from "@/lib/admin-auth";

export default async function AdminProposalPage() {
  const cookieStore = await cookies();
  if (!verifyAdminToken(cookieStore.get(ADMIN_COOKIE)?.value)) redirect("/admin/proposal/login");
  return (
    <div>
      <form action="/api/admin/logout" method="post" className="no-print fixed right-4 top-4 z-[100]">
        <button className="rounded-xl border border-black/10 bg-white px-3 py-2 text-xs font-bold shadow-sm" type="submit">Выйти</button>
      </form>
      <ProposalBuilder />
    </div>
  );
}
