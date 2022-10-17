import React from 'react'

function Total(props) {

  const {totalBooks} = props

  if (!totalBooks.length) {
    return (
        <>
        <h4>Total</h4>
        <div>No Books Added</div>
        </>
      )
  }

  let finalTotal = totalBooks.reduce((acc, book) => {
    return acc + (book.price * book.quantity)
  }, 0)

  return (
    <>
    <div>Total</div>
    {
        totalBooks.map((book) => {
            const {price, title, quantity} = book
            return (
               <div>
                    <span>{title}: ${price}x{quantity} = {price*quantity}</span>
               </div>
            )
        })
    }
    <hr />
    <h3>Final value: {finalTotal}</h3>
    </>
    
  )
}

export default Total