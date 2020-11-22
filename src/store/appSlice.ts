import createSlice from './prim';

const slice = createSlice('app',
  () => ({
    loading: false
  }),
  ({ setState }) => {
    return {
      loading(loading: boolean) {
        return setState({ loading })
      },
    }
  }
);

export default slice;