import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

function Home() {

  

    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin, isSuper,isCoSuper,isPanel} = auth

    
    

  return (
    <div>

<h2>{isAdmin ? "Admin Panel Home Page ": "Staff Home Page" }</h2>
<br></br>
<br/>
<div>{isAdmin ? <div className="alert alert-info alert-dismissible fade show">Admin</div> : 

<div className="alert alert-danger alert-dismissible fade show"> Staff</div>}</div>


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
      </div>
       : '' 
}


    </div>
  )
}

export default Home