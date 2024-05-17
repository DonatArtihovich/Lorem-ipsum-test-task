import { useState } from "react";

function useResize() {
    const [width, setWidth] = useState<number>(window.innerWidth);

    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    })

    return width;
}

export default useResize;