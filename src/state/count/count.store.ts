import create, { SetState, GetState } from 'zustand';
import {GetSessionStore, SetSessionStore} from "../../utils";

export const CountStorageKey = '__count_store__';

export type CountStore = {
  count: number;
  increment: () => void;
}

export const useCountStore = create<CountStore>((set: SetState<CountStore>, get: GetState<CountStore>) => ({
  count: GetSessionStore(CountStorageKey, 'int') as number || 0,
  increment: (): void =>
    set(({count}) => {
      return { count: SetSessionStore(CountStorageKey, count + 1) as number }
    })
}));
