// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "Web Apps",
    blurb:
      "We design and ship modern web apps in weeks. React/Node architecture, secure auth, clean APIs, and dashboards that scale.",
    q: "web-app",
  },
  {
    title: "Performance",
    blurb:
      "Improve Core Web Vitals with image/CDN budgets and code-splitting. Faster loads you can measure in production.",
    q: "performance",
  },
  {
    title: "Personal Website & Business Websites ",
    blurb:
      "We can design personal website or your business website for you",
    q: "Personal Website",
  },
  {
    title: "DevOps",
    blurb:
      "CI/CD, Docker, staging, and observability. Safer, repeatable deploys with shorter MTTR.",
    q: "devops",
  },
  {
  title: "Data & APIs",
  blurb:
    "Plan and build REST/GraphQL APIs, integrations, and data workflows. Clear contracts, versioning, and docs.",
  q: "data-apis",
},
  {
    title: "Consulting",
    blurb:
      "Roadmaps, code reviews, and architecture choices with trade-offs made explicit—so you can move with clarity.",
    q: "consulting",
  },
];

export default function Home() {
  return (
    <main className="main">
      {/* HERO */}
      <section className="hero-min">
        <div className="container hero-min-inner">
          <div className="hero-min-copy">
            <h1>Build. Ship. Improve.</h1>
            <p>
              We build the software you need—on time and measured against
              outcomes that matter. Weekly demos, production-ready delivery, and
              continuous tuning for speed, stability, and conversion.
            </p>

            <ul className="hero-points">
              <li>Short sprints with weekly demos—no big reveals.</li>
              <li>Performance you can feel: faster loads, fewer errors.</li>
              <li>Clean handoff: docs, tests, and production-ready code.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="whatwedo" className="section-what">
        <div className="container">
          <h2 className="section-title">Our Services</h2>

          <div className="cards-grid">
            {SERVICES.map((s) => (
              <article className="card" key={s.title}>
                {/* 只有定义了 icon 才渲染，默认不显示 */}
                {s.icon && (
                  <div className="card-icon" aria-hidden="true">
                    {s.icon}
                  </div>
                )}

                <h3>{s.title}</h3>
                <p className="card-blurb">{s.blurb}</p>

                <Link
                  className="card-cta"
                  to={`/contact?type=${encodeURIComponent(s.q ?? s.title)}`}
                  aria-label={`Contact about ${s.title}`}
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
