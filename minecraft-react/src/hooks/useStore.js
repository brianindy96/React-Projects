import { create } from "zustand"
import { nanoid } from "nanoid"

// Store for state management
export const useStore = create((set) => ({
    texture: 'dirt',
    // initial state
    cubes: [{
        key: nanoid(),
        pos: [1,0.5,1],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [2,0.5,1],
        texture: 'glass',
    },
],
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

