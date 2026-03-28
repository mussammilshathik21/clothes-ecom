import { FaPhone, FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer(){

return(

<footer className="footer">

<div className="footer-container">

<div className="about-description">

<h2>BrandName</h2>

<p>Modern fashion for men</p><br />

<p>© 2026 Brand. All Rights Reserved.</p>

</div>

<div className="footer-contact">

    <h3>Contact :</h3>

<p><FaPhone/> +91 98765 43210</p>

<p><FaWhatsapp/> WhatsApp: +91 98765 43210</p>

<p><FaEnvelope/> support@brand.com</p>

<p><FaInstagram/> @brandfashion</p>

</div>

</div>


</footer>

)

}

export default Footer;