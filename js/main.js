function toggleDiv() {
    const div = document.getElementById("toggleDiv");
    const button = document.getElementById("toggleButton");

    if (div.style.maxHeight === "0px" || !div.style.maxHeight) {
      // Slide down: set maxHeight to the scrollHeight (dynamic height of content)
      div.style.maxHeight = div.scrollHeight + "px";
      button.textContent = "Show Less";
    } else {
      // Slide up: set maxHeight to 0px
      div.style.maxHeight = "0px";
      button.textContent = "Show More";
    }
  }