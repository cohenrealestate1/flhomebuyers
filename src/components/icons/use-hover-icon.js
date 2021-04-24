// @flow
import { useState } from "react";
import useWindowDimensions from "../../use-window-dimensions";

export const useHoverIcon = () => {
    const [isHovered, setIsHovered] = useState(false);
    const {width} = useWindowDimensions();
    const factor = width < 1000 ? 2 : 1;
    return {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        $isHovered: isHovered,
        width: isHovered ? factor * 66 : factor * 33,
        height: isHovered ? factor * 66 : factor * 33,
    }
}

export default useHoverIcon;