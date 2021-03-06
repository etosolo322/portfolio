import React,{useState, useEffect} from "react";
import "../../style/homepageResume.css"
import { MdDeveloperBoard } from 'react-icons/md';

export  const BZSP = () => {
    const [rotate,setRotate] = useState()
    const [counter,setCounter] = useState(0)
  
    useEffect(()=>{
        if (counter % 2){setRotate({transform: 'rotateY(180deg)'})}
        else{setRotate({transform: 'rotateY(0deg)'})}
    },[counter])
    
    return (
        <div className="mySite_container"> 
             <div className="flip-container" onClick={()=>setCounter(counter+1)}>
                <div className="card" style={rotate}>
                    <img src={require('../../../../assets/image/sites/parkaveniu/bzsp.png')} className="back" alt="Card Back" />
                    <form className="frameworks front">
                        <h2>BZSP</h2>
                        <MdDeveloperBoard fontSize={'3em'}/>                
                        <h5>Thesis to order. Upgrade of the existing site of the plant and reworking to more modern technologies.</h5>
                        <h5>Thanks to Firebase, it's available on the network</h5>
                        <h3>LANGUAGES I SPEAK:</h3>
                        <p>React</p> 
                        <p>Firebase</p> 
                        <p>JavaScript</p> 
                        <p>SCSS</p> 
                        <p>HTML</p> 
                        <h3>DEV TOOLS</h3>   
                        <p>VS Code</p>
                        <p>NPM</p>
                        <p>Github</p>
                        <section>Link: <a href="https://bzsp-5c9ae.web.app/" target="_blank">BZSP</a></section>     
                    </form>		
                </div>
            </div>
            <div className="my_site">            
                <form className="frameworks">
                <span className="flare"></span>
                    <h2>BZSP</h2>
                    <MdDeveloperBoard fontSize={'3em'}/>                
                    <h5>Thesis to order. Upgrade of the existing site of the plant and reworking to more modern technologies.</h5>
                    <h5>Thanks to Firebase, it's available on the network</h5>
                    <h3>LANGUAGES I SPEAK:</h3>
                    <p>React</p> 
                    <p>Firebase</p> 
                    <p>JavaScript</p> 
                    <p>SCSS</p> 
                    <p>HTML</p> 
                    <h3>DEV TOOLS</h3>   
                    <p>VS Code</p>
                    <p>NPM</p>
                    <p>Github</p>
                    <section>Link: <a href="https://bzsp-5c9ae.web.app/" target="_blank">BZSP</a></section>     
                </form>
               <div className="mySite_images">
                    <div className="toHiden"><img src={require('../../../../assets/image/sites/parkaveniu/bzsp1.png')}  alt=" "/></div>
                    <div><img src={require('../../../../assets/image/sites/parkaveniu/bzsp.png')}  alt=" "/></div>
               </div>
            </div>
        </div>
    ) 
}
