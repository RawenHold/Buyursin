import { NextResponse } from "next/server";
import { ADMIN_COOKIE, adminConfigured, createAdminToken } from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!adminConfigured()) {
    return NextResponse.json({ error: "Admin access is not configured" }, { status: 503 });
  }
  const body = await request.json().catch(() => ({})) as { code?: string };
  if (!body.code || body.code !== process.env.PROPOSAL_ACCESS_CODE) {
    return NextResponse.json({ error: "Invalid access code" }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, createAdminToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8,
    path: "/",
  });
  return response;
}
