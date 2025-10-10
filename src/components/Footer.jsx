export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        © {new Date().getFullYear()} DATARA. All rights reserved.
      </div>
    </footer>
  );
}