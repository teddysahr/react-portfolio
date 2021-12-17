import React from "react";

export default function Contact() {
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
    forms: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "7px",
    },
  };
  return (
    <div style={styles.page}>
      <div class="window" style={styles.aboutme}>
        <div class="title-bar">
          <div class="title-bar-text">Contact</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div style={styles.forms} class="window-body">
          <div class="field-row">
            <label for="text17">Name:</label>
            <input id="text17" type="text" />
          </div>
          <div class="field-row">
            <label for="text17">Email:&nbsp; </label>
            <input id="text17" type="text" />
          </div>
          <div class="field-row">
            <label for="text17">Msg:&nbsp; &nbsp;</label>
            <input id="text17" type="text" />
          </div>
          <form>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
