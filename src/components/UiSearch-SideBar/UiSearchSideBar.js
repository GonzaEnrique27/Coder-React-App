import React from 'react'
import './UiSearchSideBar.css'

export const UiSearchSideBar = () => {
  return (
    <div className='ctn-ui-side-bar'>

<br/>
  <h3> Elige tu preferencia </h3>
  <hr/>
  <br/>
  <div className='input-container'>
    <p className='envio'>Envio Gratis</p>
    <br/>
    <br/>
    <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
<br/>
<p className='llegahoy'>Llega Hoy</p>
<br/>
<br/>

<label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>

<br/>


  </div>


  <br/>
  <h4>Condicion</h4>
  <hr/>
  <p>Nuevo</p>   
  <p>Usado</p>  
  <p>Reacondicionado</p>
  <br/>
  

  <h4>Categorias</h4>
  <hr/>
  <p>Criollas</p>  
  <p>Electricas</p>
  <p>Acusticas</p>  
  <p>Otras</p> 
  <br/>

  <h4>Precio</h4>
  <hr/>
  <p>Hasta $45.000</p>  
  <p>$45.000 a $100.000</p>  
  <p>Mas de $100.000</p>  
  <input type='text' value="Minimo"/>
  -
  <input type='text' value="Maximo"/>
  <br/>
  <br/>
  <h4>Orientacion de mano</h4>
  <hr/>
  <p>Diestro</p>   
  <p>Derecha</p>  
   <p>Zurdo</p>  
   <p>Ambidiestro</p>   
   <p>Izquierda</p> 
   <br/>
  




    </div>
  )
}
