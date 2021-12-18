import React from "react";

export default function About() {
  const styles = {
    page: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "100px",
    },
    aboutme: {
      width: "60%",
    },
  };
  return (
    <div style={styles.page}>
      <div class="window" style={styles.aboutme}>
        <div class="title-bar">
          <div class="title-bar-text">About Me</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body">
          <p>
            I'm Teddy Sahr and I'm a New York based front-end web developer.
            After graduating from The Fashion Institute of Technology with a BS
            in Film, I decided to switch gears during the pandemic and went on
            to receive a full stack coding certificate from Columbia
            University's School of Engineering. As an artist, I never saw myself
            in the "tech world." But here we are... I'm just trying to bring my
            sensibilities to the craft in any way that I can and along the way
            I've been gaining a sort of romantic appreciaiton for computers,
            programing, code etc.
          </p>
        </div>
      </div>
    </div>
  );
}
