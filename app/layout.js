import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import './globals.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;
