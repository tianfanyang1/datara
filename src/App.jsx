import React from "react";
import "./App.css";
import HeroLogo from "./assets/datara-logo-icon.svg";

// 为了更安全，把卡片数据写成常量数组（不会报未定义）
const SERVICES = [
  {
    icon: "⚛️",
    title: "Web Apps",
    text:
      "React / Node / REST — pixel-perfect, responsive, and fast. From MVPs to production systems.",
  },
  {
    icon: "🧩",
    title: "WordPress",
    text:
      "Themes, performance tuning, content workflows—publish faster with confidence.",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    text:
      "Product pages that convert, snappy carts, and stable checkouts that keep revenue flowing.",
  },
  {
    icon: "🚀",
    title: "Performance",
    text:
      "Lighthouse, Core Web Vitals, caching/CDN strategies—measurable speed improvements.",
  },
  {
    icon: "🔧",
    title: "DevOps",
    text:
      "CI/CD, Docker, cloud infra—ship safely and automatically with solid pipelines.",
  },
  {
    icon: "🤝",
    title: "Consulting",
    text:
      "Roadmapping, code reviews, architecture choices—make decisions with clarity.",
  },
];

export default function App() {
  return (
    <div className="app">

      <header className="site-header">
        <div className="nav-inner">
          <div className="brand">
            <img src={HeroLogo} alt="Datara logo" className="brand-logo" />
            <div className="brand-main">DATARA</div>
            <div className="brand-sub">YOUR SOFTWARE RESOURCE</div>
          </div>

          <nav className="menu">
            <a href="#home">HOME</a>
            <a href="#whatwedo">ABOUT</a> 
            <a href="#contact">CONTACT</a>  
          </nav>
        </div>
      </header>

      <main id="home" className="main">
        <section className="hero-min">
          <div className="container hero-min-inner">
            <div className="hero-min-copy">
              <h1>Helping you build the website you&apos;ve always wanted.</h1>
              <p>
                From idea to launch — fast, reliable, and maintainable. Datara
                builds modern web solutions that scale with your business.
              </p>
            </div>

            <img src={HeroLogo} alt="Datara mark" className="hero-min-logo" />
          </div>
        </section>

        <section id="whatwedo" className="section-what">
          <div className="container">
            <p className="eyebrow">What We Do</p>
            <h2 className="section-title">Practical services that ship.</h2>
            <p className="section-sub">
              We focus on the essentials—clear goals, solid engineering, and
              clean delivery. Here’s how we can help you move faster.
            </p>

            <div className="cards-grid">
              {SERVICES.map((s) => (
                <article className="card" key={s.title}>
                  <div className="card-icon" aria-hidden="true">
                    {s.icon}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="site-footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Datara. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
