import React from "react";
import './Footer.css';



export default function Footer() {
  return (
  <>
  <footer id="footer" className="footer">
<div className="container">
    <div className="row">
    
        <div className=" col-md-6">
        <h4>Support</h4>
        <p>FAQs</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
        </div>
        <div className="col-md-6">
        <h4>Address</h4>
        <p>
          <span>Address:</span> 280 Wilson Street, Cima, California, 92323,
          United States
        </p>
        <p><span>Email:</span> info@Coffebear.com</p>
        <p><span>Phone:</span> +91 9876543210</p>
        </div>
    </div>
    <div class="footer_bar">
      Copyright © 2024 Web Design Mastery. All rights reserved.
    </div>
</div>
  </footer>
  </>
  )
}
