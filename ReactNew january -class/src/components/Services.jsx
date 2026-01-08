import React, { useContext } from 'react'
import CounterHeading from './CounterHeading'
import { appContextApi } from '../contextApi/AppContext';
import Button from './Button';

const Services = ({containerClass,services}) => {
  const {resetCount} = useContext(appContextApi);
  return (
    <div className={containerClass}>
      <CounterHeading />
      {services}
      <Button clickHandler={resetCount} label="Rest Count"/>
    </div>
  )
}

export default Services