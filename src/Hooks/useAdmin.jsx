import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const useAdmin = () =>{
    const {user} = useContext(AuthContext)
    // const token = localStorage.getItem("access-token")
    const [axiosSecure] = useAxiosSecure()
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey : ["isAdmin", user?.email],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log("is admin response", res);
            return res.data.admin
        }
    })

    // const {data : isAdmin, isLoading : isAdminLoading} = useQuery({
    //     queryKey : ["isAdmin", user?.email],
    //     queryFn : async () =>{
    //         const res = await fetch(`http://localhost:5000//users/admin/${user?.email}`,{
    //             headers : {
    //                 authorization : `bearer ${token}`
    //             }
    //         })
    //         return res.json()
    //     }
    // })

    return [isAdmin, isAdminLoading]
}

export default useAdmin