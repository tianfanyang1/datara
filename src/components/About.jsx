export default function About() {
  return (
    <section className="section-what">
      <div className="container">
        <p className="eyebrow">About Datara</p>
        <h1 className="section-title">Software development that ships — reliably.</h1>
        <p className="section-sub">
          DATARA is a US-based software development studio focused on{" "}
          <strong>engineering quality</strong>, <strong>delivery speed</strong>, and{" "}
          <strong>maintainability</strong>. We design and build modern web and
          backend systems that scale with your business—fast to launch, stable to run,
          and easy to evolve.
        </p>

        <div className="cards-grid" style={{ marginTop: 12 }}>
          <article className="card">
            <h3>Custom Web Apps</h3>
            <p>React / Node / REST / GraphQL — from MVP to production with tests, observability, and maintainable code.</p>
          </article>
          <article className="card">
            <h3>APIs & Integrations</h3>
            <p>High-availability APIs, partner integrations, and data sync with clear SLAs and rollback strategies.</p>
          </article>
          <article className="card">
            <h3>Cloud & DevOps</h3>
            <p>CI/CD pipelines, containerization, blue/green & canary rollouts, cost optimization, and security baselines.</p>
          </article>
          <article className="card">
            <h3>Performance</h3>
            <p>Core Web Vitals, caching/CDN strategies, DB & queue tuning—metrics-driven, measurable speed gains.</p>
          </article>
          <article className="card">
            <h3>CMS & Content</h3>
            <p>WordPress/Headless workflows that balance editorial speed with frontend performance.</p>
          </article>
          <article className="card">
            <h3>Consulting</h3>
            <p>Roadmaps, architecture choices, code reviews, and refactoring plans—make confident decisions.</p>
          </article>
        </div>

        <p className="eyebrow" style={{ marginTop: 36 }}>Who we help</p>
        <div className="cards-grid">
          <article className="card">
            <h3>Startups</h3>
            <p>Ship MVPs quickly with clear scope, short iterations, and safe rollbacks.</p>
          </article>
          <article className="card">
            <h3>Growing Teams</h3>
            <p>Scale existing products: refactors, performance, pipelines, and environment governance.</p>
          </article>
          <article className="card">
            <h3>Brands & Publishers</h3>
            <p>High-performance content sites with global delivery and editorial workflows that don’t block speed.</p>
          </article>
        </div>

        <p className="eyebrow" style={{ marginTop: 36 }}>How we work</p>
        <div className="cards-grid">
          <article className="card">
            <h3>Discover</h3>
            <p>Align goals, success metrics, and risks; produce scope and a realistic timeline.</p>
          </article>
          <article className="card">
            <h3>Design</h3>
            <p>Information architecture, UX flows, API & data models, acceptance criteria, and monitoring plans.</p>
          </article>
          <article className="card">
            <h3>Build</h3>
            <p>Clean code, branching strategy, automated tests & reviews; ship running software at each milestone.</p>
          </article>
          <article className="card">
            <h3>Ship</h3>
            <p>Blue/green & canary deploys, rollback policies, backups, and observability—reliable launches.</p>
          </article>
          <article className="card">
            <h3>Grow</h3>
            <p>Continuous optimization using analytics: speed, reliability, and conversion lift.</p>
          </article>
          <article className="card">
            <h3>Security</h3>
            <p>Dependency hygiene, secrets management, least-privilege access, and auditing baked into the process.</p>
          </article>
        </div>

        {/* Values */}
        <p className="eyebrow" style={{ marginTop: 36 }}>What we value</p>
        <div className="cards-grid">
          <article className="card">
            <h3>Clarity first</h3>
            <p>Clear goals and boundaries so every sprint delivers certain value.</p>
          </article>
          <article className="card">
            <h3>Quality matters</h3>
            <p>Engineering quality isn't optional—it's the foundation for shipping and scaling.</p>
          </article>
          <article className="card">
            <h3>Ship & learn</h3>
            <p>Launch early, measure, iterate—use data to guide the next best step.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
