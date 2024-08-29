import React from 'react';

function Contact()
{
    return (
        <>
        <div class="card m-5 mt-5 p-3 bg-dark border-start border-2 rounded-0 bg-opacity-75">
       
        <form action="https://formspree.io/f/xayvvdzp" method="POST" class="row  pt-0 m-1 g-2 needs-validation text-white" novalidate>
        <h3 class="card-title text-white">&lt; Contact Form /&gt;</h3>
        
  <div class="col-md-4 position-relative">
    <label for="validationTooltip01" class="form-label">&nbsp; First name *</label>
    <input type="text" name="first name" class="form-control custom-placeholder p-1 m-1 bg-light bg-opacity-25 border-start  rounded-0 text-white" id="validationTooltip01" placeholder="Please Enter your first name" required />
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip02" class="form-label">&nbsp; Last name *</label>
    <input type="text" name="last name" class="form-control custom-placeholder p-1 m-1 bg-light bg-opacity-25 border-start  rounded-0 text-white" id="validationTooltip02" placeholder="Please Enter your last name" required />
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  
  <div class="col-md-4 position-relative">
  <label for="exampleFormControlInput1" class="form-label">&nbsp; Email address *</label>
  <input type="email" name="email" class="form-control custom-placeholder p-1 m-1 bg-light bg-opacity-25 border-start  rounded-0 text-white" id="exampleFormControlInput1" placeholder="Please Enter your valid email address" required />
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
 
  <div class=" position-relative">
  <label for="exampleFormControlTextarea1" class="form-label">&nbsp; Message *</label>
  <textarea name="message" type="" class="form-control custom-placeholder p-1 m-1 bg-light bg-opacity-25 border-start  rounded-0 text-white" id="exampleFormControlTextarea1" placeholder="Describe your message here..." rows="3" required></textarea>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>

  <br/>
  <div class="col-12">
    <button class="btn btn-outline-light p-3  rounded-5" type="submit"><i class="fa-solid fa-paper-plane"></i> &nbsp; Send</button>
  </div>
  <br/>
  <br/>
  <p class="p text-light"><i class="fa-solid fa-arrow-pointer"></i> &nbsp;Click on "SEND" to submit thee form, you response will be received by me. You may expect some delay with my response.</p>
  <p class="p text-warning"><i class="fa-solid fa-exclamation"></i> &nbsp;Please note that your personal information will not be shared across the Internet</p>
</form>
        </div>
        </>
    );
}

export default Contact;