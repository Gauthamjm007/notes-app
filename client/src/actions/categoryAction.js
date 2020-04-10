import axios from "axios";

export const startGetCategory = () => {
  return (dispatch) => {
    axios
      .get("api/category", {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const category = response.data;
        dispatch(getCategory(category));
      });
  };
};

export const getCategory = (category) => {
  return { type: "GET_CATEGORY", payload: category };
};

export const startRemoveCategory = (id) => {
  return (dispatch) => {
    axios
      .delete(`api/category/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log(response.data);
        const department = response.data;
        if (department.hasOwnProperty("name")) {
          dispatch(removeCategory(id));
        } else {
          alert(
            "failed to delete the record please check your internet connection"
          );
        }
      });
  };
};

export const removeCategory = (id) => {
  return { type: "REMOVE_CATEGORY", payload: id };
};

export const startCategoryEdit = (formData, id) => {
  return (dispatch) => {
    axios
      .put(`api/category/${id}`, formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(editCategory(formData, id));
      });
  };
};

export const editCategory = (formData, id) => {
  return { type: "EDIT_CATEGORY", payload: { id: id, data: formData } };
};

export const startAddCategory = (formData) => {
  return (dispatch) => {
    axios
      .post("api/category", formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(addCategory(formData));
      });
  };
};

export const addCategory = (category) => {
  return { type: "ADD_CATEGORY", payload: category };
};
