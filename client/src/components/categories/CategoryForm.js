import React from "react";
import { Formik } from "formik";
import {
  startAddCategory,
  startCategoryEdit
} from "../../actions/categoryAction";
import { connect } from "react-redux";

function CategoryForm(props) {
  return (
    <div>
      <h1>{props.status.toUpperCase()}</h1>
      <Formik
        enableReinitialize={true}
        initialValues={{ name: props.category }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            if (props.status === "add") {
              props.dispatch(startAddCategory(values));
            } else {
              props.dispatch(startCategoryEdit(values, props.id));
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
              name="name"
              placeholder="name"
              onChange={handleChange}
              value={values.name}
            />

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default connect()(CategoryForm);
