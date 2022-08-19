import { useState, useEffect } from "react";

const useMove = (move, setMove, elRef, parentPadding, parentWidth) => {
  const [transformValue, setTransformValue] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const moveText = () => {
    const scrollableWidth =
      elRef.current.clientWidth - parentWidth + parentPadding * 2;

    const id = setInterval(() => {
      setTransformValue((prevState) => {
        if (scrollableWidth === prevState) {
          clearInterval(id);
          return prevState;
        }
        return prevState + 1;
      });
    }, 50);

    setIntervalId(id);
  };

  useEffect(() => {
    if (elRef.current && move) {
      if (elRef.current.clientWidth + parentPadding >= parentWidth) moveText();
    }
  }, [move]);

  useEffect(() => {
    if (elRef.current) {
      const scrollableWidth =
        elRef.current.clientWidth - parentWidth + parentPadding * 2;

      if (move && transformValue === scrollableWidth) {
        let id1 = setTimeout(() => {
          setTransformValue(0);
          setTimeout(() => {
            setMove((prevState) => {
              if (prevState) {
                moveText();
              }

              return prevState;
            });
          }, 1000);
        }, 2000);

        return () => {
          clearTimeout(id1);
        };
      }
      if (!move) {
        clearInterval(intervalId);
        setTransformValue(0);
      }
    }
  }, [move, transformValue]);

  return transformValue;
};

export default useMove;
