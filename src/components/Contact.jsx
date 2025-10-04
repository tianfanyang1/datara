import React from "react";

export default function Contact() {
  return (
    <section data-contact-clean>
      <style>{`
        [data-contact-clean], [data-contact-clean] * { box-sizing: border-box; }
        [data-contact-clean] { text-align: left !important; }

        [data-contact-clean] .wrap {
          max-width: 900px;
          margin: 0 auto;
          padding: 32px 16px;
        }

        /* 标题 + 引言 */
        [data-contact-clean] .title {
          font-weight: 800;
          font-size: clamp(32px, 3.6vw, 48px);
          letter-spacing: .01em;
          margin: 8px 0 10px;
        }
        [data-contact-clean] .intro {
          font-size: clamp(16px, 1.25vw, 18px);
          line-height: 1.7;
          color: rgba(255,255,255,.88);
          margin: 0 0 22px;
        }

        /* 表单卡片 */
        [data-contact-clean] .card {
          background: #cfe0ff;                /* 浅蓝卡片，深色背景上对比好 */
          color: #0a0f2b;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 10px 28px rgba(0,0,0,.18);
          color-scheme: light;
        }

        [data-contact-clean] .grid2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 720px) {
          [data-contact-clean] .grid2 { grid-template-columns: 1fr; }
        }

        [data-contact-clean] label {
          display: grid;
          gap: 8px;
          font-weight: 600;
        }

        [data-contact-clean] input,
        [data-contact-clean] select,
        [data-contact-clean] textarea {
          appearance: none;
          -webkit-appearance: none;
          background: #fff !important;
          color: #0a0f2b !important;
          border: 1px solid rgba(10,15,43,.28) !important;
          border-radius: 12px !important;
          padding: 12px 14px !important;
          font: 16px/1.4 system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif !important;
          width: 100% !important;
          box-shadow: none !important;
        }
        [data-contact-clean] input::placeholder,
        [data-contact-clean] textarea::placeholder {
          color: rgba(10,15,43,.45);
        }
        [data-contact-clean] input:focus,
        [data-contact-clean] select:focus,
        [data-contact-clean] textarea:focus {
          outline: 2px solid #5aa0ff;
          border-color: #5aa0ff !important;
        }
        [data-contact-clean] input:-webkit-autofill,
        [data-contact-clean] input:-webkit-autofill:focus{
          -webkit-text-fill-color: #0a0f2b !important;
          -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important;
        }

        [data-contact-clean] .actions {
          margin-top: 14px;
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }
        [data-contact-clean] .btn {
          background:#0a0f2b;
          color:#fff;
          border: none;
          border-radius: 12px;
          padding: 12px 16px;
          font-weight: 700;
          cursor: pointer;
          transition: transform .15s ease, opacity .15s ease;
        }
        [data-contact-clean] .btn:hover { opacity:.92; transform: translateY(-1px); }
      `}</style>

      <div className="wrap">
        <h1 className="title">Get in touch</h1>
        <p className="intro">
          Tell us briefly about your project, timeline, and goals. We’ll get back
          to you within one business day with next steps.
        </p>

        <form
          className="card"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! We received your message.");
          }}
        >
          <div className="grid2">
            <label>
              Full Name*
              <input name="name" type="text" placeholder="Jane Doe" required />
            </label>
            <label>
              Work Email*
              <input
                name="email"
                type="email"
                placeholder="jane@company.com"
                required
              />
            </label>
          </div>

          <div className="grid2" style={{ marginTop: 14 }}>
            <label>
              Company*
              <input name="company" type="text" placeholder="Acme Inc." required />
            </label>
            <label>
              Website (optional)
              <input name="site" type="url" placeholder="https://example.com" />
            </label>
          </div>

          <div className="grid2" style={{ marginTop: 14 }}>
            <label>
              Project Type*
              <select name="type" defaultValue="" required>
                <option value="" disabled>
                  Select one…
                </option>
                <option>Web App</option>
                <option>E-commerce</option>
                <option>Performance</option>
                <option>DevOps</option>
                <option>Consulting</option>
              </select>
            </label>
            <label>
              Message*
              <textarea
                name="message"
                rows="5"
                placeholder="What are you trying to build? Any timeline or constraints?"
                required
              />
            </label>
          </div>

          <div className="actions">
            <button className="btn" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
