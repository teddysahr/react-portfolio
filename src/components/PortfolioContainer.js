import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

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
      padding: "3px",
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
    <div id="background">
      <div>
        <header id="head">
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
      <div id="desktop">
        <div id="icons">
          <img
            class="image"
            src="https://win98icons.alexmeub.com/icons/png/computer_explorer_cool-5.png"
            alt="Planner"
          />
          <p>Computer</p>
          <img
            class="image"
            src="https://win98icons.alexmeub.com/icons/png/cd_drive-5.png"
            alt="Planner"
          />
          <p>CD Drive</p>
          <img
            class="image"
            src="https://win98icons.alexmeub.com/icons/png/directory_closed_cool-2.png"
            alt="Planner"
          />
          <p>Documents</p>
          <img
            class="image"
            src="https://win98icons.alexmeub.com/icons/png/recycle_bin_empty-2.png"
            alt="Planner"
          />
          <p>Recycle Bin</p>
          <img
            class="image"
            src="https://win98icons.alexmeub.com/icons/png/windows_three.png"
            alt="Planner"
          />
          <p>Add/Remove Programs</p>
        </div>
        <div id="content">{renderPage()}</div>
      </div>
      <footer class="window" id="foot" style={styles.footer}>
        <h1 style={styles.footercontent}>1993©</h1>
      </footer>
    </div>
  );
}
