"use client"

import { useState, useEffect } from "react"
import "./Contact.css"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [validationErrors, setValidationErrors] = useState({
    email: "",
  })
  const [touched, setTouched] = useState({
    email: false,
  })

  
  const validateEmail = (email) => {
    
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!email) {
      return "Email is required"
    } else if (!emailRegex.test(email.toLowerCase())) {
      return "Please enter a valid email address"
    }
    return ""
  }

 
  useEffect(() => {
    if (touched.email) {
      const emailError = validateEmail(formData.email)
      setValidationErrors((prev) => ({
        ...prev,
        email: emailError,
      }))
    }
  }, [formData.email, touched.email])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))
  }

  const isFormValid = () => {
    
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== "" &&
      !validationErrors.email
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    
    setTouched({
      email: true,
    })

    
    const emailError = validateEmail(formData.email)
    if (emailError) {
      setValidationErrors((prev) => ({
        ...prev,
        email: emailError,
      }))
      return
    }

    if (!isFormValid()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
     
      const response = await fetch("https://formspree.io/f/xpwdrwjp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      
        setTouched({
          email: false,
        })
      } else {
        throw new Error(data.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      setSubmitError(error.message)
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">CONTACT</h2>
        <div className="title-underline"></div>

        <p className="contact-intro">
          Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.
        </p>

        <div className="form-container">
          {submitSuccess ? (
            <div className="success-message">
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button
                className="submit-button"
                onClick={() => setSubmitSuccess(false)}
                style={{ margin: "20px auto 0" }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className={`form-group ${touched.email && validationErrors.email ? "has-error" : ""}`}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  disabled={isSubmitting}
                  className={touched.email && validationErrors.email ? "input-error" : ""}
                />
                {touched.email && validationErrors.email && (
                  <div className="validation-error">{validationErrors.email}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {submitError && (
                <div className="error-message">
                  <p>{submitError}</p>
                </div>
              )}

              <button type="submit" className="submit-button" disabled={isSubmitting || !isFormValid()}>
                {isSubmitting ? "SENDING..." : "SUBMIT"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
