"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/button";

const inputClass =
  "w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm text-navy transition-colors placeholder:text-body/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

const labelClass = "text-sm font-medium text-navy";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!message) nextErrors.message = "Please tell us how we can help.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col gap-3 rounded-card bg-primary/5 p-8 text-navy"
      >
        <h3 className="h-card">Thank you for reaching out.</h3>
        <p className="body-base text-body/85">
          Your message has been received. A member of the Dumain Group team will get back to
          you shortly.
        </p>
        <div>
          <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="name">
            Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
            placeholder="Your full name"
          />
          {errors.name ? (
            <p id="name-error" className="text-xs text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="email">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
            placeholder="you@company.com"
          />
          {errors.email ? (
            <p id="email-error" className="text-xs text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="080 0000 0000"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="Your organisation"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className={inputClass}
          placeholder="How can we help?"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="message">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass} resize-y`}
          placeholder="Tell us about your project or enquiry"
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div>
        <Button type="submit" size="lg" withArrow>
          Send Message
        </Button>
      </div>
    </form>
  );
}
