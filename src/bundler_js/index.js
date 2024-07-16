import "../styles/styles.css";
import "../styles/home.css";
import "../styles/variables.css";
import "../scripts/main.js";

// Import images
import profilePicture from "../assets/home/profile_picture.jpg";
import githubIcon from "../assets/home/github-mark.png";
import linkedinIcon from "../assets/home/linkedin-mark.png";
import emailIcon from "../assets/home/email-logo.png";

// Setting image sources for the main page
document.getElementById("profile-pic").setAttribute("src", profilePicture);
document.getElementById("github-icon").setAttribute("src", githubIcon);
document.getElementById("linkedin-icon").setAttribute("src", linkedinIcon);
document.getElementById("email-icon").setAttribute("src", emailIcon);
