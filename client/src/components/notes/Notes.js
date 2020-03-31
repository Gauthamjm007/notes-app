import React from "react";
import { connect } from "react-redux";
import NotesForm from "./NotesForm";
import { startRemoveNotes } from "./../../actions/notesAction";

function Notes(props) {
  const [dataId, SetDataId] = React.useState("");
  const [status, SetStatus] = React.useState("add");
  const [title, SetTitle] = React.useState("");
  const [body, SetBody] = React.useState("");
  const [category, SetCategory] = React.useState("");
  const handleEdit = (id, title, body, category) => {
    status === "add" ? SetStatus("edit") : SetStatus("add");
    status === "edit" ? SetStatus("add") : SetStatus("edit");
    SetTitle(title);
    SetBody(body);
    SetCategory(category);
    SetDataId(id);
    console.log(dataId, status);
  };

  const handleRemove = (id) => {
    props.dispatch(startRemoveNotes(id));
  };

  return (
    <div align="center">
      <div>
        <h1>Notes</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Details</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {props.notes !== undefined &&
              props.notes.map((ele) => {
                return (
                  <tr key={ele._id + ele.title}>
                    <td>{ele.title}</td>
                    <td>{ele.body}</td>
                    <td>
                      <button
                        onClick={() =>
                          handleEdit(ele._id, ele.title, ele.body, ele.category)
                        }
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleRemove(ele._id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <NotesForm
        id={dataId}
        title={title}
        body={body}
        category={category}
        status={status}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};
export default connect(mapStateToProps)(Notes);
