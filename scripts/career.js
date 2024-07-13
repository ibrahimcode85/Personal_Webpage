function hideCV() {
  const cvElement = document.querySelector(".cv");
  cvElement.style.display = "none";
}

function showCV() {
  const toggleSwitch = document.querySelector("#toggleSwitch");
  const cvElement = document.querySelector(".cv");

  // select all non-CV sections
  const introElement = document.querySelector(".intro");
  const skillsElement = document.querySelector(".key-skills");
  const employmentElement = document.querySelector(".employment");
  const techElement = document.querySelector(".technologies");

  // if checked: hide all non-cv section, display cv section
  if (toggleSwitch.checked) {
    cvElement.style.display = "";

    introElement.style.display = "none";
    skillsElement.style.display = "none";
    employmentElement.style.display = "none";
    techElement.style.display = "none";
  }

  // if un-checked: display non-cv section, hide cv section
  if (!toggleSwitch.checked) {
    cvElement.style.display = "none";

    introElement.style.display = "";
    skillsElement.style.display = "";
    employmentElement.style.display = "";
    techElement.style.display = "";
  }
}
document.getElementById("toggleSwitch").addEventListener("change", showCV);

//hide cv during page-load
hideCV();
