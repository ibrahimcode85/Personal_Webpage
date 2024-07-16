import "../styles/styles.css";
import "../styles/career.css";
import "../styles/variables.css";
import "../scripts/career.js";
import "../scripts/main.js";

// Import images
import iconActuarial from "../assets/career/icon-actuarial-services.png";
import iconFinancialReport from "../assets/career/icon-financial-report.png";
import iconProphetModel from "../assets/career/icon-prophet-model.png";
import iconInternalTools from "../assets/career/icon-internal-tools.png";

// Setting image sources for the main page
document
  .getElementById("icon-actuarial-services")
  .setAttribute("src", iconActuarial);
document
  .getElementById("icon-financial-report")
  .setAttribute("src", iconFinancialReport);
document
  .getElementById("icon-prophet-model")
  .setAttribute("src", iconProphetModel);
document
  .getElementById("icon-internal-tools")
  .setAttribute("src", iconInternalTools);
