import React, { useRef, useEffect, useState } from 'react';
import styles from './ProgressLine.module.scss';

const ProgressLine = ({ total, current, onDotClick }) => {
  const containerRef = useRef(null);
  const [dotPositions, setDotPositions] = useState([]);

  const calculateDotPositions = () => {
    const container = containerRef.current;
    if (container) {
      const containerLeft = container.getBoundingClientRect().left;
      const dots = Array.from(container.querySelectorAll(`.${styles.dotLineWrapper}`));
      const positions = dots.map(dot => {
        const rect = dot.getBoundingClientRect();
        return rect.left + rect.width / 2 - containerLeft;
      });
      setDotPositions(positions);
    }
  };

  useEffect(() => {
    calculateDotPositions();
    window.addEventListener('resize', calculateDotPositions);
    return () => window.removeEventListener('resize', calculateDotPositions);
  }, [total]);

  useEffect(() => {
    calculateDotPositions();
  }, [current]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.dots} ref={containerRef}>
        {[...Array(total)].map((_, index) => (
          <div
            key={index}
            className={styles.dotLineWrapper}
            onClick={() => onDotClick(index)}
          >
            <div className={styles.dotLine} />
          </div>
        ))}

        {dotPositions.length > 0 && (
          <div
            className={styles.activeDot}
            style={{
              transform: `translateX(${dotPositions[current] - 6}px) translateY(-50%)`
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProgressLine;
