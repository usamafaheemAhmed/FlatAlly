import { notification } from 'antd';
import axios from "axios";



let GetAxios = async (Api, head) => {
    console.log("Get api Chali")
    let Header = head || {};

    try {
        const response = await axios.get(Api, Header);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error.message); // Log error message
        console.error("Response:", error.response); // Log response error details if available
        throw error; // Rethrow the error to be caught in the calling function
    }
}

const PostAxios = async (Api, data, head) => {
    console.log("Post Chala ");
    let Header = head || {};
    try {
        const response = await axios.post(Api, data, Header);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error.message); // Log error message
        console.error("Response:", error.response); // Log response error details if available
        throw error; // Rethrow the error to be caught in the calling function
    }
};

let PutAxios = async (Api, data, head) => {
    console.log("Put api Chali")
    let Header = head || {};
    try {
        const response = await axios.put(Api, data, Header);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error.message); // Log error message
        console.error("Response:", error.response); // Log response error details if available
        throw error; // Rethrow the error to be caught in the calling function
    }
}

let PatchAxios = async (Api, data, head) => {
    console.log("Patch api Chali")
    let Header = head || {};
    try {
        const response = await axios.patch(Api, data, Header);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error.message); // Log error message
        console.error("Response:", error.response); // Log response error details if available
        throw error; // Rethrow the error to be caught in the calling function
    }
}

let DeleteAxios = async (Api) => {
    console.log("Delete api Chali")
    try {
        const response = await axios.delete(Api);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error.message); // Log error message
        console.error("Response:", error.response); // Log response error details if available
        throw error; // Rethrow the error to be caught in the calling function
    }
}


const openNotificationSuccess = (type, placement, message, description) => {
    notification[type]({
        message: <span style={{ fontWeight: '600', padding: "1.5px 0px 0px 15px" }}>{message}</span>,
        description: description,
        placement,
        duration: 3,
        style: {
            padding: '10px',
            lineHeight: '1.5',
            alignItems: 'center'
        },
    });
};

export {
    openNotificationSuccess,
    GetAxios,
    PostAxios,
    PutAxios,
    PatchAxios,
    DeleteAxios,
};