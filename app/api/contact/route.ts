import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 1. Configure the transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// 2. Helper to generate visually appealing HTML email
const generateEmailTemplate = (data: {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; }
          .header { background-color: #d81e1f; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .header h1 { color: #ffffff; margin: 0; font-size: 24px; }
          .content { background-color: #ffffff; padding: 30px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
          .value { display: block; padding: 10px; background-color: #f4f4f4; border-radius: 4px; border: 1px solid #ddd; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #888; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Inquiry</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Full Name:</span>
              <span class="value">${data.fullName}</span>
            </div>
            <div class="field">
              <span class="label">Email Address:</span>
              <span class="value"><a href="mailto:${data.email}">${data.email}</a></span>
            </div>
            <div class="field">
              <span class="label">Phone Number:</span>
              <span class="value"><a href="tel:${data.phone}">${data.phone}</a></span>
            </div>
            <div class="field">
              <span class="label">Message:</span>
              <span class="value" style="white-space: pre-wrap;">${data.message}</span>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from your website contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// 3. The POST Handler
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, message } = body;

    // Simple server-side validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.GMAIL_USER, // Sender address (must be your gmail)
      to: process.env.GMAIL_USER, // Receiver address (sending to yourself)
      replyTo: email, // Hitting "Reply" will reply to the customer
      subject: `New Contact Form Submission from ${fullName}`,
      html: generateEmailTemplate({ fullName, email, phone, message }),
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`, // Fallback for clients w/o HTML
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
