import { useEffect, useState, useRef } from 'react';
import { useTransform, motion, useScroll, useSpring } from 'framer-motion';

export default function SmoothScroll({ children }: { children: React.ReactNode; }) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { mass: 0.2 })

    const y = useTransform(smoothProgress, value => {
        return value * - (contentHeight - window.innerHeight);
    });

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight)
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [contentRef, children]);


    return <>
        <motion.div
            className="scroll-progress fixed top-0 w-screen h-4 bg-[#1A5866] z-50"
            style={{ scaleX: scrollYProgress }}
        />
        <div style={{ height: contentHeight }} />
        <motion.div
            className="scrollBody"
            ref={contentRef}
            style={{ y }}
        >
            {children}
        </motion.div>
    </>;
}