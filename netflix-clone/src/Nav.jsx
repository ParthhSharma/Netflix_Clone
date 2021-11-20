import React,{useState,useEffect} from 'react'
import "./Nav.css"

function Nav() {
    const [show, setshow] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>20){
                setshow(false);
            }else{
                setshow(true);
            }
        });
        return() =>{
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className="nav_logo" 
                src={`https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg ${show || "https://image.similarpng.com/very-thumbnail/2021/01/Netflix-logo-on-transparent-background-PNG.png"}`}  alt="Netflix Logo"/>
            <div className="nav_items">
                <p>TV Shows</p>
                <p>Movies</p>
                <p>Recently Added</p>
                <p>My List</p>
            </div>
            <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"  alt="Netflix Avatar"/>
            <div className="nav-bottom-fade"></div>
        </div>
    )
}

export default Nav
