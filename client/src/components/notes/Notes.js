import React from "react";
import { connect } from "react-redux";
import NotesForm from "./NotesForm";
import { startRemoveNotes } from "./../../actions/notesAction";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { startGetCategory } from "../../actions/categoryAction";
import MainAppBar from "../AppBar";
const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    marginTop: 15,
    maxHeight: 375,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Notes(props) {
  const classes = useStyles();
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

  const handleBluring = (id) => {
    props.dispatch(startGetCategory());
  };

  return (
    <>
      <MainAppBar />
      <div align="center" style={{ marginTop: "100px" }}>
        <Grid container component="main">
          <Grid item xs={12} sm={3}>
            <Grid container justify="center">
              <NotesForm
                id={dataId}
                title={title}
                body={body}
                category={category}
                status={status}
                handleBluring={handleBluring}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Divider orientation="vertical" />
          </Grid>

          <Grid item xs={12} sm={5}>
            <div>
              {props.notes !== undefined &&
                props.notes.map((ele, i) => {
                  return (
                    <Card
                      className={classes.root}
                      variant="outlined"
                      style={{
                        background: i % 2 === 0 ? "#EC7063" : "#A569BD",
                      }}
                    >
                      <h3 style={{ color: "white" }}>{ele.title}</h3>
                      <CardContent>
                        <Typography
                          variant="body2"
                          component="p"
                          style={{ color: "white" }}
                        >
                          {ele.body}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          onClick={() => handleRemove(ele._id)}
                          variant="outlined"
                          color="primary"
                        >
                          Remove
                        </Button>
                        <Button
                          size="small"
                          variant="outlined"
                          color="primary"
                          onClick={() =>
                            handleEdit(
                              ele._id,
                              ele.title,
                              ele.body,
                              ele.category
                            )
                          }
                        >
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  );
                })}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};
export default connect(mapStateToProps)(Notes);
