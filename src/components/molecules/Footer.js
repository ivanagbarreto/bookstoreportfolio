import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="grupo1">
          <div className="logo">
            <figure>
              <a href="index.html">
                <Image
                  src="/logo.png"
                  alt="Logo Books.com"
                  width={100}
                  height={50}
                />
              </a>
            </figure>
          </div>
          <div className="date">
            <h2 id="contacto">
              <strong>Contáctanos</strong>
            </h2>
            <ul>
              <li>Books.tiendavirtual@gmail.com</li>
              <li>Teléfono: (601) 860 3226</li>
              <li>Whatsapp: (57) 364 862 4356</li>
            </ul>
          </div>
        </div>
        <div className="grupo2">
          <h2>
            <strong>Quiénes Somos</strong>
          </h2>
          <p>
            Books.com es una librería virtual la cual surgió de la necesidad de
            encontrar todo en un mismo lugar, ofreciendo un excelente servicio,
            donde puedes encontrar desde libros, ebooks y audiolibros de
            diferentes categorías como Best Seller, ficción y clásicos.
          </p>
        </div>

        <div className="grupo3">
          <div className="Contacts">
            <h2>
              <strong>Redes Sociales</strong>
            </h2>
            <div className="red-social">
              <a target="_blank" href="index.js">
                <Image
                  src="/instagram-logo.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </a>
              <a target="_blank" href="index.js">
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={30}
                  height={30}
                />
              </a>
              <a target="_blank" href="index.js">
                <Image
                  src="/twitter-logo-.png"
                  alt="Twitter"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
          <div className="Payments">
            <h2>
              <strong>Medios de Pago</strong>
            </h2>
            <Image src="/logo-PSE.png" alt="PSE" width={50} height={30} />
            <Image
              src="/mastercard-logo.png"
              alt="Mastercard"
              width={50}
              height={30}
            />
            <Image src="/visa_logo.png" alt="Visa" width={50} height={30} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
