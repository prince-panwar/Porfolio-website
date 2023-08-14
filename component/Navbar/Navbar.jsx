import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Prince's Portfolio
        </Link>
      </div>
      <a href="https://drive.google.com/file/d/1GKAo56mvn4yZoMCiifEWcwGxyHG1RASO/view?usp=sharing" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;