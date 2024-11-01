import { useState, useEffect } from "react";

const useAnimation = (elementRef) => {
  const [isAnimation, setIsAnimation] = useState(false);

  const onEntry = (entries) => {
    const [entry] = entries;
    setIsAnimation(entry.isIntersecting);
  };

  const options = {
    threshold: 1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onEntry, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [elementRef, options]);

  return isAnimation;
};

export default useAnimation;
