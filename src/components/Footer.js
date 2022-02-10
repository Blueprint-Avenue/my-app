import React from "react";

function Footer() {

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return (
        <div className="footer">
          <p className="footer-p">Copyright &copy; {year}</p>
        </div>
    )
}

export default Footer;
