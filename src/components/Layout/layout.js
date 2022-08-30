// Components
import Navbar from "../Navbar/navBar";
import Footer from "../Footer/footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
