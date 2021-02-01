import React, { useState } from 'react'
import { Content, Container, Titles, Flavours } from './styles'

const Table = () => {

    const [displayPizza, setDisplayPizza] = useState(true);
    const [displayDoce, setDisplayDoce] = useState(false);
    const [greyTitle, setGreyTitle] = useState(false); 
    
    const pizzaFunc = () => {
        if (displayPizza == false) {
            setDisplayPizza(true);
            setDisplayDoce(false);
            setGreyTitle(false);
        } else {
            console.log('pizza é true');
        }
    }

    const doceFunc = () => {
        if (displayDoce == false) {
            setDisplayDoce(true);
            setDisplayPizza(false);
            setGreyTitle(true);
        } else {
            console.log('doce é true');
        }
    }

    return (

        <Content>
            <Container>
                <Titles>
                    <h1 onClick={() => pizzaFunc()} className={greyTitle ? 'displayTomato' : 'noDisplayTomato'}> Pizzas </h1>
                    <h1 onClick={() => doceFunc()} className={greyTitle ? 'noDisplayTomato' : 'displayTomato'}> Doces </h1>
                </Titles>
                <Flavours>
                    <div className={displayPizza ? 'display' : 'noDisplay'}>
                        <h2> Peperonni </h2>
                        <h2> Calabresa </h2>
                        <h2> Frango </h2>
                    </div>

                    <div className={displayDoce ? 'display' : 'noDisplay'}>
                        <h2> Brigadeiro </h2>
                        <h2> Beijinho </h2>
                        <h2> Banana </h2>
                    </div>
                </Flavours>


            </Container>
        </Content>

    )

}
export default Table;