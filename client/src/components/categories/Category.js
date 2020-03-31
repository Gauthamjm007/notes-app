import React from "react";
import { connect } from "react-redux";
import { startRemoveCategory } from "./../../actions/categoryAction";
import CategoryForm from "./CategoryForm";
function Category(props) {
  const [dataId, SetDataId] = React.useState("");
  const [status, SetStatus] = React.useState("add");
  const [category, SetCategory] = React.useState("");
  const handleEdit = (id, name) => {
    console.log(id, name);
    status === "add" ? SetStatus("edit") : SetStatus("add");
    status === "edit" ? SetStatus("add") : SetStatus("edit");
    SetCategory(name);
    SetDataId(id);
    console.log(dataId, status);
  };

  const handleRemove = (id) => {
    props.dispatch(startRemoveCategory(id));
  };
  return (
    <div align="center">
      <div>
        <h1>Category</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {props.category !== undefined &&
              props.category.map((ele) => {
                return (
                  <tr key={ele._id + ele.name}>
                    <td>{ele.name}</td>
                    <td>
                      <button onClick={() => handleEdit(ele._id, ele.name)}>
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
      <CategoryForm category={category} id={dataId} status={status} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    category: state.category
  };
};
export default connect(mapStateToProps)(Category);
