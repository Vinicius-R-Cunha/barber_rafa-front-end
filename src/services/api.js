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
    const promise = await axios.post(
      `${BASE_URL}/token/validation`,
      {},
      config
    );
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function signUp(formData) {
  try {
    const promise = await axios.post(`${BASE_URL}/sign-up`, formData);
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function signIn(formData) {
  try {
    const promise = await axios.post(`${BASE_URL}/sign-in`, formData);
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function facebookOAuth(formData) {
  try {
    const promise = await axios.post(`${BASE_URL}/oAuth/facebook`, formData);
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function googleOAuth(formData) {
  try {
    const promise = await axios.post(`${BASE_URL}/oAuth/google`, formData);
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function updateUser(token, data, type) {
  try {
    const config = createConfig(token);
    const promise = await axios.put(
      `${BASE_URL}/update-user?type=${type}`,
      data,
      config
    );
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function getCategories() {
  try {
    const promise = await axios.get(`${BASE_URL}/categories`);
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function createCategory(token, data) {
  try {
    const config = createConfig(token);
    const promise = await axios.post(`${BASE_URL}/categories`, data, config);
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function deleteCategory(token, categoryId) {
  try {
    const config = createConfig(token);
    const promise = await axios.delete(
      `${BASE_URL}/categories/${categoryId}`,
      config
    );
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function editCategory(token, categoryId, data) {
  try {
    const config = createConfig(token);
    const promise = await axios.put(
      `${BASE_URL}/categories/${categoryId}`,
      data,
      config
    );
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function createService(token, categoryId, data) {
  try {
    const config = createConfig(token);
    const promise = await axios.post(
      `${BASE_URL}/services/${categoryId}`,
      data,
      config
    );
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function deleteService(token, categoryId, serviceId) {
  try {
    const config = createConfig(token);
    const promise = await axios.delete(
      `${BASE_URL}/services/${categoryId}/${serviceId}`,
      config
    );
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function editService(token, categoryId, serviceId, data) {
  try {
    const config = createConfig(token);
    const promise = await axios.put(
      `${BASE_URL}/services/${categoryId}/${serviceId}`,
      data,
      config
    );
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function checkAvailability(token, data) {
  try {
    const config = createConfig(token);
    const promise = await axios.post(
      `${BASE_URL}/calendar/check-availability`,
      data,
      config
    );
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function createCalendarEvent(token, data) {
  try {
    const config = createConfig(token);
    const promise = await axios.post(
      `${BASE_URL}/calendar/create-event`,
      data,
      config
    );
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function getReservations(token) {
  try {
    const config = createConfig(token);
    const promise = await axios.get(`${BASE_URL}/reservations`, config);
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function deleteReservation(token, eventId) {
  try {
    const config = createConfig(token);
    const promise = await axios.delete(
      `${BASE_URL}/calendar/${eventId}`,
      config
    );
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function validateHash(hash) {
  try {
    const promise = await axios.post(`${BASE_URL}/hash-validation/${hash}`, {});
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function sendRecuperationEmail(email) {
  try {
    const promise = await axios.post(
      `${BASE_URL}/generate-reset-url/${email}`,
      {}
    );
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function resetPassword(hash, data) {
  try {
    const promise = await axios.post(
      `${BASE_URL}/reset-password/${hash}`,
      data
    );
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function getSchedules() {
  try {
    const promise = await axios.get(`${BASE_URL}/schedules`);
    return promise;
  } catch (error) {
    return error.response;
  }
}

async function editSchedule(token, weekId, data) {
  try {
    const config = createConfig(token);
    const promise = await axios.post(
      `${BASE_URL}/schedule/${weekId}`,
      data,
      config
    );
    return promise;
  } catch (error) {
    return error.response;
  }
}

export {
  validateToken,
  signUp,
  signIn,
  facebookOAuth,
  googleOAuth,
  updateUser,
  getCategories,
  createCategory,
  deleteCategory,
  editCategory,
  createService,
  deleteService,
  editService,
  checkAvailability,
  createCalendarEvent,
  getReservations,
  deleteReservation,
  validateHash,
  sendRecuperationEmail,
  resetPassword,
  getSchedules,
  editSchedule,
};
