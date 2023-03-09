const store = window.localStorage;

export const getStorage = (key:string) => JSON.parse(store.getItem(key)!);

export const removeStorage = (key:string) => store.removeItem(key);

export const setStorage = (key:string, value:any) => store.setItem(key, JSON.stringify(value));

export const hasStorage =( key:string) => {
    const item = getStorage(key);
    return !!item;
  };