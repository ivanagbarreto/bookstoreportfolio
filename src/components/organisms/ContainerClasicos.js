import Card from "@/components/molecules/BasicCard";
import WhiteCard from "@/components/molecules/WhiteCard "; 

const Proplibros = [
  {
    id: 1,
    img: "https://images.cdn1.buscalibre.com/fit-in/360x360/b0/39/b039af065268818b7bd3b0e016f8db65.jpg",
    title: "1984",
    price: 14.670,
  },
  {
    id: 2,
    img: "https://planetadelibrosar2.cdnstatics.com/usuaris/libros/fotos/206/original/205240_portada_orgullo-y-prejuicio_jane-austen_201506271719.jpg",
    title: "Orgullo y Prejuicio",
    price: 16.130,
  },
  {
    id: 3,
    img: "https://quelibroleo.com/images/libros/libro_1362370739.png",
    title: "Crimen y Castigo",
    price: 9.770,
  },
];

const ContainerClasicos = () => {
  return (
    <>
      <div className="container">
      <WhiteCard />
        {Proplibros.map((propLibro) => (
          <Card key={propLibro.id} data={propLibro} />
        ))}
      </div>

      <style jsx>{`
       .container{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          align-content: center;
          background-color: #f7f7f7;
          min-height:400px;
          width: 100%;
          align-items: center;
          
        }
     
         @media only screen and (max-width: 36.25rem) {
          .container {
            flex-direction: column; /* Cambia a columna en pantallas pequeñas */
            align-items: center;
          }

          /* Ajustes adicionales para que las tarjetas ocupen todo el ancho en móviles */
          .container > :global(*) {
            width: 90%; /* Ajusta el ancho de cada tarjeta en la vista móvil */
            margin-bottom: 1rem;
          }
        }
        
      `}</style>
    </>
  );
};

export default ContainerClasicos;