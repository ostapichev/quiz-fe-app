import { createSlice } from '@reduxjs/toolkit';

interface IState {
  valueUsers: string;
  valueCompanies: string;
}

const initialState: IState = {
  valueUsers: '10',
  valueCompanies: '10',
};

const slice = createSlice({
  name: 'valueSlice',
  initialState,
  reducers: {
    valueStateUsers: (state, action) => {
      state.valueUsers = action.payload;
    },
    valueStateCompanies: (state, action) => {
      state.valueCompanies = action.payload;
    },
  },
});

const { actions, reducer: valueReducer } = slice;
const valueActions = {
  ...actions,
};

export { valueReducer, valueActions };
