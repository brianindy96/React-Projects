import { useCallback, useEffect, useState } from "react"

function actionByKey(key) {
    const keyActionMap = {
        KeyW: 'moveForward',
        KeyS: 'moveBackward',
        KeyA: 'moveLeft',
        KeyD: 'moveRight',
        Space: 'jump',
        Digit1: 'dirt',
        Digit2: 'grass',
        Digit3: 'glass',
        Digit4: 'wood',
        Digit5: 'log'

    }

    return keyActionMap[key]
}

export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        texture1: false,
        texture2: false,
        texture3: false,
        texture4: false,
        texture5: false,
    })

    //handles pressing key
    const handleKeyDown = useCallback((e) => {
        const action = actionByKey(e.code)
        // if there is an action,
        if(action){
            // access the actions state, make up a new object with only the stated "action" value that changes to true
            // It is called with a new object that merges the previous state with the updated value of the action that was triggered. This new object is returned by the function and used to update the state.
            setActions((prev) => {
                return ({
                    ...prev,
                    [action]: true,
                })
            })
        }
    }, [])

    //handles lifting from key
    const handleKeyUp = useCallback((e) => {
        const action = actionByKey(e.code)
        if(action){
            setActions((prev) => {
                return ({
                    ...prev,
                    [action]: false,
                })
            })
        }
    }, [])

    
    // A way to call those functions is to add Eventlistener on useEffect
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [handleKeyDown, handleKeyUp])

    return actions;
}