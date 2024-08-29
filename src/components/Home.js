// Home.js
import React from 'react';

function Home() {
  return(
    <>
    
      <div style={styles.backgroundImage}>
      <div style={styles.overlayText}>

      <h3 style={styles.intro}> Hi <br/>
       I am <br/>      
       </h3>
       <h1 style={styles.name}>&lt;  Murali Dharan SivaKumar /&gt;</h1>

       <br/>
       <h5 > Front End WebDeveloper | UI/UX Designer & Developer </h5>
       <br/>
       <p class="p">To work with Company's expections and to achieve its goal.<br/> To upskill myself and for the company that leads to a great level among the IT Industry</p>
       <br/>
       {/* <button type="button" class="btn btn-outline-light  rounded-5"><i class="fa-regular fa-file"></i> &nbsp; Download CV &nbsp; | &nbsp;<i class="fa-solid fa-download"></i> </button> */}
      
<button type="button" class="btn btn-outline-light   rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
<i class="fa-solid fa-download"></i> &nbsp; Download Resume
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content bg-dark border border-1 border-primary  rounded-0 p-3">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa-solid fa-download"></i> &nbsp;Resume Download </h1>
      </div>
      <div class="modal-body">
        Info : click 'download' to proceed (or) 'cancel' to close the pop-up
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-primary  rounded-0" data-bs-dismiss="modal"><i class="fa-solid fa-x"></i> &nbsp;Close</button>
        <a href="https://drive.google.com/file/d/1WLLaLowVSwrqTyzC0joC7Ilw6VEOEUE6/view?usp=drive_link" target="blank"> <button type="button" class="btn btn-primary  rounded-0"> <i class="fa-solid fa-download"></i> &nbsp; Download </button></a>
      </div>
    </div>
  </div>
</div>
       <br/>

     
       {/* <p>Click on the " <i class="fa-solid fa-bars"></i> " icon for the navigation of different sections and much more ...</p> */}
      </div>
    </div>
   </>
  );
}

const styles = {
    intro : {
        fontSize : '30px'
    },
    name : {
        fontSize : '45px',
        color : 'dodgerblue'
    },
    backgroundImage: {
      // width: '100vw',
      height: '95vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    },
    overlayText: {
        width: '80%',  // Define the width of the div
        margin: '0 auto', 
      textAlign: 'center',
      paddingTop : '10em'
    },
  };

export default Home;
