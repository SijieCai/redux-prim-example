import { createSlice } from './prim';
import { appActions } from './appSlice';

const slice = createSlice('user',
  () => ({
    id: 'xxxxx',
    name: 'owen',
    age: 123,
    gender: 'male',
    email: 'abc@bbb.com',
    otherInfo: {
      university: '',
      highSchool: '',
      primarySchool: '',
    }
  }),
  ({ setState, mergeState, initState }) => {
    return {
      setAge(age: number) {
        return setState({ age });
      },
      setName(name: string) {
        const action = setState({ value1: name });
        console.log(action);
        return action;
      },
      getBackground(id: string | number) {
        return (dispatch) => {
          dispatch(appActions.loading(true))
          setTimeout(() => {
            dispatch(mergeState({
              otherInfo: {
                university: 'university xxx',
                highSchool: 'highSchool xxx',
                primarySchool: 'primarySchool xxx'
              }
            }));
            dispatch(appActions.loading(false));
          }, 2000)
        }
      },
      reset() {
        return initState({ name: 'hahaha' });
      }
    }
  }
);

export default slice;
export const userActions = slice.actions;
export const userReducer = slice.reducer;
export const userSelector = slice.selector;