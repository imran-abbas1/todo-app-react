import { ADD_TODO } from "./actions";
import { takeEvery } from "@redux-saga/core/effects";

export function* addTodo() {
    yield takeEvery(ADD_TODO, function* () {
        //we can perform async operations here
        // no need of async call for now
    });
}

export default function* () {
    yield* addTodo();
}