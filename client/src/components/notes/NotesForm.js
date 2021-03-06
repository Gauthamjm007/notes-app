import React from "react";
import { Formik } from "formik";
import { startAddNotes, startNotesEdit } from "../../actions/notesAction";
import { connect } from "react-redux";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import EditIcon from "@material-ui/icons/Edit";
function NotesForm(props) {
  return (
    <div>
      <h1>
        {props.status === "add" ? (
          <NoteAddIcon
            style={{ width: "50px", height: "50px" }}
            color="primary"
          />
        ) : (
          <EditIcon
            style={{ width: "50px", height: "50px" }}
            color="secondary"
          />
        )}
      </h1>
      <Formik
        enableReinitialize={true}
        initialValues={{
          title: props.title,
          body: props.body,
          category: props.category,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values));
            if (props.status === "add") {
              props.dispatch(startAddNotes(values));
            } else {
              props.dispatch(startNotesEdit(values, props.id));
            }
          }, 400);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              onChange={handleChange}
              value={values.title}
            />

            <br />

            <textarea
              className="form-control"
              type="text"
              name="body"
              placeholder="body"
              onChange={handleChange}
              value={values.body}
            />
            <br />

            <select
              id="category"
              name="category"
              onFocus={props.handleBluring}
              onChange={handleChange}
              className="form-control"
            >
              {props.status === "add" ? (
                <option value="">SELECTED</option>
              ) : (
                <option selected={props.category}></option>
              )}
              {props.category.map((ele) => {
                return (
                  <option key={ele._id} value={ele._id}>
                    {ele.name}
                  </option>
                );
              })}
            </select>
            <br />
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    category: state.category,
  };
};

export default connect(mapStateToProps)(NotesForm);
