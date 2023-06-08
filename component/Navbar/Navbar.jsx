import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Prince's Portfolio
        </Link>
      </div>
      <a href="https://drive.google.com/file/d/1ccIcaMLfSqTYB83GCa3offEFnMbnnZj4/view?usp=sharing" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;