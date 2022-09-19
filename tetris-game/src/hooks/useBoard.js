import React from 'react'
import { useState } from "react";
import { buildBoard } from "/src/business/Board"

export const useBoard = ({ rows, columns }) => {
  const [board] = useState(buildBoard({ rows, columns }));
  
    return [board]
}
