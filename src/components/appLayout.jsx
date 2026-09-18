import Sidebar from "./sidebar/sidebar";
import "@/style/AppLayout.css";

function AppLayout({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <div className="main-content-inner">{children}</div>
      </main>
    </div>
  );
}

export default AppLayout;
