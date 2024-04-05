import "./MyComponent.css"

import React from 'react'

const MyComponent = () => {
  return (
    <div>
        <h1>CSS do componente</h1>
        <p>Esse é o paragrafo do componente</p>
        <p className="my-comp-paragraph">Este também é do componente</p>
    </div>
  )
}

export default MyComponent
