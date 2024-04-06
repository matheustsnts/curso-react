import './CarDetails.css'

const CarDetails = ({ modelo, ano, cor, bgCor }) => {
  return (
    <div>
      <div className="car-details" style={{ backgroundColor: bgCor }}>
        <h2>{modelo}</h2>
        <h2>{ano}</h2>
        <h2>{cor}</h2>
      </div>
    </div>
  )
}

export default CarDetails
