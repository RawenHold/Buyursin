import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "buyursin_proposal_session";
const TOKEN_PAYLOAD = "buyursin-proposal-access-v1";

function secret() {
  return process.env.PROPOSAL_SESSION_SECRET ?? "";
}

export function createAdminToken() {
  const value = secret();
  if (!value) return "";
  return createHmac("sha256", value).update(TOKEN_PAYLOAD).digest("hex");
}

export function verifyAdminToken(token?: string) {
  const expected = createAdminToken();
  if (!expected || !token || expected.length !== token.length) return false;
  return timingSafeEqual(Buffer.from(expected), Buffer.from(token));
}

export function adminConfigured() {
  return Boolean(process.env.PROPOSAL_ACCESS_CODE && process.env.PROPOSAL_SESSION_SECRET);
}
