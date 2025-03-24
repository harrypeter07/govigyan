"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { sendEmail } from "@/app/actions/send-email"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface ContactFormProps {
  formType?: string
  title?: string
  subtitle?: string
  className?: string
}

export function ContactForm({
  formType = "contact",
  title = "Contact Us",
  subtitle = "We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
  className = "",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: "" })

    try {
      const result = await sendEmail({
        ...formData,
        formType,
      })

      if (result.success) {
        setFormStatus({
          type: "success",
          message: "Your message has been sent successfully! We'll get back to you soon.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setFormStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className={`p-6 shadow-md ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      {formStatus.type && (
        <div
          className={`mb-6 p-4 rounded-md ${
            formStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}
        >
          <div className="flex items-start">
            {formStatus.type === "success" ? (
              <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-green-500" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2 mt-0.5 text-red-500" />
            )}
            <p>{formStatus.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder="Your email"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder="Your phone number"
          />
        </div>

        {formType === "contact" && (
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="Subject of your message"
            />
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            placeholder="Your message"
          ></textarea>
        </div>

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Card>
  )
}

