import styled from 'styled-components'


const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 75px;
    background-color: #32502E;
    color: #ECE7B4;
    z-index: 1;
`

const Title = styled.h1`
    margin-left: 80px;
    text-shadow: 4px 4px 5px rgba(0,0,0,0.59);
    letter-spacing: 3px;
    line-height: 1;
    text-transform: uppercase;
`


export { 
    Navbar,
    Title,
}