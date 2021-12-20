const appLocalStorage = localStorage;

const setItem = (key: string, value: any) => {
  appLocalStorage.setItem(key, JSON.stringify(value));
};

const getItem = <T>(key: string): T | null => {
  const value = appLocalStorage.getItem(key);

  return value ? JSON.parse(value) as T : null;
};

const updateItem = (key: string, value: any) => {
  let oldValue: any = appLocalStorage.getItem(key);

  if (oldValue) {
    if (oldValue instanceof Array) {
      oldValue = oldValue.concat(value);
    } else if (typeof oldValue !== 'object') {
      setItem(key, value);
      return;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      oldValue = { ...oldValue, ...value };
    }
  }
  setItem(key, oldValue);
};

const removeItem = (key: string) => {
  appLocalStorage.removeItem(key);
};

const clear = () => {
  appLocalStorage.clear();
};

export default {
  setItem,
  getItem,
  updateItem,
  removeItem,
  clear,
};
