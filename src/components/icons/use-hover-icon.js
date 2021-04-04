// @flow
import { useState } from "react";

export const useHoverIcon = () => {
    const [isHovered, setIsHovered] = useState(false);
    return {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        $isHovered: isHovered,
        width: isHovered ? '66' : '33',
        height: isHovered ? '66' : '33',
    }
}

export default useHoverIcon;