import localforage from "localforage";

export function getLocalValue(key: string) {
  let result;

  localforage.getItem(key, (value) => {
    result = value;
  });

  return result;
}
