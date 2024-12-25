import { CreateProductRequest } from "@/typeScript/product.interface";
import { MutationFunction } from "@tanstack/react-query";
import axiosInstance from "../axios/axios";
import { endpoints } from "../endPoints/endPoints";

export const addStudentData:MutationFunction<CreateProductRequest> = async (payload) => {
    const res = await axiosInstance.post<CreateProductRequest>(endpoints.product.addProduct, payload);
    return res.data;
}