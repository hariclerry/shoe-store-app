import axios from "axios";

export const productService = {
  get
};
function get(apiEndpoint) {
  return axios
    .get(apiEndpoint)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
}