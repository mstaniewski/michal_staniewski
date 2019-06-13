import React from "react";
import { withRouter } from "react-router-dom";
import withReducer from "hocs/withReducer";
import { useAsync } from "hooks";
import { createCharacter } from "actions/characters";
import { requestSpecies } from "actions/species";

import { TextField, Select, Radio } from "components/Inputs";
import Button from "components/Button";

import serialize from "utils/serialize";
import compose from "utils/compose";

const AddView = ({ requestSpecies, createCharacter, species, history }) => {
  useAsync(requestSpecies, {}, []);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;

    createCharacter(serialize(form.elements));
    history.push("/");
  };

  return (
    <>
      <h1>Add View</h1>

      <form onSubmit={onSubmit}>
        <TextField isRequired name="name" label="Name" />
        <Select isRequired label="Species" name="species" options={species} />
        <Radio
          isRequired
          name="gender"
          label="Gender"
          options={["male", "female", "n/a"]}
        />
        <TextField name="homeworld" label="Homeworld" />
        <div className="form-group">
          <Button type="submit" label="Add character" />
        </div>
      </form>
    </>
  );
};

const mapStateToProps = state => ({
  species: state.items
});

export default compose(
  withReducer("species", mapStateToProps, {
    createCharacter,
    requestSpecies
  }),
  withRouter
)(AddView);
