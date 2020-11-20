/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

interface CourseTextBox {
  id: string, 
  abbreviation: string, 
  course_number: string
}

interface ListTextBox {
  name: string
}

interface CourseTextField {
  label: string, 
  list: CourseTextBox[],
  handleCreate: (courseid: any) => void,
  handleCancel: () => void
}

export class AutocompleteCoursesTextField extends React.Component<CourseTextField> {
  state = {
    id: ""
  }

  render() {
    return (
      <div style={{width: "fit-content", height: "fit-content", marginLeft: "auto", marginRight: "auto", alignContent: "center"}}>
        <Autocomplete
          style={{width: "250px", display: "inline-block"}}
          options={this.props.list}
          getOptionLabel={(option) => `${option.abbreviation} ${option.course_number}`}
          id="select-on-focus"
          selectOnFocus
          onChange = {this.handleText}
          renderInput={(params) => <TextField {...params} label={this.props.label} margin="normal" />}
        />
        <Button style={{marginLeft: "30px", verticalAlign: "bottom", marginBottom: "15px"}} variant="contained" size="large" color="primary" onClick={this.handleCreate} >Add</Button>
        <IconButton style={{marginLeft: "10px", verticalAlign: "bottom", marginBottom: "10px"}} aria-label="delete" onClick={this.props.handleCancel}>
          <DeleteIcon />
        </IconButton>
      </div>
    )
  }

  handleText = (event: any, newValue: CourseTextBox | null) => {
    this.setState({...this.state, id:newValue?.id})
  }

  handleCreate = () => {
    this.props.handleCreate(this.state.id)
    // value 를 null 변환해야함
  }
}

export function AutocompleteCoursesTextBox(props: {label: string, list: CourseTextBox[]}) {
  const { label, list } = props
  return (
    <Autocomplete
      style={{ width: 300, display: "inline-block"}}
      options={list}
      autoHighlight
      getOptionLabel={(option) => `${option.abbreviation} ${option.course_number}`}
      renderOption={(option) => (
        <React.Fragment>
          {option.abbreviation} {option.course_number}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password" // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}


export function AutocompleteListTextBox(props: {label: string, list: ListTextBox[]}) {
  const { label, list } = props
  return (
    <Autocomplete
      style={{ width: 350, display: "inline-block"}}
      options={list}
      autoHighlight
      getOptionLabel={(option) => `${option.name}`}
      renderOption={(option) => (
        <React.Fragment>
          {option.name}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password" // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js

