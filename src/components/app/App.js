import { Provider } from "../context";
import { AppUI } from "./AppUi";
function App() {
    return (
        <Provider>
            <AppUI />
        </Provider>
    );
}

export default App;
