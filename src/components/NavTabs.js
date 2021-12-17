import React from "react";

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  const styles = {
    tabs: {
      color: "#FFFFFF",
      fontSize: "16px",
    },
  };

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          style={styles.tabs}
          href="#about"
          onClick={() => handlePageChange("About")}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.tabs}
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          //  TODO: Add a comment explaining what this logic is doing

          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.tabs}
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.tabs}
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
