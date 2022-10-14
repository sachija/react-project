import { Link } from "react-router-dom";
import Bollyfirst from "./Bollyfirst";
import Bollysecond from "./Bollysecond";
import { mainFood,mainSixth} from "./MockData";
// import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { useRef } from "react";


const Food = ()=>{
    const navRef = useRef();

    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
       <div>
         <span className="Tilt">The</span>
            <h1 className="head1">Siren</h1>
             <p className="tool" ref={navRef}>
            <Link to = "/" className="one">Home</Link>
            <Link to = "/bollywood"className="one">Bollywood</Link>
            <Link to = "/technology"className="one">Technology</Link>
            <Link to = "/hollywood"className="one">Hollywood</Link>
            <Link to ="/Fitness" className="one">Fitness</Link>
            <Link to="/food"className="one">Food</Link>
            <button className="btn nav-btn nav-close-btn" onClick={showNavbar}>
            {/* <AiOutlineClose/> */}
            </button>           
            </p>
            <button className="btn nav-btn" onClick={showNavbar}>
            {/* <AiOutlineMenu/> */}
            </button>
            
            <hr className="hr1" />
            <div className="article">
            <p className="bolly">Food</p>
            <hr className="hr3"/>
          </div>
          <div className="box">
            <div className="boxright">
                
             {
                 mainFood.map((item4,index4)=>{
                    return(
                        <>

                        <Bollyfirst bollyhead={item4.bollyhead } bollydesc={item4.bollydesc} bollytags={item4.bollytags} bollyimg={item4.bollyimg}/>
                        </>
                    )
                 })
             } 
           

            <div className="more">
                <div className="arrow1">
                </div>
                <div className="arrowtext">
                <p>LOAD MORE</p>
                </div>
            </div>

              
            </div>
            <div className="boxleftbolly">
               
                <div className="post">
                    <p className="bollytoptext">Top Posts</p>
                    <hr className="hr5"/>
                </div>
                <div className="toppost">
                    <div className="food"><br />
                    <h1 className="no1">1</h1>
                    <h3 className="top1text">'Nutrient foods'</h3>
                    <span className="Mint">Mint</span>
                    <span className="Mint1">/ December 21 2020</span>
                    </div>
                    <hr className="hr6" />
                    {
                 mainSixth.map((item5,index5)=>{
                    return(
                        <>

                        <Bollysecond secnum={item5.secnum } sectitle={item5.sectitle} sectags={item5.sectags} secimg={item5.secimg}/>
                        </>
                    )
                 })
             } 

                </div>
                <div className="bollyadvert">
                  <p className="adverttext">Advertistement</p>
                </div>
            </div>
         
          </div>
       </div>
    )
}
export default Food;