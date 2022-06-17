import { useAuthContext } from "../../Context/AuthContext"

const UserInfo = () => {
    const {auth, logout} = useAuthContext()

    return (
        <div className="container d-flex justify-content-between py-2">
            <p>{auth.userId}</p>
            
        </div>
    )
}

export default UserInfo