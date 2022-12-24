import axios from "axios";

const apiEp = "http://localhost:8000/api/v1/task/";

export const fetchTasks = async () => {
  try {
    // const response = await axios.get(apiEp);
    // console.log(response);
    // return response.data;

    const { data } = await axios.get(apiEp);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
