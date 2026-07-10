import { NextResponse } from "next/server";

/**
 * Contact form handler.
 *
 * Right now this validates the submission and logs it on the server, then
 * returns success so the form works out of the box. To actually receive
 * enquiries, wire up an email provider below — e.g. Resend, Nodemailer, or a
 * webhook to your inbox / CRM. Look for the TODO.
 */

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  timing?: string;
  message?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 422 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 422 },
    );
  }

  // TODO: send this enquiry somewhere you'll actually see it.
  // Example with Resend:
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "Little Nest <hello@littlenest.care>",
  //     to: "hello@littlenest.care",
  //     subject: `New enquiry from ${name}`,
  //     text: `${message}\n\n${email} · ${body.phone ?? ""}`,
  //   });
  console.log("[contact] New enquiry:", {
    name,
    email,
    phone: body.phone,
    service: body.service,
    timing: body.timing,
    message,
  });

  return NextResponse.json({ ok: true });
}
