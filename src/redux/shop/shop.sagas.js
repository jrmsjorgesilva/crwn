import { takeEvery } from "redux-saga/effects";
import shopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("I'm fired");
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
