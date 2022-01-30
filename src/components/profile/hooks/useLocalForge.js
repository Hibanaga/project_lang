import localforage from "localforage";
import { useEffect, useState } from "react";

const useLocalForge = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);
  useEffect(() => {
    (async function () {
      try {
        const value = await localforage.getItem(key);
        setStoredValue(value);
      } catch (error) {
        return initialValue;
      }
    })();
  }, [initialValue, key]);

  const set = (value) => {
    (async function () {
      try {
        await localforage.setItem(key, value);
        setStoredValue(value);
      } catch (err) {
        return initialValue;
      }
    })();
  };

  const remove = () => {
    (async function () {
      try {
        await localforage.removeItem(key);
        setStoredValue(null);
      } catch (e) {}
    })();
  };

  return [storedValue, set, remove];
};

export default useLocalForge;
