import React, { useEffect } from 'react'
import {Content,Container} from './styles'

const Table = (props) => {

    return(
        
    <Content>
        <Container>
            <div className="display"> 
                <h1> {props.titulo} </h1>
                <h2> Peperonni </h2>
                <h2> Calabresa </h2>
                <h2> Frango </h2>
            </div>

        </Container>
    </Content>
        
    )

}
export default Table;