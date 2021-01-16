import "./App.css"
import { BrowserRouter, Switch } from "react-router-dom"
import Login from "./Pages/LoginPage"
import Info from "./Pages/InfoPage"

import { ProtectRoute, LoginRoute } from "./Components/ProtectRoute"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <ProtectRoute exact path="/info" component={Info} />
                    <LoginRoute path="/login" component={Login} />
                    <ProtectRoute path="*" component={Info} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
