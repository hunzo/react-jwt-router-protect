import React, { useState } from "react"
import { Login } from "../Services/FakeService"

export default function LoginPage(props) {
    const init = { username: "", password: "" }
    const [auth, setAuth] = useState(init)

    const Auth = () => {
        Login(auth)
        props.history.push("/info")
    }

    return (
        <div>
            <h1>Login</h1>
            {JSON.stringify(auth)}
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    Auth()
                }}
            >
                <input
                    placeholder="username"
                    onChange={(e) => {
                        setAuth({
                            ...auth,
                            username: e.target.value,
                        })
                    }}
                />

                <input
                    placeholder="password"
                    type="text"
                    onChange={(e) => {
                        setAuth({
                            ...auth,
                            password: e.target.value,
                        })
                    }}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
