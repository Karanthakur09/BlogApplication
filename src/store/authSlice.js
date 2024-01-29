import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}
const authSlice = createSlice(
    {
        name: "auth",
        initialState,
        reducers: {
            login: (state, action) => {
                state.status = true,
                state.userData = action.payload.userData //all internal handling of state would be done by redux toolkit
            },
            logout: (state, action) => {
                state.status=false,
                state.userData=null
            }
        }
    }
)
//we need to export methods also because other components can use it to change it

export const {login,logout} =authSlice.actions;
export default authSlice.reducer;