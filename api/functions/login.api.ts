import { MutationFunction } from "@tanstack/react-query"
import axiosInstance from "../axios/axios"
import { endpoints } from "../endPoints/endPoints"
import {  LoginRequest } from "@/typeScript/auth.interface"


export const loginFn: MutationFunction<LoginRequest> = async (payload) => {
    const res = await axiosInstance.post<LoginRequest>(endpoints.auth.login, payload)
    console.log(res, "loginResponse")
    return res.data
}