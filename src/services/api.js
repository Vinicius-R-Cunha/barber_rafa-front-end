import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACK_URL;

// function createConfig(token) {
//     return {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     };
// }

async function getCategories() {
    const categories = await axios.get(`${BASE_URL}/categories`);
    return categories.data;
}

export { getCategories };
