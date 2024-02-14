import { useState, useEffect } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChillingPage from "./ChillingPage";
import WorkingPage from "./WorkingPage";
import "./css/HomePage.less";
import Footer from "./Footer";

function HomePage() {
  const [curPage, setCurPage] = useState("/");
  const onPageChange = () => {
    setCurPage(curPage === "/" ? "/work" : "/");
  };

  useEffect(() => {
    setCurPage(location.pathname);
  }, []);

  return (
    <div className="wrapper">
      <Router>
        <Header curPage={curPage} onPageChange={onPageChange}></Header>
        <main className="main">
          <Routes>
            <Route path="/" Component={ChillingPage} />
            <Route path="/work" Component={WorkingPage} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default HomePage;
