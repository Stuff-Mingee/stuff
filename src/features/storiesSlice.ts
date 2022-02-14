import { useDispatch } from "react-redux";
import { IStory } from "./../models/models";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";
import moment from "moment";

interface IStoriesState {
  stories: IStory[];
  status: string;
  sections: string[];
  selectedSection: string;
  filteredStories: IStory[];
  sortBy: string;
}

const initialState: IStoriesState = {
  stories: [],
  status: "",
  sections: [],
  selectedSection: "All",
  filteredStories: [],
  sortBy: "Asc",
};

export const fetchStories = createAsyncThunk(
  "/stories/fetchStories",
  async () => {
    // Commented due to CORS, can be enabled by PROXY or Browser Extentions

    // const response = await fetch(
    //   `https://www.stuff.co.nz/static/spade/nCuL9ZmbMXzhGbHTJNJYU6i45y9hj0DJrhPteuU6MGB68zM5goWqk5Q1aNkh.json`
    // );
    // return (await response.json()) as IStoriesState;

    return data as IStoriesState;
  }
);

export const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    filterBySection: (state, action) => {
      let filteredData: IStory[] = state.stories;

      state.selectedSection = action.payload;

      if (state.selectedSection && state.selectedSection !== "All") {
        filteredData = state.stories.filter((item) => {
          if (item.story.section === state.selectedSection) {
            return item;
          }
        });
      }

      state.filteredStories = filteredData;
    },
    sortByDateTime: (state) => {
      const sortedStories = state.filteredStories.sort(function (a, b) {
        const keyA = new Date(
            moment(a.publishedDate, "hh:mm DD MM YYYY").toDate()
          ),
          keyB = new Date(moment(b.publishedDate, "hh:mm DD MM YYYY").toDate());

        if (state.sortBy === "Asc") {
          return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
        } else {
          return keyA < keyB ? 1 : keyA > keyB ? -1 : 0;
        }
      });

      state.sortBy === "Asc" ? (state.sortBy = "Dec") : (state.sortBy = "Asc");

      state.filteredStories = sortedStories;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchStories.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchStories.fulfilled, (state, action) => {
        state.status = "success";
        state.stories = action.payload.stories;
        state.filteredStories = action.payload.stories;

        state.sections = Array.from(
          new Set(state.stories.map((item: IStory) => item.story.section))
        );
      })
      .addCase(fetchStories.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { filterBySection, sortByDateTime } = storiesSlice.actions;

export default storiesSlice.reducer;
