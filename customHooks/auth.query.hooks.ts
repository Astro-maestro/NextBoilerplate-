import { LoginRequest, RegisterRequest } from "@/typeScript/auth.interface";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useGlobalHooks } from "./globalHooks/globalHooks";
import { Cookies } from "react-cookie";
import { loginFn } from "@/api/functions/login.api";
import { registerFn } from "@/api/functions/register.api";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export const loginMutation = (): UseMutationResult<LoginRequest, unknown> => {
    const { queryClient } = useGlobalHooks()
    const cookie = new Cookies()
    return useMutation<LoginRequest, void, unknown>({
        mutationFn: loginFn,
        onSuccess: (res) => {
            const { token, status, message } = res || {}
            if (status === 200 && token) {
                cookie.set("token", token, { path: "/", secure: true })
                
            }
            
            toast.success(`${message}`);
            queryClient.invalidateQueries({ queryKey: ["USER"] })
        },
        onError:(error:any, variables, context)=> {
            toast.error(`${error?.response.data.message||error?.message}`);
            queryClient.invalidateQueries({ queryKey: ["USER"] })
        }
    })

}

export const registerMutation = (): UseMutationResult<RegisterRequest, unknown> => {
    const { queryClient } = useGlobalHooks()
    const cookie = new Cookies()
    const router = useRouter();
    return useMutation<RegisterRequest, void, unknown>({
        mutationFn: registerFn,
        onSuccess: (res) => {
            const { token, status, message } = res || {}
            if (status === 200 && token) {
                cookie.set("token", token, { path: "/", secure: true })
                router.push("/auth/login");
                
            }else{
                console.log("first")
            }
            toast.success(`${message}`);
            queryClient.invalidateQueries({ queryKey: ["USER"] })
        },
        onError:(error:any, variables, context)=> {
            toast.error(`${error?.response.data.msg||error?.message}`);
            console.log(error)
            console.log(variables)
            console.log(context)
            queryClient.invalidateQueries({ queryKey: ["USER"] })
        },
    })
}