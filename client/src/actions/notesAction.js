import axios from "axios";

export const startGetNotes = () => {
  return (dispatch) => {
    axios
      .get("api/notes", {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        const notes = response.data;
        dispatch(getNotes(notes));
      });
  };
};

export const getNotes = (notes) => {
  return { type: "GET_NOTES", payload: notes };
};

export const startRemoveNotes = (id) => {
  return (dispatch) => {
    axios
      .delete(`api/notes/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log(response.data);
        const department = response.data;
        console.log(department);
        dispatch(removeNotes(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const removeNotes = (id) => {
  return { type: "REMOVE_NOTES", payload: id };
};

export const startNotesEdit = (formData, id) => {
  return (dispatch) => {
    axios
      .put(`api/notes/${id}`, formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(editNotes(formData, id));
      });
  };
};

export const editNotes = (data, id) => {
  return {
    type: "EDIT_NOTES",
    payload: {
      id,
      data,
    },
  };
};

export const startAddNotes = (formData) => {
  return (dispatch) => {
    axios
      .post("api/notes", formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(addNotes(formData));
      });
  };
};

export const addNotes = (notes) => {
  return { type: "ADD_NOTES", payload: notes };
};
