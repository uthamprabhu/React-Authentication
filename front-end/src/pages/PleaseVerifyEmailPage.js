import { useEffect } from "react"
import { useHistory } from "react-router-dom"

export const PleaseVerifyEmailPage = () => {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            history.push('/')
        }, 3000)
    }, [history])

    return(
        <div className="content-container">
            <h1>Thanks for Signing Up!</h1>
            <p>
                A verification mail has been send to your email address.
            </p>
            <p>
                To unlcok full site features please <b>Verify Email</b>
            </p>
        </div>
    )
}