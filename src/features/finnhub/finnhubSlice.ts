import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FinnhubState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: FinnhubState = {
  data: null,
  loading: false,
  error: null,
};

const finnhubSlice = createSlice({
  name: "finnhub",
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } = finnhubSlice.actions;

export default finnhubSlice.reducer;
