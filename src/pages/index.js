
import Header from "@/components/molecules/Header"
import VideoText from "@/components/organisms/VideoText"

import 'bootstrap/dist/css/bootstrap.min.css'
import CardscontainerInfo from "@/components/organisms/CardscontainerInfo"
import Footer from "@/components/molecules/Footer"
import ContainerBestSeller from "@/components/organisms/ContainerBestSeller"

import ShoppingCart from "@/components/organisms/ShoppingCart"



const index = () => {
  return (
    <>
    <div> 
      <Header/>
      <VideoText/>
      <CardscontainerInfo/>
      <ContainerBestSeller/>
      <ShoppingCart/>
     
     < Footer/>
   

    

    </div>
    </>
  )
}

export default index
