import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACK_URL;

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

async function validateToken(token) {
    try {
        const config = createConfig(token);
        const isAdmin = await axios.post(
            `${BASE_URL}/token/validation`,
            {},
            config
        );
        return isAdmin.data;
    } catch (error) {
        console.log(error.response);
    }
}

async function signUp(formData) {
    try {
        await axios.post(`${BASE_URL}/sign-up`, formData);
        return true;
    } catch (error) {
        console.log(error.response);
    }
}

async function signIn(formData) {
    try {
        const promise = await axios.post(`${BASE_URL}/sign-in`, formData);
        return promise.data;
    } catch (error) {
        console.log(error.response);
    }
}

async function getCategories() {
    try {
        const categories = await axios.get(`${BASE_URL}/categories`);
        return categories.data;
    } catch (error) {
        console.log(error.response);
    }
}

async function createCategory(token, data) {
    try {
        const config = createConfig(token);
        await axios.post(`${BASE_URL}/categories`, data, config);
        return true;
    } catch (error) {
        console.log(error.response);
    }
}

async function deleteCategory(token, title) {
    try {
        const config = createConfig(token);
        await axios.delete(`${BASE_URL}/categories/${title}`, config);
        return true;
    } catch (error) {
        console.log(error.response);
    }
}

async function editCategory(token, title, data) {
    try {
        const config = createConfig(token);
        await axios.put(`${BASE_URL}/categories/${title}`, data, config);
        return true;
    } catch (error) {
        console.log(error.response);
    }
}

async function createService(token, categoryTitle, data) {
    try {
        const config = createConfig(token);
        await axios.post(`${BASE_URL}/services/${categoryTitle}`, data, config);
        return true;
    } catch (error) {
        console.log(error.response);
    }
}

async function deleteService(token, categoryTitle, serviceTitle) {
    try {
        const config = createConfig(token);
        await axios.delete(
            `${BASE_URL}/services/${categoryTitle}/${serviceTitle}`,
            config
        );
        return true;
    } catch (error) {
        console.log(error.response);
    }
}

async function editService(token, categoryTitle, serviceTitle, data) {
    try {
        const config = createConfig(token);
        await axios.put(
            `${BASE_URL}/services/${categoryTitle}/${serviceTitle}`,
            data,
            config
        );
        return true;
    } catch (error) {
        console.log(error.response);
    }
}

async function freeBusy(token, data) {
    try {
        const config = createConfig(token);
        const response = await axios.post(
            `${BASE_URL}/calendar/check-availability`,
            data,
            config
        );
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
}

export {
    validateToken,
    signUp,
    signIn,
    getCategories,
    createCategory,
    deleteCategory,
    editCategory,
    createService,
    deleteService,
    editService,
    freeBusy,
};
