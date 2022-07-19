import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from "./redux/store";
import ConnectedApp from "./app";

const ReduxApp = () => {
    return (
        <Provider store={store}>
            <ConnectedApp />
        </Provider>
    )
};

const App = () => {
    return <div>Hello</div>
};

ReactDOM.render(<ReduxApp />, document.getElementById('root'));