function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  button.addEventListener("click", (event) => {
    paragraph.innerHTML = "Houston! We have liftoff!";
  });

  missionAbort.addEventListener("mouseover", () => {
    missionAbort.style.backgroundColor = "red";
  });

  // Revert the background color when the cursor leaves the "Abort Mission" button
  missionAbort.addEventListener("mouseout", () => {
    missionAbort.style.backgroundColor = "";
  });

  // Show a confirmation dialog and change the text when the "Abort Mission" button is clicked
  missionAbort.addEventListener("click", () => {
    const confirmed = confirm("Are you sure you want to abort the mission?");
    if (confirmed) {
      paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
    }
  });
}

window.addEventListener("load", init);
