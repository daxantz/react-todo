import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  // function setItem(value) {
  //   try {
  //     localStorage.setItem(key, JSON.stringify(value));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // function getItem() {
  //   try {
  //     const item = localStorage.getItem(key);
  //     return item ? JSON.parse(item) : undefined;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return [value, setValue];
}
