import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { NotFound } from "./components/NotFound";
import { Communication } from "./components/pages/communication/Communication";
import { Home } from "./components/pages/home/Home";
import { Portpolio } from "./components/pages/portpolio/Portpolio";
import { Profile } from "./components/pages/profile/Profile";
import { Toy } from "./components/pages/toy/Toy";
import { GlobalStyle } from "./styels/GlobalStyle";

export const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/portpolio" element={<Portpolio />}></Route>
          <Route path="/toy" element={<Toy />}></Route>
          <Route path="/communication" element={<Communication />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
};
