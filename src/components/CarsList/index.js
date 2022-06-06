import { useDispatch, useSelector } from 'react-redux';

import { addCar } from '../../store/actions/car';

const CarsList = () => {
  const carsList = useSelector(state => state.car.list)
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {carsList.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(addCar('Honda'))}>Adicionar carro</button>
    </>
  )
}

export default CarsList;