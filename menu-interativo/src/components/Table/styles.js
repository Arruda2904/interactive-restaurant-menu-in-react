import styled from 'styled-components';

export const Content = styled.div`
    display:flex;

`

export const Container = styled.div`
    border: 2px solid grey;
    display: flex;
    flex-direction: column;
    width:100%;
    align-items: center;

    div.display{
        display:flex;
        flex-direction:column;
    }

    div.noDisplay{
        display:none;
    }
`