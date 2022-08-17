import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  teams: [],
  status: "idle",
  error: null,
};

export const fetchTeams = createAsyncThunk("fetch/fetchTeams", async () => {
  try {
    const response = await axios.get("https://localhost:7072/api/teams");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addNewTeam = createAsyncThunk("post/addNewTeam", async (state) => {
  try {
    const response = await axios.post("https://localhost:7072/api/teams", {
      ...state,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const newsSlice = createSlice({
  name: "teams",
  initialState,
  redusers: {
    teamsUpdated(state, action) {
      const { id, name, photoUrl } = action.payload;
      const existingTeam = state.teams.find((team) => team.id === id);
      if (existingTeam) {
        existingTeam.name = name;
        existingTeam.photoUrl = photoUrl;
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state = "loading";
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.teams = state.teams.concat(action.payload);
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewTeam.fulfilled, (state, action) => {
        state.teams.push(action.payload);
      });
  },
});

export const { teamsUpdated } = newsSlice.actions;
export default newsSlice.reducer;

export const selectAllNews = (state) => state.teams.teams;

export const selectNewsById = (state, teamId) =>
  state.teams.teams.find((team) => team.id === teamId);
