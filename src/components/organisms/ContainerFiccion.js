
import Card from "@/components/molecules/BasicCard";
import GrayCard from "@/components/molecules/GrayCard";

const Proplibros = [
  {
    id: 1,
    img: "https://images.cdn2.buscalibre.com/fit-in/360x360/88/6a/886aef011bb181c8ded9b998fb552311.jpg",
    title: "El Resplandor",
    price: 14.670,
  },
  {
    id: 2,
    img: "https://images.cdn2.buscalibre.com/fit-in/360x360/a4/4a/a44aa2851d4fc4cd19ca95af937da6b4.jpg",
    title: "Mitología y Bestiario",
    price: 16.130,
  },
  {
    id: 3,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/355/687/products/jane-eyre-ce1-3fe94f3b01911b1d3016922949602373-640-0.jpg",
    title: "Jane Eyre",
    price:9.770,
  },
];

const ContainerFiccion = () => {
  return (
    <>
      <div >
        <GrayCard/>

        {Proplibros.map((Proplibros) => (
          <Card key={Proplibros.id} data={Proplibros} />
        ))}
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          align-content: center;
          background-color: #f7f7f7;
          min-height:400px;
          width: 100%;
          align-items: center;
           
        }
             

      `}</style>
    </>
  );
};

export default ContainerFiccion;

