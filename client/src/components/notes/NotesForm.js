import React from "react";
import { Formik } from "formik";
import { startAddNotes, startNotesEdit } from "../../actions/notesAction";
import { connect } from "react-redux";

function NotesForm(props) {
  return (
    <div>
      <h1>{props.status.toUpperCase()}</h1>
      <Formik
        enableReinitialize={true}
        initialValues={{
          title: props.title,
          body: props.body,
          category: props.category
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
          handleSubmit
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="title"
              onChange={handleChange}
              value={values.title}
            />

            <input
              type="text"
              name="body"
              placeholder="body"
              onChange={handleChange}
              value={values.body}
            />
            <select id="category" name="category" onChange={handleChange}>
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
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    category: state.category
  };
};

export default connect(mapStateToProps)(NotesForm);
