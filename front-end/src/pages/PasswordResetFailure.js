import { useHistory } from "react-router-dom"

export const PasswordResetFailure = () => {
    const history = useHistory()

    return (
        <div className="content-container">
            <h1>uh...ohhhh!</h1>
            <p>
                Something went wrong while trying to reset your password :(
            </p>
            <button onClick={() => history.push('/login')}>back to login page</button>
        </div>
    )
}
