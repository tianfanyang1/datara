// export default function About() {
//   return (
//     <section className="section-what">
//       <div className="container">
//         <h1 className="section-title">Software development that ships — reliably.</h1>
//         <p className="section-sub">
//           DATARA is a US-based software development studio focused on{" "}
//           <strong>engineering quality</strong>, <strong>delivery speed</strong>, and{" "}
//           <strong>maintainability</strong>. We design and build modern web and
//           backend systems that scale with your business—fast to launch, stable to run,
//           and easy to evolve.
//         </p>

//         <p className="eyebrow" style={{ marginTop: 36 }}>Who we help</p>
//         <div className="cards-grid">
//           <article className="card">
//             <h3>Startups</h3>
//             <p>Ship MVPs quickly with clear scope, short iterations, and safe rollbacks.</p>
//           </article>
//           <article className="card">
//             <h3>Growing Teams</h3>
//             <p>Scale existing products: refactors, performance, pipelines, and environment governance.</p>
//           </article>
//           <article className="card">
//             <h3>Brands & Publishers</h3>
//             <p>High-performance content sites with global delivery and editorial workflows that don’t block speed.</p>
//           </article>
//         </div>

//         <p className="eyebrow" style={{ marginTop: 36 }}>How we work</p>
//         <div className="cards-grid">
//           <article className="card">
//             <h3>Discover</h3>
//             <p>Align goals, success metrics, and risks; produce scope and a realistic timeline.</p>
//           </article>
//           <article className="card">
//             <h3>Design</h3>
//             <p>Information architecture, UX flows, API & data models, acceptance criteria, and monitoring plans.</p>
//           </article>
//           <article className="card">
//             <h3>Build</h3>
//             <p>Clean code, branching strategy, automated tests & reviews; ship running software at each milestone.</p>
//           </article>
//           <article className="card">
//             <h3>Ship</h3>
//             <p>Blue/green & canary deploys, rollback policies, backups, and observability—reliable launches.</p>
//           </article>
//           <article className="card">
//             <h3>Grow</h3>
//             <p>Continuous optimization using analytics: speed, reliability, and conversion lift.</p>
//           </article>
//           <article className="card">
//             <h3>Security</h3>
//             <p>Dependency hygiene, secrets management, least-privilege access, and auditing baked into the process.</p>
//           </article>
//         </div>


//         {/* Values */}
//         <p className="eyebrow" style={{ marginTop: 36 }}>What we value</p>
//         <div className="cards-grid">
//           <article className="card">
//             <h3>Clarity first</h3>
//             <p>Clear goals and boundaries so every sprint delivers certain value.</p>
//           </article>
//           <article className="card">
//             <h3>Quality matters</h3>
//             <p>Engineering quality isn't optional—it's the foundation for shipping and scaling.</p>
//           </article>
//           <article className="card">
//             <h3>Ship & learn</h3>
//             <p>Launch early, measure, iterate—use data to guide the next best step.</p>
//           </article>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function About() {
  return (
    <main className="main">
      <section className="section-what">
        <div className="container">
          <h1 className="section-title">About DATARA</h1>
          <p className="section-sub">
            A small, senior software studio based in the U.S. We build reliable,
            maintainable systems with short feedback loops and production-ready
            increments.
          </p>

          {/* Who we are */}
          <div className="cards-grid">
            <article className="card">
              <h3>Who we are</h3>
              <p>
                We partner with founders and product teams to turn ideas into
                working software—without ceremony or fluff.
              </p>
            </article>

            <article className="card">
              <h3>What we believe</h3>
              <ul>
                <li><strong>Clarity beats volume</strong> — fewer features, better outcomes.</li>
                <li><strong>Speed with guardrails</strong> — tests, CI/CD, code reviews.</li>
                <li><strong>Measure reality</strong> — production metrics over slides.</li>
                <li><strong>Own the craft</strong> — clean architecture, useful docs.</li>
              </ul>
            </article>

            <article className="card">
              <h3>How we work</h3>
              <ol>
                <li><strong>Discovery (3–5 days):</strong> scope, success, constraints.</li>
                <li><strong>Build (weekly):</strong> ship production-ready slices with demos.</li>
                <li><strong>Launch:</strong> stabilize, document, CI/CD & monitoring.</li>
                <li><strong>Improve:</strong> iterate on performance, errors, conversion.</li>
              </ol>
            </article>

            <article className="card">
              <h3>What we’re good at</h3>
              <p>
                Web apps (React/Node), performance (Core Web Vitals), DevOps
                (CI/CD, Docker), and fast personal/business websites.
              </p>
            </article>

            <article className="card">
              <h3>Tech we use</h3>
              <p>
                React, Node.js, TypeScript, PostgreSQL, Docker, Vite/Next.js,
                GitHub Actions, Playwright/Vitest, Sentry, Grafana/Prometheus.
              </p>
            </article>

            <article className="card">
              <h3>Engagements</h3>
              <ul>
                <li><strong>Fixed scope</strong> — clear deliverables & price.</li>
                <li><strong>Monthly retainer</strong> — ongoing roadmap.</li>
                <li><strong>Rescue & hardening</strong> — speed & reliability.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

