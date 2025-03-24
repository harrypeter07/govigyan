"use server"

import nodemailer from "nodemailer"

interface EmailData {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  formType?: string
}

export async function sendEmail(data: EmailData) {
  try {
    const { name, email, phone, subject, message, formType } = data

    // Validate required fields
    if (!name || !email || !message) {
      return {
        success: false,
        message: "Name, email, and message are required fields",
      }
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Determine subject based on form type
    let emailSubject = subject || `New message from ${name} via Go Vigyan Website`
    if (formType) {
      switch (formType) {
        case "training":
          emailSubject = `Training Registration: ${name}`
          break
        case "consultation":
          emailSubject = `Ayurvedic Consultation Request: ${name}`
          break
        default:
          emailSubject = `${formType}: ${name}`
      }
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "hassanmansuri570@gmail.com", // Recipient email
      subject: emailSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #4d7c0f; border-bottom: 2px solid #4d7c0f; padding-bottom: 10px;">New Message from Go Vigyan Website</h2>
          <p><strong>Form Type:</strong> ${formType || "Contact Form"}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
            <p style="margin-top: 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">This email was sent from the Go Vigyan website.</p>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: "Email sent successfully",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}

