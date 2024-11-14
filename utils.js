import { createContext } from "react";

export function setSortArray(value, sortOrder, todos) {
  let array = [...todos];
  if (sortOrder === "Ascending") {
    if (value === "dueDate") {
      console.log("ascending date");
      array.sort((a, b) => {
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
    }
    console.log("ascending other value");
    array.sort((a, b) => {
      return a[value] - b[value];
    });
  } else if (sortOrder === "Descending") {
    // Changed to sortOrder
    if (value === "dueDate") {
      console.log("decending date");
      array.sort((a, b) => {
        return new Date(b.dueDate) - new Date(a.dueDate);
      });
    }
    array.sort((a, b) => {
      console.log(a[value]);
      return b[value] - a[value];
    });
  } else if (sortOrder === "Default") {
    return todos;
  }
  console.log(value, sortOrder, array);
  return array;
}

export function calcDate(duedate) {
  const targetDate = new Date(duedate);
  const today = new Date();
  const differenceInTime = targetDate - today;

  const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
  return differenceInDays;
}

export const TodoContext = createContext(undefined);
