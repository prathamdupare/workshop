function ScrollPaddingComponent() {
  return (
    <div
      style={{
        width: "300px", // Set the width and height for the scrollable container
        height: "200px",
        overflow: "auto", // Enable scrolling
        scrollPadding: "20px", // Add 20px of scroll padding
        border: "1px solid #ccc", // Optional styling for the container
      }}
    >
      <div style={{ padding: "10px" }}></div>
    </div>
  );
}

export default ScrollPaddingComponent;
