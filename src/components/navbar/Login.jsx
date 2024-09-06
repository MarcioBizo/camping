import backLogin from "../Login/Assets/backCamp.jpg";
import backgroundDeer from "../Login/Assets/backgroundDeer.svg";

let isLoggedIn = true;


document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.backLogin').forEach(backLogin=>{
        const speed = backLogin.getAtribute('data-speed')
        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pagey*speed)/100

        backLogin.style.transform = `translateX(${x}px) translateX(${y}px)`
    })
}

function Login(){
    
    return(
        
        <div className="pageLoginGeneral">
             <div className="backGeneral">
            
                <img src={backLogin}/>
    
             </div>
             
              
            <div className="formLogin">
            aaaaaaaaaaaaaa
            </div>
            <div className="backLogin">
           <img src={backgroundDeer}/>
         
            </div>

    
         
        </div>
    
      
    )
}
export default Login;