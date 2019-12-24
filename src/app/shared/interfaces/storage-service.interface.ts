import { Observable } from 'rxjs';

export interface StorageInterface<T, U> {
  getData: () => Observable<T>;
  setData: (data: T) => void;
  updateData: (data: U, key: string | number) => void;
  resetData: (data: T) => void;
}
