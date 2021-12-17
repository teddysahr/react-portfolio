import React from "react";

export default function Portfolio() {
  const styles = {
    page: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "100px",
    },
    aboutme: {
      width: "50%",
    },
    btns: {
      color: "white",
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
  };
  return (
    <div style={styles.page}>
      <div class="window" style={styles.aboutme}>
        <div class="title-bar">
          <div class="title-bar-text">some projects i've done</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div style={styles.btns} class="window-body">
          <form
            action="https://teddysahr.github.io/project-1/"
            method="get"
            target="_blank"
          >
            <button type="submit">Moodvie</button>
          </form>

          <form
            action="https://teddysahr.github.io/hw5-day-planner/"
            method="get"
            target="_blank"
          >
            <button type="submit">Day Planner</button>
          </form>
          <form
            action="https://teddysahr.github.io/hw3-password-generator-repo/"
            method="get"
            target="_blank"
          >
            <button type="submit">Password Generator</button>
          </form>
        </div>
      </div>
    </div>
  );
}
