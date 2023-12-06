import { Btn, Navbar, Title } from '../styles/styleMenu'
import { CiHeart } from "react-icons/ci";

interface MenuProps {
    onHideFav: () => void
}

export function Menu({ onHideFav }: MenuProps) {
    return (
        <Navbar>
            <Title>Test Challenge</Title>
            <Btn onClick={onHideFav}>
                <CiHeart />
            </Btn>
        </Navbar>
    )
}