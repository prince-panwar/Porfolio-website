import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Prince's Portfolio
        </Link>
      </div>
      <a href="https://drive.google.com/file/d/1dfrk2207QXlCrg9QUTKqbltFDZHxpcZA/view?usp=sharing" className="cta-btn">Resume</a>
    </div>
  )
}

export default Navbar;
