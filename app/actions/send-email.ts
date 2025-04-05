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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #4d7c0f; margin: 0; padding-bottom: 15px; border-bottom: 2px solid #4d7c0f;">New Message from Go Vigyan Website</h2>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="color: #2d3748; margin: 0 0 15px 0;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #4a5568; width: 120px;"><strong>Form Type:</strong></td>
                <td style="padding: 8px 0; color: #2d3748;">${formType || "Contact Form"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #4a5568;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #2d3748;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #4a5568;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #2d3748;">${email}</td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; color: #4a5568;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0; color: #2d3748;">${phone}</td>
              </tr>` : ""}
              ${subject ? `
              <tr>
                <td style="padding: 8px 0; color: #4a5568;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0; color: #2d3748;">${subject}</td>
              </tr>` : ""}
            </table>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px;">
            <h3 style="color: #2d3748; margin: 0 0 15px 0;">Message</h3>
            <div style="color: #2d3748; white-space: pre-line; line-height: 1.6;">${message}</div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #718096;">This email was sent from the Go Vigyan website</p>
          </div>
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

