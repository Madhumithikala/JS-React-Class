import React, { useContext } from 'react'
import CounterHeading from './CounterHeading'
import { appContextApi } from '../contextApi/AppContext';
import Button from './Button';

const Login = ({containerClass,login}) => {
  const {resetCount} = useContext(appContextApi);
  return (
    <div className={containerClass}>
      <CounterHeading />
      {login}
      <Button clickHandler={resetCount} label="Rest Count"/>
    </div>
  )
}

export default Login