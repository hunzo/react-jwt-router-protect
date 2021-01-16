import jwt from "jsonwebtoken"

export const Login = (payload) => {
    localStorage.setItem(
        "token",
        jwt.sign(payload, "secret", { expiresIn: 60 * 1 })
    )
    // sessionStorage.setItem('token', jwt.sign(payload, 'secret', { expiresIn: 60 * 1}))
}

export const Logout = () => {
    localStorage.clear()
    // sessionStorage.clear()
}

export const IsLogin = () => {
    const token = localStorage.getItem("token")
    if (token) {
        return true
    } else {
        return false
    }
}
