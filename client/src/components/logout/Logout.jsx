import { useEffect } from "react";
import { Navigate } from "react-router";
import { useLogout } from "../../api/authApi";
import { toast } from "react-toastify";


export default function Logout() {
    const { isLoggedOut } = useLogout();

    useEffect(() => {
        if (isLoggedOut && !toast.isActive("logout-toast")) {
            toast.success("You have successfully logged out!", { toastId: "logout-toast" });
        }
    }, [isLoggedOut]);

    return isLoggedOut ? <Navigate to="/" /> : null;
}
