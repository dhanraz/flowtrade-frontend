import { UnknownAction, configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: function (state: any, action: UnknownAction) {
    throw new Error("Function not implemented.");
  }
});
