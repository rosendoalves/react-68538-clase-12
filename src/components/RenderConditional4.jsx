import React, { useState } from 'react'

const InputCount = ({ onConfirm, maxQuantity }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <input
        type="number"
        value={quantity}
        min={1}
        max={maxQuantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={() => onConfirm(quantity)}>Agregar</button>
    </div>
  );
}

const ButtonCount = ({ onConfirm, maxQuantity }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <button
        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => setQuantity((prev) => Math.min(maxQuantity, prev + 1))}
      >
        +
      </button>
      <button onClick={() => onConfirm(quantity)}>Agregar</button>
    </div>
  );
}

export default function RenderConditional4({item, inputType = 'input'}) {
  const Count = inputType === 'button' ? ButtonCount : InputCount
  const itemMax = item.itemMax
  const itemMin = item.itemMin

  function addToCard(quantity) {
    if(item.inStock) {
      console.log(`Se agregaron ${quantity} ${item.name} al carrito`)
    }
  }

  return (
    <div>
      <label>{item.name}</label>
      <Count onConfirm={addToCard} maxQuantity={item.max}/>
    </div>
  )
  
}

