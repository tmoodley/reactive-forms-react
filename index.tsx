import * as React from "react";
import { render } from "react-dom";
import {
  FormBuilder,
  FieldControl,
  FieldGroup,
  AbstractControl
} from "react-reactive-form";
import Values from "./Values";
import styles from "./styles";
import {
  TextInput,
  Checkbox,
  GenderRadio,
  SelectBox,
  TextArea
} from "./components";

class SimpleForm extends React.Component {
  // Create a group of form controls with default values.
  myForm = FormBuilder.group({
    first_name: "",
    last_name: "",
    gender: "male",
    nationality: "",
    terms: false,
    notes: ""
  });
  handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    alert(`You submitted \n ${JSON.stringify(this.myForm.value, null, 2)}`);
  }
  handleReset() {
    this.myForm.reset();
  }
  render() {
    return (
      <div style={styles.main}>
        <h2>Simple Form</h2>
        <FieldGroup
          control={this.myForm}
          render={({ pristine, value }: AbstractControl) => (
            <form onSubmit={() => this.handleSubmit}>
              <FieldControl
                name="first_name"
                render={TextInput}
                // Use meta to add some extra props
                meta={{
                  label: "First Name",
                  placeholder: "Enter first name"
                }}
              />

              <FieldControl
                name="last_name"
                meta={{
                  label: "Last Name",
                  placeholder: "Enter last name"
                }}
                render={TextInput}
              />

              <FieldControl name="gender" render={GenderRadio} />

              <FieldControl name="nationality" render={SelectBox} />

              <FieldControl name="notes" render={TextArea} />

              <FieldControl name="terms" render={Checkbox} />

              <div>
                <button
                  disabled={pristine}
                  style={styles.button}
                  onClick={e => this.handleSubmit(e)}
                >
                  Submit
                </button>
                <button
                  type="button"
                  style={styles.button}
                  onClick={() => this.handleReset()}
                >
                  Reset
                </button>
              </div>
              <Values value={value} />
            </form>
          )}
        />
      </div>
    );
  }
}

render(<SimpleForm />, document.getElementById("root"));
