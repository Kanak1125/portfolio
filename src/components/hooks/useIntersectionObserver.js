import { useState, useEffect } from "react";

export default function useIntersectionObserver(targetRef) {
    
    const [isIntersecting, setIsIntersecting] = useState(false);
    
    useEffect(() => {
        const currentTarget = targetRef.current;
        const observer = new IntersectionObserver(entries => {
            const [entry] = entries;
            setIsIntersecting(entry.isIntersecting);
            // console.log("Intersecting: ", isIntersecting);

            if (isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(currentTarget);
            }
        }, {
            threshold: 0.25,
        });

        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        }
    }, [isIntersecting, targetRef]);
}