import React, { useState } from 'react'
import { Card, InputNumber, Button   } from 'antd';

function ItemDetail(props) {
  const {title, price, handleAdd} = props; 

  const [quantity, setQuantity] = useState(0)

  function handleQuantity(event){
    setQuantity(event)
  }

  return (
    <Card title={title} bordered={true} style={{ width: 300 }}>
        <h3>${price}</h3>
        <InputNumber min={1} max={10} defaultValue={quantity} onChange={handleQuantity} />
        <Button type="primary" onClick={() => { handleAdd(title, price, quantity) }}>Add</Button>
    </Card>
  )
}

export default ItemDetail