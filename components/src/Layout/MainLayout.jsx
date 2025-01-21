import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";


export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="content" style={{ marginTop: "80px", padding: "20px" }}> 
        <Outlet /> 
      </main>
      <footer className="footer">
        <p>© 2025 AveryWear. All Rights Reserved.</p>
      </footer>
    </>
  );
};
