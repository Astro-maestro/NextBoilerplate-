import { MutationFunction } from "@tanstack/react-query"
import axiosInstance from "../axios/axios"
import { endpoints } from "../endPoints/endPoints"
import { RegisterRequest } from "@/typeScript/auth.interface"


export const registerFn: MutationFunction<RegisterRequest> = async (payload) => {
    const res = await axiosInstance.post<RegisterRequest>(endpoints.auth.register, payload)
    console.log(res, "registerResponse")
    return res.data
}