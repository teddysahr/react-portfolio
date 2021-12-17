import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const styles = {
    //   header: {
    //     display: "flex",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     flexWrap: "wrap",
    //     gap: "30px",
    //     padding: "2rem",
    //     background: "#FF0001",
    //     fontSize: "50px",
    //   },
    //   navtabs: {
    //     textAlign: "center",
    //     fontsize: "20px",
    //   },

    title: {
      fontSize: "27px",
      textAlign: "center",
    },

    footer: {
      position: "absolute",
      // left: 0,
      bottom: 0,
      display: "flex",

      justifyContent: "center",
      width: "100%",
      textAlign: "center",
      padding: "5px",
    },

    footercontent: {
      fontSize: "16px",
      color: "#FFFFFF",
    },
  };

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }

    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="window">
        <header className="title-bar">
          <div style={styles.title} className="title-bar-text">
            Teddy Sahr
          </div>

          <div className="title-bar-controls">
            {/* // TODO: Add a comment describing what we are passing as props */}
            <NavTabs
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
            {/* // TODO: Add a comment explaining what is happening on the following line */}
          </div>
        </header>
      </div>
      <div>{renderPage()}</div>
      <footer className="title-bar" style={styles.footer}>
        <h1 style={styles.footercontent}>1993©</h1>
      </footer>
    </div>
  );
}
