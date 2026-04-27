import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
}

const leads: (LeadData & { id: string; createdAt: string })[] = [];

export async function POST(req: NextRequest) {
  try {
    const body: LeadData = await req.json();
    if (!body.name || !body.email || !body.company) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const lead = { ...body, id: `lead_${Date.now()}`, createdAt: new Date().toISOString() };
    leads.push(lead);
    return NextResponse.json({ success: true, message: "Thank you! We'll contact you soon.", id: lead.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ count: leads.length, leads });
}
