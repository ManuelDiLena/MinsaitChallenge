import { Btn, BtnsMenu, Navbar, Title } from '../styles/styleMenu'
import { CiShoppingCart, CiHeart } from "react-icons/ci";

interface MenuProps {
    onHideCart: () => void
    onHideFav: () => void
}

export function Menu({ onHideCart, onHideFav }: MenuProps) {
    return (
        <Navbar>
            <Title>Test Challenge</Title>
            <BtnsMenu>
                <Btn id='btnMenuCart' onClick={onHideCart}>
                    <CiShoppingCart />
                </Btn>
                <Btn id='btnMenuFav' onClick={onHideFav}>
                    <CiHeart />
                </Btn>
            </BtnsMenu>
        </Navbar>
    )
}