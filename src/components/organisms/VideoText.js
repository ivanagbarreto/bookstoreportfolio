import React from "react";

import Button from "@/components/atoms/Boton-Comprar";
import Link from "next/link";

const VideoText = () => {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="Video1.mp4" type="video/mp4" />
        </video>
        <div className="text-overlay">
          <h1>
            Encontrá los mejores
            <br />
            libros, ebooks y<br />
            audiolibros{" "}
          </h1>
          <div className="button-text-overlay">
            <Link href="#containerBestseller">
              <Button />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .video-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow-x: hidden;
          overflow-y: hidden;
        }
        video {
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          overflow-x: hidden;
        }
        .text-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          text-align: right;
          color: #fff;
          letter-spacing: 1px;
        }
        .text-overlay h1 {
          font-size: 55px;
          margin-right: 60px;
        }
        .text-overlay p {
          font-size: 16px;
        }
        .button-text-overlay {
          margin: 20px 60px;
        }
        @media (max-width: 767px) {
          .text-overlay {
            text-align: center;
            margin: 0px 0px 20px 30px;
          }
        }
      `}</style>
    </>
  );
};

export default VideoText;
