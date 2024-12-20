import BestSellCard from "@/components/molecules/BestSellCard";

const Proplibros = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1694055927i/195714366.jpg",
    title: "El vuelo de la libélula",
    price: " Gabriela Exilart , 14.670$",
  },
  {
    id: 2,
    img: "https://www.penguinlibros.com/ar/2874610-thickbox_default/las-indignas.jpg",
    title: "Las Indignas",
    price: " Agustina Bazterrica, 16.130$",
  },
  {
    id: 3,
    img: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/706213.jpg",
    title: "Nosotros en la tormenta ",
    price: "Eduardo Sacheri, 9.770$",
  },
];

const ContainerBestSeller = () => {
  return (
    <>
      <div id="containerBestseller">
        <figure>
          <figcaption>
            <h1 id="best-seller">Best Sellers</h1>
          </figcaption>
        </figure>
        {Proplibros.map((Proplibros) => (
          <BestSellCard key={Proplibros.id} data={Proplibros} />
        ))}
      </div>

      <style jsx>{`
       h1{
        text-align:center;
        margin-right: 6rem; 
        color: #317577;
        font-weight:bold;
    }

        figure {
         height: 280px;
         width: 210px;
         background-color: white;
         padding:15px;
         display: flex;
         flex-direction: column;
         text-transform: uppercase; }
      
      div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-content: center;
        background-color: white;
        height:700px;
        width: 100vw;
        align-items: center; 
        
      }
      @media only screen and (max-width: 36.25rem) { 

        h1{
         padding-bottom: 10px;
         padding-top: 0; 
        margin-top: 0;
        font-weight:bold;
        }
        div { 
          position: absolute;
          top: 95rem;
          margin-top: 100px;
         }

         figure {
          padding-top: 0; 
          height: 95px;
          width: 200px;
          
          display: flex;
          flex-direction: column;
          text-transform: uppercase; }

      } 
        
       }

       @media only screen and (min-width: 36.25rem) and (max-width:51.8rem) {
        div {
          
          flex-wrap:wrap;
          align-items:center;
          
         }
   
  }

    `}</style>
    </>
  );
};

export default ContainerBestSeller;
