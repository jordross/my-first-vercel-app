"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { contact, phoneHref } from "@/lib/site";

const requestTypes = [
  "Vendor package (insurance, WorkSafeBC, sample scope)",
  "Free site walk and written scope",
  "Quote for 2027",
  "Single-site pilot",
  "Something else",
];

const emptyForm = {
  requestType: requestTypes[0],
  name: "",
  company: "",
  email: "",
  phone: "",
  site: "",
  message: "",
  _gotcha: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full px-4 py-3 border border-earth-300 rounded-lg focus:ring-2 focus:ring-happy-green-500 focus:border-transparent outline-none transition";
const labelClass = "block text-earth-700 font-semibold mb-2";

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form._gotcha) return;

    if (!contact.formEndpoint) {
      const body = [
        `Request: ${form.requestType}`,
        `Name: ${form.name}`,
        `Company / strata: ${form.company}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Building address / city: ${form.site}`,
        "",
        form.message,
      ].join("\n");
      const subject = `${form.requestType.split(" (")[0]}: ${form.company || form.name}`;
      window.location.href = `mailto:${contact.email ?? ""}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("submitting");
    try {
      const { _gotcha, ...payload } = form;
      void _gotcha;
      const response = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Form endpoint returned ${response.status}`);
      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-earth-50 to-happy-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-happy-green-700 mb-4">Get the vendor package or book a site walk</h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Tell us about your building. Only your name and email are required.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            {status === "success" ? (
              <div className="bg-white rounded-lg shadow-lg p-10 text-center" role="status">
                <CheckCircle2 className="w-14 h-14 text-happy-green-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-happy-green-700 mb-2">Thanks, we&apos;ve got it.</h3>
                <p className="text-earth-700 max-w-md mx-auto">
                  We&apos;ll reply by email with next steps. If you asked for the vendor package, the documents will be attached.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                <div className="mb-6">
                  <label htmlFor="requestType" className={labelClass}>What do you need?</label>
                  <select id="requestType" name="requestType" value={form.requestType} onChange={handleChange} className={`${inputClass} bg-white`}>
                    {requestTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className={labelClass}>Name *</label>
                    <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>Company / strata</label>
                    <input id="company" name="company" type="text" autoComplete="organization" value={form.company} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="site" className={labelClass}>Building address or city</label>
                  <input id="site" name="site" type="text" placeholder="e.g. 1234 W 10th Ave, Vancouver" value={form.site} onChange={handleChange} className={inputClass} />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className={labelClass}>Anything else?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Number of buildings, current contract end date, known issues..."
                  />
                </div>

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="_gotcha">Leave this field empty</label>
                  <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" value={form._gotcha} onChange={handleChange} />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-happy-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-happy-green-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? "Sending..." : (<>Send request <Send className="w-5 h-5" aria-hidden="true" /></>)}
                </button>
                <p className="mt-3 text-center text-sm text-earth-600">No obligation. We only use your details to reply.</p>

                {status === "error" && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg" role="alert">
                    Something went wrong sending the form.
                    {contact.email ? <> Please email us at <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a>.</> : " Please try again."}
                  </div>
                )}
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-happy-green-700 mb-4">What happens next</h3>
              <ol className="space-y-3 text-sm text-earth-700 list-decimal list-inside">
                <li>We reply by email, with documents attached if you asked for the vendor package.</li>
                <li>If useful, we book a site walk at a time that suits you or the council.</li>
                <li>You get a written scope and annual price council can compare.</li>
              </ol>
            </div>

            {contact.email && (
              <a href={`mailto:${contact.email}`} className="flex items-start gap-4 bg-white rounded-lg shadow-lg p-6 hover:ring-2 hover:ring-happy-green-200">
                <span className="bg-happy-green-100 text-happy-green-700 p-3 rounded-lg"><Mail className="w-5 h-5" aria-hidden="true" /></span>
                <span>
                  <span className="block font-bold text-happy-green-700 mb-1">Email</span>
                  <span className="text-earth-600 break-all">{contact.email}</span>
                </span>
              </a>
            )}

            {contact.phone && phoneHref && (
              <a href={phoneHref} className="flex items-start gap-4 bg-white rounded-lg shadow-lg p-6 hover:ring-2 hover:ring-happy-green-200">
                <span className="bg-happy-green-100 text-happy-green-700 p-3 rounded-lg"><Phone className="w-5 h-5" aria-hidden="true" /></span>
                <span>
                  <span className="block font-bold text-happy-green-700 mb-1">Phone</span>
                  <span className="text-earth-600">{contact.phone}</span>
                </span>
              </a>
            )}

            <div className="flex items-start gap-4 bg-white rounded-lg shadow-lg p-6">
              <span className="bg-happy-green-100 text-happy-green-700 p-3 rounded-lg"><MapPin className="w-5 h-5" aria-hidden="true" /></span>
              <span>
                <span className="block font-bold text-happy-green-700 mb-1">Service area</span>
                <span className="text-earth-600">City of Vancouver first, expanding across Metro Vancouver</span>
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
