import React from 'react';
import CheckoutForm from './CheckoutForm';
import CheckoutFormBrowser from './CheckoutFormBrowser';

function Shopping(){
  const windowWidth = window.innerWidth

  return(
    <>
      {
        windowWidth >= 500 ? <CheckoutFormBrowser /> : <CheckoutForm/>
      }  
    </>        
  )
}

export default Shopping