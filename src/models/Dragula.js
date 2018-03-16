export default {
  namespace: 'dragula',
  state: {
    sortlist: [],
  },
  reducers: {
    save(state, { payload: { sortlist } }) {
      return { ...state, sortlist };
    },
  },
  effects: {
    // eslint-disable-next-line
    *querySortList({ payload: { } }, { put }) {
      yield put({ type: 'save',
        payload: { sortlist: [
          { id: 1, label: '1. Swap me around 1' },
          { id: 2, label: '2. Swap me around 2' },
          { id: 3, label: '3. Swap me around 3' },
          { id: 4, label: '4. Swap me around 4' },
          { id: 5, label: '5. Swap me around 5' },
          { id: 6, label: '6. Swap me around 6' },
        ] } });
    },
  },
  subscriptions: {
  },
};
