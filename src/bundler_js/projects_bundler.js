import "../styles/styles.css";
import "../styles/projects.css";
import "../styles/variables.css";
import "../scripts/main.js";

// Import images
import datacampLogo from "../assets/projects/datacamp-svgrepo-com.svg";
import topLogo from "../assets/projects/TOP-logo2.jpeg";
import webImage from "../assets/projects/img_website_proj.jpg";
import webIcon from "../assets/projects/web.svg";
import diskIcon from "../assets/projects/zip-disk.svg";
import githubIcon from "../assets/home/github-mark.png";
import personalWebIcon from "../assets/projects/img_personalWeb_projects.jpg";
import todoImage from "../assets/projects/img_todo_proj.jpg";
import predImage from "../assets/projects/img_predictive_proj.jpg";
import customerImage from "../assets/projects/img_customer_segmentation_proj.jpg";
import comingSoonImage from "../assets/Coming_Soon_Picture.jpg";

// Setting image sources for the main page
document
  .getElementById("datacamp-svgrepo-com")
  .setAttribute("src", datacampLogo);
document.getElementById("TOP-logo2").setAttribute("src", topLogo);
document.getElementById("img_website_proj").setAttribute("src", webImage);
document.getElementById("web").setAttribute("src", webIcon);
document
  .getElementById("img_personalWeb_projects")
  .setAttribute("src", personalWebIcon);
document.getElementById("img_todo_proj").setAttribute("src", todoImage);
document.getElementById("img_predictive_proj").setAttribute("src", predImage);
document
  .getElementById("img_customer_segmentation_proj")
  .setAttribute("src", customerImage);
document
  .getElementById("Coming_Soon_Picture")
  .setAttribute("src", comingSoonImage);

// set image source for repeating icons (such as github and web)
const elementsGitHub = document.querySelectorAll("#github-mark");
const elementsWeb = document.querySelectorAll("#web");
const elementsDisk = document.querySelectorAll("#disk");

elementsGitHub.forEach((element) => {
  element.setAttribute("src", githubIcon);
});

elementsWeb.forEach((element) => {
  element.setAttribute("src", webIcon);
});

elementsDisk.forEach((element) => {
  element.setAttribute("src", diskIcon);
});
