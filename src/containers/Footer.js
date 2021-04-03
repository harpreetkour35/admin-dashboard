import React from "react";
import { CFooter } from "@coreui/react";

function Footer() {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Dashboard
        </a>
        <span className="ml-1">&copy; 2021</span>
      </div>
    </CFooter>
  );
}

export default Footer;
