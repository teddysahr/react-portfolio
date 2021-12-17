import React from "react";

export default function Resume() {
  const styles = {
    page: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "50px",
    },
    aboutme: {
      width: "500px",
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
          <ul class="tree-view">
            <li>Table of Contents</li>
            <li>Skills</li>
            <li>
              Web Dev
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>REACT</li>
              </ul>
            </li>
            <li>
              <details open>
                <summary>JavaScript</summary>
                <ul>
                  <li>Will</li>
                  <li>
                    <details>
                      <summary>Update</summary>
                      <ul>
                        <li>Coming</li>
                        <li>
                          <details>
                            <summary>Soon</summary>
                            <ul>
                              <li>More</li>
                              <li>To</li>
                              <li>Add</li>
                              <li>Here</li>
                            </ul>
                          </details>
                        </li>
                        <li>Teddy</li>
                        <li>Sahr</li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li>MongoDB</li>
            <li>Mysql</li>
          </ul>
          ;
        </div>
      </div>
    </div>
  );
}
