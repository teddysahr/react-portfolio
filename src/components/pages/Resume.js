import React from "react";

export default function Resume() {
  const styles = {
    resume: {
      marginTop: "75px",
    },
  };
  return (
    <ul style={styles.resume} class="tree-view">
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
  );
}
