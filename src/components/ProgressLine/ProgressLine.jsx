import React, { useRef, useEffect, useState } from 'react';
import styles from './ProgressLine.module.scss';

const ProgressLine = ({ total, current, onDotClick }) => {
  const containerRef = useRef(null);
  const [dotPositions, setDotPositions] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const dots = Array.from(container.querySelectorAll(`.${styles.dotLineWrapper}`));
      const positions = dots.map(dot => dot.offsetLeft + dot.offsetWidth / 2);
      setDotPositions(positions);
    }
  }, [total]);

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
              transform: `translateX(${dotPositions[current] - 8}px)`, 
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProgressLine;



