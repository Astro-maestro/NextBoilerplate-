export const endpoints = {
    auth: {
        login: "/user/signin",
        register: "/user/signup",
        profileDetails: "/user/profile-details",
    },
    
    product: {
        getProduct: "/product/detail",
        deleteProduct: "/product/remove",
        getAllProducts: "/product/list",
        updateProduct: "/product/update",
        addProduct: "/product/create"
    },
};
