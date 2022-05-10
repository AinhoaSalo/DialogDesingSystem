import { IoIosAlert } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import "./allAlert.css";

export function Warning() {
  let styleAlert =  { color: "rgb(233, 224, 104)", fontSize: "70px", margin: "0 0 10px 0"}
  let styleClose =  { color: "rgb(160, 119, 199)", fontSize: "30px" }
  return(
    <> 
        <section className="containerAlert">
          <header>        
            <IoIosCloseCircle style={styleClose}/>
          </header>
          <main className="iconTitleAndParraf">
            <IoIosAlert style={styleAlert}/>
            <h2 className="title">¡Cuidado!</h2>
            <p className="parraf">No podrás volver atras</p>
          </main>
          <footer className="buttons">
            <button className="deleteButton">Borrar</button>
            <button className="cancelButton">Cancelar</button>
          </footer>
        </section> 
    </>
  )
}