import { FaPhone, FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer(){

return(

<footer className="footer">

<div className="footer-container">

<div className="footer-about">

<h2>BrandName</h2>

<p>Modern fashion for men.</p>

<p>© 2026 Brand. All Rights Reserved.</p>

</div>

<div className="footer-contact">

<h3>Contact</h3>

<p><FaPhone/> +91 98765 43210</p>

<p><FaWhatsapp/> +91 98765 43210</p>

<p><FaEnvelope/> mussammilshathik2@gmail.com</p>

<p><FaInstagram/> @mussammil_shathik</p>

</div>

</div>

</footer>

)

}

export default Footer;