import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import './globals.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
