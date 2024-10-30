import { useCallback, useState, useEffect } from "react";

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((event) => {
        setTargetReached(event.matches);
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px}`);
        media.addEventListener('change', updateTarget);

        // Inicializa el estado basado en la condición actual
        setTargetReached(media.matches);

        return () => media.removeEventListener('change', updateTarget);
    }, [updateTarget, width]); // Agrega updateTarget y width aquí

    return targetReached;
}

export default useMediaQuery;