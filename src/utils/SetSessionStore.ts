/**
 * @description Stores the value in sessionStorage and returns the value. Will silently fail if sessionStorage is not supported
 * @param key: string
 * @param val: any
 */
export const SetSessionStore: <T>(key: string, val: T) => T | undefined =
  <T>(key: string, val: T) => {
    let storageVal: T | string = val;
    if (typeof val === 'object') {
      storageVal = JSON.stringify(val);
    }

    try {
      sessionStorage.setItem(key, storageVal as unknown as string);
    } catch {
      console.error(`Failure storing value to sessionStorage. This browser may not support it`);
    }

    return val;
  };
