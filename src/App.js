import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/pages/home/Home";
import { Portpolio } from "./components/pages/portpolio/Portpolio";
import { Profile } from "./components/pages/profile/Profile";
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
        </Routes>
      </Router>
    </HelmetProvider>
  );
};
