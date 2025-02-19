import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { error: "All fields are required" }
  }

  try {
    await resend.emails.send({
      from: "Personal Website <onboarding@resend.dev>",
      to: "jonathanginevro@outlook.com",
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    })
    
    return { success: true }
  } catch (error) {
    console.error(error)
    return { error: "Failed to send email" }
  }
}