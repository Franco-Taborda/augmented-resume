export interface IReaonlyMap<TKey, TValue> {
  get(key: TKey): TValue | undefined;
}
