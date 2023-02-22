import { create } from "zustand"
import { nanoid } from "nanoid"

// Store for state management
export const useStore = create((set) => ({
    texture: 'dirt',
    // initial state
    cubes: [{
        key: nanoid(),
        pos: [1,0,1],
        texture: 'dirt',
    },
    {
        key: nanoid(),
        pos: [2,0,1],
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
    removeCube: (x,y,z) => {
        set((prev) => ({
            // the filter functions checks which pos form prev state matches with the selected cube.
            // if it matches, the cube is removed from the new Array
            cubes: prev.cubes.filter(cube => {
                const [X,Y,Z] = cube.pos
                return X != x || Y != y || Z != z
            })
        }))
    },
    setTexture: () => {},
    saveWorld: () => {},

}))

