import ButtonProd from "@/components/atoms/Boton-VerProd";

const WhiteCard = () => {
  return (
    <>
      <figure>
        <figcaption>
          <h1 id="clasicos">Clásicos</h1>
        </figcaption>
        <div className="buttonContainer">
          <ButtonProd />
        </div>
      </figure>
      <style jsx>{`
        figure {
          height: 160px;
          width: 210px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          text-transform: uppercase;
          margin-left: 20px;
        }
        h1 {
          text-align: center;
          color: #6e6e6e;
          margin-bottom: 2rem;
        }

        @media only screen and (max-width: 36.25rem) {
          figure {
            margin-left: 1rem;
            padding-right: 2.5rem;
          }
          h1 {
            display: none; /* Ocultar título y botón en móvil */
          }
          .buttonContainer {
            display: none; /* Ocultar título y botón en móvil */
          }
        }
      `}</style>
    </>
  );
};

export default WhiteCard;
