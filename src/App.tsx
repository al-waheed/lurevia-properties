import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-aurel-bg">
        <Navbar />

        <main>
          <AppRoutes />
        </main>

          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
