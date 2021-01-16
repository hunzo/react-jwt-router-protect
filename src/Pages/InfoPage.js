import React from "react"
import { Logout } from "../Services/FakeService"

export default function Info(props) {
    return (
        <div>
            <h1>Info</h1>
            <button
                onClick={() => {
                    Logout()
                    props.history.push("/login")
                }}
            >
                Logout
            </button>
        </div>
    )
}
