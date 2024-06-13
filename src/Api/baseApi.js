import axios from "axios"

export const Login = async (data) => {
    const url = 'https://dummyjson.com/auth/login';
    const res = await axios.post(url, data);
    // console.log('res :',res);
    return res;
}

export const getProductList = async () => {
    const url = 'https://fakestoreapi.com/products';
    const res = await axios.get(url);
    // const data = await res.json();
    // console.log('res :',res);
    return res;
}

export const getProductListId = async (id) => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const res = await axios.get(url);
    // const data = await res.json();
    // console.log('res :',res);
    return res;
}

export const getCategoryList = async (id) => {
    const url = `https://fakestoreapi.com/products/categories/${id}`;
    const res = await axios.get(url);
    // const data = await res.json();
    // console.log('res :',res);
    return res;
}
