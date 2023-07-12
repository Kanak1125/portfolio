import { useState, useEffect } from "react";

export default function useIntersectionObserver(targetRef) {
    
    const [isIntersecting, setIsIntersecting] = useState(false);
    
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const [entry] = entries;
            setIsIntersecting(entry.isIntersecting);
            console.log("Intersecting: ", isIntersecting);

            if (isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(targetRef.current);
            }
        }, {
            threshold: 0.25,
        });

        if (targetRef.current) observer.observe(targetRef.current);

        return () => {
            if (targetRef.current) observer.unobserve(targetRef.current);
        }
    }, [isIntersecting]);
}