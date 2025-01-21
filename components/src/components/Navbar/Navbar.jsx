import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 
import styles from "./Navbar.module.scss"; 

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.logo}>
          LOGO
        </Link>
        
        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <Link to="/adidas" onClick={() => setMenuOpen(false)}>Adidas</Link>
          <Link to="/nike" onClick={() => setMenuOpen(false)}>Nike</Link>
          <Link to="/onitsuka" onClick={() => setMenuOpen(false)}>Onitsuka</Link>
          <Link to="/newbalance" onClick={() => setMenuOpen(false)}>New Balance</Link>
        </div>
        
        <div className={styles.burgerMenu} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
      </div>
    </nav>
  );
};
