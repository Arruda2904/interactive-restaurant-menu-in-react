import styled from 'styled-components';

export const Content = styled.div`
    display:flex;
    width:50%;

`

export const Container = styled.div`
    border: 2px solid grey;
    background-color:tomato;
    display: flex;
    flex-direction: column;
    width:100%;
    padding:10%;

    div.display{
        display:flex;
        flex-direction:column;
    }

    div.noDisplay{
        display:none;
        background-color:tomato;
    }

`

export const Titles = styled.div`
    display:flex;
    justify-content:space-around;
    cursor:pointer;
    background-color:#aaa;

    h1{
        flex-grow:1;
        margin:0;
        padding:10%;
    }

    h1.displayTomato{
        background-color:tomato;
    }

    h1.noDisplayTomato{
        background-color:#aaa;
    }
`

export const Flavours = styled.div`
    background-color: #aaa;
`