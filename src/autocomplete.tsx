/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function CourseSelect() {
  return (
    <Autocomplete
      id="course-autocomplete"
      style={{ width: 300 }}
      options={courses as CourseType[]}
      autoHighlight
      getOptionLabel={(option) => option.abbreviation}
      renderOption={(option) => (
        <React.Fragment>
          {option.abbreviation} {option.course_number}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select a course"
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

interface CourseType {
  id: number;
  abbreviation: string;
  course_number: string;
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const courses = [
  { id: 1, abbreviation: "A,RESEC", course_number: "201" },
  { id: 2, abbreviation: "A,RESEC", course_number: "202" },
  { id: 3, abbreviation: "A,RESEC", course_number: "210" },
  { id: 4, abbreviation: "A,RESEC", course_number: "211" },
  { id: 5, abbreviation: "A,RESEC", course_number: "212" },
  { id: 6, abbreviation: "A,RESEC", course_number: "213" },
  { id: 7, abbreviation: "A,RESEC", course_number: "214" },
  { id: 8, abbreviation: "A,RESEC", course_number: "219A" },
  { id: 9, abbreviation: "A,RESEC", course_number: "219B" }
];
