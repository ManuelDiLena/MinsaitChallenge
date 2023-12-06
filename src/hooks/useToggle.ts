import { useState } from 'react'

const useToggle = (initialState: boolean = false): [boolean, () => void] => {

    const [state, setState] = useState<boolean>(initialState)

    const toggle = (): void => {
        setState(!state)
    }

    return [state, toggle]
}

export default useToggle