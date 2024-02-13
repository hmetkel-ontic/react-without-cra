import React from "react";

// export function usePrevious<T>(initialValue: T): {
//   state: T;
//   updateState: (newState: T) => void;
//   getPreviosState: () => T | null;
// } {
//   const [state, setState] = React.useState<T>(initialValue);
//   const prevStateRef = React.useRef<T | null>(null);

//   function updateState(newState: T) {
//     setState((previousState: T) => {
//       prevStateRef.current = previousState;
//       return newState;
//     });
//   }

//   function getPreviosState() {
//     return prevStateRef.current;
//   }

//   return { state, updateState, getPreviosState };
// }

// export function usePrevious<T>(initialValue: T): {
//   state: T;
//   setState: React.Dispatch<React.SetStateAction<T>>;
//   getPreviosState: () => T | null;
// } {
//   const [state, setState] = React.useState<T>(initialValue);
//   const prevStateRef = React.useRef<T | null>(null);

//   React.useEffect(() => {
//     prevStateRef.current = state;
//   }, [state]);

//   function getPreviosState() {
//     return prevStateRef.current;
//   }

//   return { state, setState, getPreviosState };
// }

export function usePrevious<T>(value: T): T {
  const ref = React.useRef<T>(value);

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
