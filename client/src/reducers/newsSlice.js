import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { all, add, update, remove } from "../api/news";

export const fetchNews = createAsyncThunk(
  "fetch/fetchNews",
  async (_, thunk) => {
    try {
      return await all();
    } catch (e) {
      thunk.rejectWithValue("Cannot load all news!!!");
    }
  }
);

export const updateNews = createAsyncThunk(
  "put/updateNews",
  async (data, thunk) => {
    try {
      await update(data);
      return data;
    } catch (e) {
      thunk.rejectWithValue("Cannot update news!!!");
    }
  }
);

export const addNewNews = createAsyncThunk(
  "post/addNewNews",
  async (data, thunk) => {
    try {
      return await add(data);
    } catch (e) {
      thunk.rejectWithValue("Cannot add new news");
    }
  }
);

export const removeNews = createAsyncThunk(
  "post/removeNews",
  async ({ id, accessToken }, thunk) => {
    try {
      await remove({ id, accessToken });
      return id;
    } catch (e) {
      thunk.rejectWithValue("Cannot remove news!!!");
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "success";
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addNewNews.fulfilled, (state, action) => {
        state.news[action.payload.id] = action.payload;
      })
      .addCase(updateNews.fulfilled, (state, action) => {
        let news = state.news[action.payload.id];
        if (news) {
          news = { ...action.payload };
        }
      })
      .addCase(removeNews.fulfilled, (state, action) => {
        state.news.splice(action.payload, 1);
      });
  },
});

export default newsSlice.reducer;
