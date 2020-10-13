import axios from "axios";
import swal from "sweetalert";
import _manifest from "../_manifest";




axios.defaults.baseURL = _manifest.apiBaseUrl;
axios.defaults.headers.post["Content-Type"] = "application/json";






export function Alert(title, msg, type, time = 5000) {
    swal({
        title: title,
        text: msg,
        icon: type,
        buttons: false,
        timer: time
    });
}


export async function FIND_PROPERTY(s, page, size) {
    try {
        let param = `api/v1/property/search-property?s=${s}`;
        if (page) {
            param = param + `&page=${page}`
        }

        if (size) {
            param = param + `&size=${size}`

        }
        let result = await axios.get(param);
        return result.data.response;
    } catch (error) {
        if (error.response) {
            // that falls out of the range of 2xx
            console.log("Request Error:", error.response);
            Alert("Oops!", error.response.data.message, "error");
        }
        console.log("Error", error);
    }
}
export async function GET_PROPERTY(id) {
    try {
        let param = `api/v1/property/get-property?id=${id}`;
        let result = await axios.get(param);
        return result.data.response;
    } catch (error) {
        if (error.response) {
            // that falls out of the range of 2xx
            console.log("Request Error:", error.response);
            Alert("Oops!", error.response.data.message, "error");
        }
        console.log("Error", error);
    }
}
export async function SAVE_PROPERTY(obj) {
    try {
        
        let result = await axios.post("api/v1/property/create-property", obj);
        console.log('result:', result)
        Alert("Success", result.data.message, "success");
        return result.data.response;
    } catch (error) {
        if (error.response) {
            // that falls out of the range of 2xx
            console.log("Request Error:", error.response);
            Alert("Oops!", error.response.data.message, "error");
        }
        console.log("Error", error);
    }
}