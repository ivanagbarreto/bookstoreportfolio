


const CartItems = ({item, deleteFromCart}) => {

    const {id,title, price , quantity} = item;



  return (
    <>

    
      <figure>
        
        <h4>{title}</h4>
        <button onClick={() => deleteFromCart(id, false)}>Eliminar</button><br></br>
        <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button><br></br>
        <p>cantidad : {quantity}  </p>
        <p>total producto: ${price * quantity } </p>
        </figure>

<style jsx>{` button {margin:10px;}

            figure { margin :10px;
            transition: 0.4s;
            background-color: white;
            text-align: center;
            border-radius: 10px;
            box-shadow: 3px 3px 1px grey
      }
      figure:hover { transform: scale(1.1)}
}
`}

</style>
    

    </>
  )
}

export default CartItems