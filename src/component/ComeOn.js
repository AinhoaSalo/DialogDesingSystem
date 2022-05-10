import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import "./allAlert.css";

export function ComeOn() {
  let styleAlert =  { color: "#27AE60", fontSize: "70px", margin: "0 0 10px 0"}
  let styleClose =  { color: "rgb(160, 119, 199)", fontSize: "30px" }
  return(
    <> 
        <section className="containerAlert">
          <header>        
            <IoIosCloseCircle style={styleClose}/>
          </header>
          <main className="iconTitleAndParraf">
            <IoIosCheckmarkCircle style={styleAlert}/>
            <h2 className="title">¡Vamos!</h2>
            <p className="parraf">Todo Ha salido bien :)</p>
          </main>
          <footer className="buttons">
            <button className="deleteButton">Cerrar Ventana</button>

          </footer>
        </section> 
    </>
  )
}