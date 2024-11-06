import Image from 'next/image';

const BestSellCard = ({data}) => {
    const {id, img, title, price} = data;

    return (
        <>
            <figure>
                <Image src={img} alt={title} width={110} height={180} style={{ marginTop: '10px' }}/>
                <figcaption>
                    <h3> # {id}</h3>
                    <h3>{title}</h3>
                    <p>{price}</p>
                </figcaption>
            </figure>

            <style jsx>{`
                figure {
                 padding-top:0;
                    height: 290px;
                    width: 210px;
                    border: 0.1px solid black;
                    border-radius: 10px;
                    background-color: white;
                    box-shadow: 3px 6px 20px;
                    display: flex;
                     align-items: center; 
                    flex-direction: column;
                }

                img {
                    width: 60%;
                    object-fit: cover;
                    justify-content: center;
                    margin-left: 38px;
                    margin-top: 10px;
                }

                h3 {
                    font-size: 1rem;
                    line-height: 0.1;
                    text-align: center;
                    margin-top: 1.5rem;
                    margin-bottom: 1rem;
                    color: #154242;
                }

                p {
                    line-height: 0.4;
                    font-size: 0.8rem;
                    text-align: center;
                    width: 100%;
                    padding-bottom: 1rem;
                }

                @media only screen and (max-width: 36.25rem) {
                    figure {
                        margin-left: 77px;
                        margin-right: 100px;
                        margin-top: 20px;
                        margin-bottom: 20px;
                    }
                        img{
                        height:50%
                        width:50%}
                }

                @media only screen and (min-width: 36.25rem) and (max-width: 51.8rem) {
                    figure {
                        display: flex;
                        flex-wrap: wrap;
                        padding-top: 5rem;
                        padding-bottom: 5rem;
                    }
                }
            `}</style>
        </>
    );
};

export default BestSellCard;