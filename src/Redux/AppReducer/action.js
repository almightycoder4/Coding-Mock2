//Write the ActionCreator functions here
import axios from "axios";
import * as types from "./actionType";

const getProduct = (params) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_DATA_REQUEST });

  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/ `,
      params
    )
    .then((res) =>
      dispatch({ type: types.GET_PRODUCT_DATA_SUCCESS, payload: res.data.data })
    )
    .catch((err) =>
      dispatch({ type: types.GET_PRODUCT_DATA_FAILURE, payload: err })
    );
};

export { getProduct };
