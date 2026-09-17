import Sidebar from "./sidebar/sidebar";

function AppLayout({ children }) {
    return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default AppLayout