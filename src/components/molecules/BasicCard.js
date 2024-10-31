import Image from 'next/image';

const BasicCard = ({ data, addToCart }) => {
  const { img, title, price, id, autor } = data;

  return (
    <>
      <figure>
        <Image src={img} alt={title} width={220} height={320} layout="responsive" style={{ marginBottom: "30px" }}/>
        <figcaption>
          <h3>{title}</h3>
          <p>{autor}</p>
          <p>${price}</p>
          <button onClick={() => addToCart(id)}>Comprar</button>
        </figcaption>
      </figure>

      <style jsx>{`
        figure {
          height: 320px;
          width: 220px;
          border: 0.1px solid black;
          border-radius: 10px;
          background-color: white;
          box-shadow: 3px 6px 20px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 60px;
          margin-right: 20px;
          margin-top: 20px;
          margin-bottom: 200px;
        }
        h3 {
          font-size: 1rem;
          line-height: 1;
          text-align: center;
          padding-top: 0.3rem;
          margin top:50px;
        }
        p {
          line-height: 1;
          font-size: 0.8rem;
          text-align: center;
        }
        button {
          justify-content: center;
          align-items: center;
          display: inline-block;
          
        }
      `}</style>
    </>
  );
};

export default BasicCard;


