let linkWOI = document.getElementById("github-woi");
let linkPython = document.getElementById("github-python");
let linkTask = document.getElementById("github-task");
let linkC42 = document.getElementById("github-c42");

linkWOI.addEventListener("click", () => {
  const link = linkWOI.dataset.link;
  window.open(link, "_blank");
});

linkPython.addEventListener("click", () => {
  const link = linkPython.dataset.link;
  window.open(link, "_blank");
});

linkTask.addEventListener("click", () => {
  const link = linkTask.dataset.link;
  window.open(link, "_blank");
});

linkC42.addEventListener("click", () => {
  const link = linkC42.dataset.link;
  window.open(link, "_blank");
});
