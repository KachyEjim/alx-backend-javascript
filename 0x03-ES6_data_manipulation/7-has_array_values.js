// A function that returns a boolean value if all the elements in the array exit with the set.

export default function hasValuesFromArray(set, array) {
  const allElementsPresent = array.every((v) => set.has(v));
  return allElementsPresent;
}
