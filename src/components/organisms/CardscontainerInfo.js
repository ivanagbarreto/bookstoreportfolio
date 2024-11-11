import CardsInfo from "@/components/molecules/CardsInfo";

const CardscontainerInfo = () => {
  const infocliente = [
    {
      id: 1,
      img: "https://cdn.icon-icons.com/icons2/2785/PNG/512/shipping_icon_177395.png",
      title: "Envío gratis",
      text: "en compras de $16.000 o más.",
    },
    {
      id: 2,
      img: "https://cdn.icon-icons.com/icons2/2785/PNG/512/discount_icon_177364.png",
      title: "Descuento",
      text: "10% off en efectivo o transferencia.",
    },
    {
      id: 3,
      img: "https://cdn.icon-icons.com/icons2/2785/PNG/512/customer_service_icon_177385.png",
      title: "Contáctanos",
      text: "ante cualquier duda.",
    },
  ];

  return (
    <>
      <div className="cards-container-info">
        {infocliente.map((infocliente, index) => (
          <div
            key={infocliente.id}
            className={`card-item ${index === 2 ? "move-left-mobile" : ""}`}
          >
            <CardsInfo infocliente={infocliente} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .cards-container-info {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          background-color: #eaeaea;
          height: auto;
          width: 100vw;
          overflow-x: hidden;
          justify-content: center;
          padding: 10px;
        }

        @media only screen and (max-width: 800px) {
          .cards-container-info {
            grid-template-columns: 1fr;
          }

          /* Mover solo la tercera tarjeta hacia la izquierda en vista móvil */
          .move-left-mobile {
            transform: translateX(
              -45px
            ); /* Ajusta este valor según el desplazamiento que desees */
          }
        }
      `}</style>
    </>
  );
};

export default CardscontainerInfo;
