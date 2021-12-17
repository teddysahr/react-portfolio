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
      width: "90%",
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
            Donec a volutpat quam. Curabitur nec varius justo, sed rutrum
            ligula. Curabitur pellentesque turpis sit amet eros iaculis, a
            mollis arcu dictum. Ut vel ante eget massa ornare placerat. Etiam
            nisl orci, finibus sodales volutpat et, hendrerit ut dolor.
            Suspendisse porta dictum nunc, sed pretium risus rutrum eget. Nam
            consequat, ligula in faucibus vestibulum, nisi justo laoreet risus,
            luctus luctus mi lacus sit amet libero. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Mauris pretium condimentum tellus eget lobortis. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Donec placerat
            accumsan mi, ut congue neque placerat eu. Donec nec ipsum in velit
            pellentesque vehicula sit amet at augue. Maecenas aliquam bibendum
            congue. Pellentesque semper, lectus non ullamcorper iaculis, est
            ligula suscipit velit, sed bibendum turpis dui in sapien.
          </p>
        </div>
      </div>
    </div>
  );
}
