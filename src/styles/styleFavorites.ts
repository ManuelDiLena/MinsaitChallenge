import styled from 'styled-components'

const ContainerFav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 20%;
    height: 87vh;
    padding: 5px;
`
const TitleFav = styled.button`
    width: 100%;
    padding: 10px 0 10px 0;
    background-color: #406343;
    color: #ECE7B4;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 4px 4px 5px rgba(0,0,0,0.59);
    margin-bottom: 3px;
    letter-spacing: 3px;
    line-height: 1;
`
const ItemFav = styled.div`
    width: 95%;
    height: 60px;
    padding: 5px;
    margin-bottom: 3px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ECE7B4;
    border: 2px solid #32502E;
    box-shadow: 4px 4px 5px rgba(0,0,0,0.59);
    border-radius: 5px;
`

const FavInfo = styled.div`
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    & h3 {
        font-size: 14px;
    }
`

const FavActions = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
        margin: 0 5px 0 5px;
        font-size: 28px;
        color: #406343;
        cursor: pointer;
        padding-top: 2px;
    }
`

export { 
    ContainerFav,
    TitleFav,
    ItemFav,
    FavInfo,
    FavActions,
}