const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        vehicle: vehicleSlice.reducer
    }
})

export default store;