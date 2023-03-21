import { configureStore, createSlice } from "@reduxjs/toolkit";

//paginnations
const paginationSlice = createSlice({
  name: "pagination",
  initialState: [
    { currentPage: 1, totalPage: 0 },
    { itemsPerPage: 2, startIndex: 0, endIndex: 0 },
  ],
  reducers: {
    updateCurrentPage: (state, action) => {
      state[0].currentPage = action.payload;
    },
    setTotalPage: (state, action) => {
      state[0].totalPage = Math.ceil(action.payload / state[1].itemsPerPage);
      state[1].startIndex = (state[0].currentPage - 1) * state[1].itemsPerPage;
      state[1].endIndex = state[1].startIndex + state[1].itemsPerPage;
    },
  },
});
export const { updateCurrentPage, setTotalPage, setResetAgentInput } = paginationSlice.actions;

//Top50Properties
const topPropertiesSlice = createSlice({
  name: "topProperties",
  initialState: null,
  reducers: {
    setTopProperties: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTopProperties } = topPropertiesSlice.actions;

//properties
const propertiesSlice = createSlice({
  name: "properties",
  initialState: null,
  reducers: {
    setProperties: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProperties } = propertiesSlice.actions;

export const store = configureStore({
  reducer: {
    pagination: paginationSlice.reducer,
    topProperties: topPropertiesSlice.reducer,
    properties: propertiesSlice.reducer,
  },
});
