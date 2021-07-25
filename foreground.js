// Must wait approx 5 seconds after page load before calling this script.
// changeInfo.status === "complete" before video components finish loading.

setTimeout(() => {
  const parent = document.getElementById("bookmark-portal");
  while (parent.firstChild) {
    console.log("removing bookmark: ", parent.firstChild);
    parent.firstChild.remove();
  }
}, 5000);
