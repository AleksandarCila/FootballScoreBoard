import { Provider } from "react-redux";
import { store } from "./store/Store";

import { Board } from "./Components";

function App() {
  return (
    <Provider store={store}>
      <Board />
    </Provider>
  );
}

export default App;
