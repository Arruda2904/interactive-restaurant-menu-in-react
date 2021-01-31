import React, { useState } from 'react'
import {Content,Container} from './styles'

const Table = (props) => {

    const [displayPizza, setDisplayPizza] = useState(true);

    const pizzaFunc = () => {
        if(displayPizza == false){
            setDisplayPizza(true);
        }else{
            console.log(true);
        }
    }
    return(
        
    <Content>
        <Container>
            <div className= {displayPizza ? 'display':'noDisplay'}> 
                <h1 onClick={()=> pizzaFunc()}> {props.titulo} </h1>
                <h2> Peperonni </h2>
                <h2> Calabresa </h2>
                <h2> Frango </h2>
            </div>

        </Container>
    </Content>
        
    )

}
export default Table;