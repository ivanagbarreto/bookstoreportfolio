
import ButtonProd from "@/components/atoms/Boton-VerProd"

const GrayCard = () => {
  return (
    <>
    <figure>
         
         <figcaption>
            <h1 id="ficcion">Ficción</h1>
           
         </figcaption>

         <div className="buttonContainer">
         <ButtonProd />
         </div>
       </figure>
       <style jsx >{`
              figure {
                height: 160px;
                width: 210px;
                padding:10px;
                display: flex;
                flex-direction: column;
                text-transform: uppercase;
                margin-left:  80px }   
            h1{
              text-align:center;
              color: #6e6e6e;
            }

            @media only screen and (max-width: 36.25rem) {
              figure {margin-left:1rem;
              padding-right:4rem}
               
              h1{
              margin-bottom: 2rem;
              text-align:center;
              }
          
             
            }
       `}</style>
    </>
  )
}

export default GrayCard