import { IoIosCloseCircle } from "react-icons/io";
import "./allAlert.css";

export function Ups() {
  let styleAlert =  { color: "#C7302B", fontSize: "70px", margin: "0 0 10px 0"}
  let styleClose =  { color: "rgb(160, 119, 199)", fontSize: "30px" }
  return(
    <> 
        <section className="containerAlertUps">
          <header>        
            <IoIosCloseCircle style={styleClose}/>
          </header>
          <main className="iconTitleAndParraf">
            <IoIosCloseCircle style={styleAlert}/>
            <h2 className="title">Ups</h2>
            <p className="parraf">Algo ha pasado</p>
          </main>
        </section> 
    </>
  )
}