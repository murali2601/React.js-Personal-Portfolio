import React from 'react';

function About()
{
    return (
        <>
        {/* <div class="card mb-3 p-4 m-5 bg-dark bg-opacity-50 border-start rounded-0 border-2 mx-auto d-block">
  <img src="logo.png" class="card-img-top img-abt" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div> */}

<div class="card mb-3 bg-dark bg-opacity-50 border-start rounded-0 border-2 m-5 p-4 text-white" >
  <div class="row g-0">
    <div class="col-md-4 d-flex justify-content-center">
      <img src="logo.png" class="img-abt img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">About Me</h5> <br/>
        <p class="card-text"><b> Mail : </b> muralidharans2601@gmail.com</p>
        <p class="card-text"><b> Hobbies : </b> PC Gaming | Photography <a href="https://www.instagram.com/potrait_picz/" target="blank" ><i class="fa-solid fa-up-right-from-square"></i></a></p>
        <p class="card-text"><b> Interest : </b> Web-Development, CyberSecurity, SDLC, DBMS, Mobile Application Development, API Integration,etc,.</p>
        
      </div>
    </div>
  </div>
</div>
        </>
    );
}

export default About;