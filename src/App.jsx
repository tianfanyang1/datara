import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="nav-inner">
          {/* 左侧：图标在上，下面是 DATARA 和副标题 */}
          <div className="brand">
            {/* 内联 SVG：想多大改 width/height 即可 */}
            <svg
              className="brand-logo"
              role="img"
              aria-label="Datara logo"
              viewBox="0 0 256 256"
              width={96}
              height={96}
              style={{ display: "block", margin: "0 0 6px 2px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* “D” 轮廓 */}
              <path
                d="M64 64 H144 A48 48 0 0 1 144 160 H96"
                fill="none"
                stroke="#4B82A0"
                strokeWidth="28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* 连接线 + 两端圆点 */}
              <line
                x1="72" y1="152" x2="126" y2="110"
                stroke="#4B82A0" strokeWidth="16" strokeLinecap="round"
              />
              <circle cx="72" cy="152" r="16" fill="#4B82A0" />
              <circle cx="126" cy="110" r="16" fill="#4B82A0" />
            </svg>

            <div className="brand-main">DATARA</div>
            <div className="brand-sub">YOUR SOFTWARE RESOURCE</div>
          </div>

          {/* 右侧菜单 */}
          <nav className="menu">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </div>
      </header>

      <main className="main">
        <h2>Welcome to Datara</h2>
        <p>We build modern web solutions for your business.</p>
        <img src="/vite.svg" alt="placeholder" className="hero-img" />
      </main>
    </div>
  );
}
