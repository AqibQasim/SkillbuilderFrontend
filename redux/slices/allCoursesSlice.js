const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
      data: [],
      isLoading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchAllCourses.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(fetchAllCourses.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
          })
          .addCase(fetchAllCourses.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
          });
      },
  });
  
  export default coursesSlice.reducer;