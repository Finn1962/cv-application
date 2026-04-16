import { useState, useEffect, useRef } from "react";

export function useScrollDirection() {
  const [lastScrollDirection, setLastScrollDirection] = useState("up");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const trackScroll = () => {
      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";

      setLastScrollDirection((prevDirection) => {
        if (direction !== prevDirection) {
          return direction;
        }
        return prevDirection;
      });

      lastScrollY.current = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", trackScroll);

    return () => window.removeEventListener("scroll", trackScroll);
  }, []);

  return lastScrollDirection;
}
