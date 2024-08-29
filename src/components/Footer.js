import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
function Footer() {
  return (
    <footer className="footer">
      
      <div class="cards bg-black p-5 text-center">
  <div class="card-body">    
  
  <center><div class="links-1">
               <li><a href="https://www.linkedin.com/in/murali-dharan-s-808135217/" target="blank"><i class="fa-brands fa-linkedin-in"></i></a></li>
               <li><a href="https://www.instagram.com/_murali_2601_/" target="blank" ><i class="fa-brands fa-instagram"></i></a></li>
               <li><a href="https://github.com/murali2601" target="blank" ><i class="fa-brands fa-github"></i></a></li>
               <li><a href="https://www.youtube.com/@murali2601" target="blank" ><i class="fa-brands fa-youtube"></i></a></li>
               <li><a href="https://www.figma.com/@_murali_2601_" target="blank" ><i class="fa-brands fa-figma"></i></a></li>
               <li><a href="https://wa.me/+917708504082" target="blank"><i class="fa-brands fa-whatsapp"></i></a></li>
           </div></center>   
           <br/>
           
      <Link to="/skills" className="custom-link">&nbsp;Skills&nbsp;</Link>|
      <Link to="/projects" className="custom-link">&nbsp;Projects&nbsp;</Link>|
      <Link to="/experience" className="custom-link">&nbsp;Experience&nbsp;</Link>|
      <Link to="/education" className="custom-link">&nbsp;Education&nbsp;</Link>|<br/>
      <Link to="/contact" className="custom-link">&nbsp;Contact Me&nbsp;</Link>|
      <Link to="/about" className="custom-link">&nbsp;About Me&nbsp;</Link>
      <br/>
      <br/>
      <br/>
      <p>This website is developed with React.js along with the Bootstrap framework <br/> and deployed under Netlify.app domain. <br/> <br/>
      You can also view the source code in my <a href="https://github.com/murali2601/React.js-Personal-Portfolio/tree/main" target="blank"> GitHub </a> repository.</p>
     <br/>
  <form action="https://formspree.io/f/xayvvdzp" method="POST">
     <div class="input-group mb-3 custom-width ">
  <input type="text" name="feedback" class="form-control rounded-0 text-white custom-placeholder border-outline-primary  bg-dark bg-opacity" placeholder="Your feedback is important" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-primary rounded-0" type="submit" id="button-addon2"><i class="fa-solid fa-paper-plane"></i> &nbsp; Send</button>
</div>
</form>
<br/>
  </div>


<p class="text-secondary"> Build : 26-Aug-2024 | Last Updated : 28-Aug-2024 21:39 </p>
<p class="text-secondary"> Beta Program </p>
<p class="text-primary">
  &copy; COPYRIGHTED 2024 - 2025. All rights reserved. Open Source <i class="fas fa-code"></i>
</p>

</div>
    </footer>
  );
}

export default Footer;
