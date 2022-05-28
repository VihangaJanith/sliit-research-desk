import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import SimpleImageSlider from "react-simple-image-slider";

function Home() {

  

    const auth = useSelector(state => state.auth)
    const {user , isLogged, isAdmin, isSuper,isCoSuper,isPanel} = auth

    
    const images = [
      { url: "https://www.sliit.lk/wp-content/uploads/2018/04/Home-Slider-1.jpg" },
      { url: "https://static.sliit.lk/wp-content/uploads/2017/11/Sliit-Research-Facilities.jpg" },
      { url: "https://www.sliit.lk/wp-content/uploads/2017/11/Slider-Background.jpg" },
      
    ];

  return (
    <div>
      <p className="mt-3 mb-4">Staff Dashboard</p>
     

<div className="mt-3" style={{borderRadius:"100x"}}>
      <SimpleImageSlider
      
        width={1190}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={0.8}
        autoPlay={true}
      />
    </div>


<br></br>
<br/>
<div>{isAdmin ? <div className="alert alert-info alert-dismissible fade show">Admin</div> : 

<div className="alert alert-danger alert-dismissible fade show"> Staff</div>}</div>



<div>{isAdmin ? <div > 

  <h1 className="text-center p-1"  style={{color: 'white', backgroundColor:'#3A454B' }}>Assignments</h1>
  
  <div> <Link to={`/createassi/`}> <button className="btn btn-success" style={{textDecoration:"none"}}>
Create Assignments

    
  </button> </Link>

   <Link to={`/getallassi/`}> <button className="btn btn-success" style={{textDecoration:"none"}}>
  All Created Assignments
   
       
     </button> </Link>


     <Link to={`/usercreated/${user._id}`}> <button className="btn btn-success" style={{textDecoration:"none"}}>
  My Assignments
   
       
     </button> </Link>
     
     
     
      </div>

      <h1 className="text-center p- mt-2"  style={{color: 'white', backgroundColor:'#3A454B' }}>Marking Schemes</h1>

     <div className="mt-3"> <Link to={`/createmarking/`}> <button className="btn btn-success" style={{textDecoration:"none"}}>
Submit Marking Scheme

    
  </button> </Link>

   <Link to={`/getmarkings/`}> <button className="btn btn-success" style={{textDecoration:"none"}}>
  All Created Markings
   
     </button> </Link> </div>

     <h1 className="text-center p-1 mt-2"  style={{color: 'white', backgroundColor:'#3A454B' }}>User Downloads/ Slides</h1>

     <div className="mt-3"> <Link to={`/createdownloads/`}> <button className="btn btn-success" style={{textDecoration:"none"}}>
Submit Downloadables

    
  </button> </Link>

   <Link to={`/getdownloads/`}> <button className="btn btn-success" style={{textDecoration:"none"}}>
  All Created Downloads
   
     </button> </Link> </div>


     <h1>Students Part</h1>



     <div> <Link to={`/createuploads/`}> <button className="btn btn-success" style={{textDecoration:"none"}}>
Create Assignments

    
  </button> </Link>

   <Link to={`/getuploads/`}> <button className="btn btn-success" style={{textDecoration:"none"}}>
  All Created Assignments
   
       
     </button> </Link>


     <Link to={`/useruploadedAssi/${user._id}`}> <button className="btn btn-success" style={{textDecoration:"none"}}>
  My Assignments
   
       
     </button> </Link>



     

     
     
     
     
      </div>
     



</div>
  : ''}</div>


  {
    isSuper
      ? 
      <div>
        <i className="fa fa-check" title="Admin"> Supervisor can see this</i>
        <Link to={`/super/`}>
   <i className="fa fa-edit" title="Edit"></i>
  </Link>
      </div>
       : '' 
}
{
    isCoSuper
      ? 
      <div>
        <i className="fa fa-check" title="Admin"> Co Supervisor can see this</i>
        <Link to={`/super/`}>
   <i className="fa fa-edit" title="Edit"></i>
  </Link>
      </div>
       : '' 
}
{
    isAdmin
      ? 
      <div>

        <i className="fa fa-check" title="Admin"> Admin can see this</i>
        <Link to={`/panel/`}> Panel
          </Link>

          <div>
<CloudinaryContext cloudName="demo">
<a href="https://res.cloudinary.com/demo/image/upload/fl_attachment:myPdf/multi_page_pdf.pdf" download>
<Image publicId="multi_page_pdf.pdf">

</Image>
<p>Imge name</p>
</a>
</CloudinaryContext>
</div>


      </div>
       : '' 
}
{
    isPanel
      ? 
      <div>
        <i className="fa fa-check" title="PanelMmeber"> Panel member can see this</i>

        <Link to={`/AssignedtoMe/${user._id}`}> <button className="btn btn-success" style={{textDecoration:"none"}}>
 Groups Assigned to me
   
       
     </button> </Link>
      </div>
       : '' 
}




    </div>
  )
}

export default Home