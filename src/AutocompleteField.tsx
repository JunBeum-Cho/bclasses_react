/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

interface CourseField {
  id: string, 
  abbreviation: string, 
  course_number: string
}

interface ListField {
  name: string
}

export function AutocompleteCoursesField(props: {label: string, list: CourseField[]}) {
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


export function AutocompleteListField(props: {label: string, list: ListField[]}) {
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
