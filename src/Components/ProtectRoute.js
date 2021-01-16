import { Route, Redirect } from "react-router-dom"
import { IsLogin } from "../Services/FakeService"

export const ProtectRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (IsLogin()) {
                    return <Component {...props} />
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    )
                }
            }}
        />
    )
}

export const LoginRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (IsLogin()) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/info",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    )
                } else {
                    return <Component {...props} />
                }
            }}
        />
    )
}
