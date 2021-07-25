// Must wait approx 5 seconds after page load before calling.
// changeInfo.status === "complete" before video components finish loading.

setTimeout(() => {
  const parent = document.getElementById("bookmark-portal");
  for (let i = 0; i < parent.children.length; i++) {
    parent.children[i].hidden = true;
    console.log("Hiding bookmark: ", parent.children[i]);
  }
}, 5000);
