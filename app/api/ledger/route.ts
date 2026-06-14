import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";

// Fallback to your env variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// EXACT NAMED EXPORT: GET
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      return NextResponse.json({ error: "Missing DB credentials in .env" }, { status: 500 });
    }

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/global_ledger?resolution_state=eq.Flagged%20(Pending%20Review)&select=*`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        cache: 'no-store' // Always fetch fresh data
      }
    );
    
    if (!res.ok) throw new Error("Database fetch failed");
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch ledger" }, { status: 500 });
  }
}

// EXACT NAMED EXPORT: PATCH
export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { session_id, action } = body;
    
    const newState = action === "approve" ? "Overridden (Human)" : "Denied (Human)";

    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/global_ledger?session_id=eq.${session_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_KEY as string,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          Prefer: "return=representation"
        },
        body: JSON.stringify({ resolution_state: newState }),
      }
    );
    
    if (!res.ok) throw new Error("Database update failed");

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update ledger" }, { status: 500 });
  }
}