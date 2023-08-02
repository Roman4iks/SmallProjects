import { useCallback, useEffect, useRef, useState } from "react";

const Increment = () => {
const [value, setValue] = useState<number>(0);
const onAction = useRef<Function>(() => {});
const intervalRef = useRef<NodeJS.Timeout | null>(null);

const updateValue = useCallback(() => {
  onAction.current(value);
}, [value]);

useEffect(() => {
  if (onAction.current) {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(updateValue, 5);
  }
  return () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  };
}, [updateValue]);

const onDecrement = () => {
  setValue((prev) => prev - 5);
};

const onIncrement = () => {
  setValue((prev) => prev + 5);
};

const setIntervalIncrement = () => {
  onAction.current = onIncrement;
};

const setIntervalDecrement = () => {
  onAction.current = onDecrement;
};

const setIntervalStop = () => {
  onAction.current = () => {}
}
return (
    <>
      <h1>{value}</h1>
      <button onClick={onDecrement}>+</button>
      <button onClick={onIncrement}>-</button>
      <button onClick={setIntervalIncrement}>AutoIncrement</button>
      <button onClick={setIntervalDecrement}>AutoDecrement</button>
      <button onClick={setIntervalStop}>StopInterval</button>
    </>
  );
}

export default Increment