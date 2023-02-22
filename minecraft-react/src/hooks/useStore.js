import create from "zustand"
import { nanoid } from "nanoid"

// Store for state management
export const useStore = create((set) => ({
    texture: 'dirt',
    // initial state
    cubes: [{
        key: nanoid(),
        pos: [1,1,1],
        texture: 'dirt',
    }],
    // actions
    addCube: (x,y,z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    pos: [x,y,z],
                    texture: prev.texture,
                }
            ]
        }))
    },
    removeCube: () => {},
    setTexture: () => {},
    saveWorld: () => {},

}))

