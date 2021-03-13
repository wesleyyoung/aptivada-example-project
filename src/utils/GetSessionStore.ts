
export type GetSessionStoreType = string | object | number | null;
export type NormalizableSessionStoreType = 'object' | 'int' | 'float';

export const GetSessionStore: (key: string, parseAs?: NormalizableSessionStoreType) => GetSessionStoreType =
  (key: string, parseAs?: NormalizableSessionStoreType) => {
    try {
      let val: GetSessionStoreType = sessionStorage.getItem(key);

      if (val !== null && parseAs) {
        switch (parseAs) {
          case "int":
            val = parseInt(val, 10);
            break;
          case "float":
            val = parseFloat(val);
            break;
          case "object":
            val = JSON.parse(val);
            break;
        }
      }

      return val;
    } catch {
      throw Error('Session storage not supported by browser');
    }
  };
