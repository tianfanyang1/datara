import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xovklkoz"); 

  return (
    <section data-contact-clean>
      <style>{`
        [data-contact-clean], [data-contact-clean] * { box-sizing: border-box; }
        [data-contact-clean] { text-align: left !important; }
        .wrap { max-width: 900px; margin: 0 auto; padding: 32px 16px; }

        .title { font-weight: 800; font-size: clamp(32px, 3.6vw, 48px); letter-spacing: .01em; margin: 8px 0 10px; }
        .intro { font-size: clamp(16px, 1.25vw, 18px); line-height: 1.7; color: rgba(255,255,255,.88); margin: 0 0 10px; }
        .alt-contact { margin: 4px 0 24px; font-size: 15px; color: rgba(255,255,255,.9); }
        .alt-contact a { color: #7aa2ff; text-decoration: underline; }
        .alt-contact a:hover { opacity: .9; }

        .card { background: #cfe0ff; color: #0a0f2b; border-radius: 16px; padding: 22px; box-shadow: 0 10px 28px rgba(0,0,0,.18); color-scheme: light; }

        .contact-grid{
          display:grid; gap:14px; grid-template-columns: 1fr 1fr;
          grid-template-areas:
            "name   email"
            "website project"
            "message message"
            "actions actions";
        }
        .fld.name{ grid-area: name; }
        .fld.email{ grid-area: email; }
        .fld.website{ grid-area: website; }
        .fld.project{ grid-area: project; }
        .fld.message{ grid-area: message; }
        .actions{ grid-area: actions; display:flex; justify-content:flex-end; gap:10px; margin-top: 4px; }

        @media (max-width: 720px){
          .contact-grid{
            grid-template-columns: 1fr;
            grid-template-areas: "name" "email" "website" "project" "message" "actions";
          }
        }

        label { display: grid; gap: 8px; font-weight: 600; }
        input, select, textarea {
          appearance: none; -webkit-appearance: none; background: #fff !important; color: #0a0f2b !important;
          border: 1px solid rgba(10,15,43,.28) !important; border-radius: 12px !important; padding: 12px 14px !important;
          font: 16px/1.4 system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important; width: 100% !important; box-shadow: none !important;
        }
        input::placeholder, textarea::placeholder { color: rgba(10,15,43,.45); }
        input:focus, select:focus, textarea:focus { outline: 2px solid #5aa0ff; border-color: #5aa0ff !important; }
        input:-webkit-autofill, input:-webkit-autofill:focus{ -webkit-text-fill-color: #0a0f2b !important; -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important; }

        .btn { background:#0a0f2b; color:#fff; border: none; border-radius: 12px; padding: 12px 16px; font-weight: 700; cursor: pointer; transition: transform .15s ease, opacity .15s ease; }
        .btn:hover { opacity:.92; transform: translateY(-1px); }

        /* 成功提示样式（更深的文字颜色） */
        .success {
          background: #bfd2ff;
          border: 1px solid #7aa2ff;
          color: #0a0f2b;          /* 深色字体 */
          border-radius: 14px;
          padding: 18px 20px;
          font-weight: 700;
          font-size: 18px;
        }
      `}</style>

      <div className="wrap">
        <h1 className="title">Contact Us</h1>
        <p className="intro">
          Tell us briefly about your project, timeline, and goals. We’ll get back
          to you within one business day with next steps.
        </p>
        <p className="alt-contact">
          Prefer email? <a href="mailto:info@dataratech.com">info@dataratech.com</a>
        </p>

        {state.succeeded ? (
          <div className="success">
            Thanks! Your message was sent. We’ll reach out soon.
          </div>
        ) : (
          <form className="card contact-grid" onSubmit={handleSubmit}>
            <label className="fld name">
              Full Name*
              <input name="name" type="text" placeholder="Your Name" required />
            </label>

            <label className="fld email">
              Your Email*
              <input name="email" type="email" placeholder="example@mail.com" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </label>

            <label className="fld website">
              Link Website (optional)
              <input name="site" type="url" placeholder="https://example.com" />
            </label>

            <label className="fld project">
              Project Type*
              <select name="type" defaultValue="" required>
                <option value="" disabled>Select one…</option>
                <option>Web App</option>
                <option>Marketing/Business Website</option>
                <option>Platform, API & Database</option>
                <option>E-commerce</option>
                <option>Consulting / Code Review</option>
                <option>Other</option>
              </select>
              <ValidationError prefix="Project Type" field="type" errors={state.errors} />
            </label>

            <label className="fld message">
              Message*
              <textarea
                name="message"
                rows="5"
                placeholder="What are you trying to build? Any timeline or constraints?"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </label>
            <input type="hidden" name="_subject" value="New Contact from dataratech.com" />
            <label style={{ display: "none" }}>
              Leave this empty
              <input name="_gotcha" type="text" />
            </label>

            <div className="actions">
              <button className="btn" type="submit" disabled={state.submitting}>
                {state.submitting ? "Sending…" : "Send Message"}
              </button>
            </div>

            <ValidationError errors={state.errors} />
          </form>
        )}
      </div>
    </section>
  );
}
