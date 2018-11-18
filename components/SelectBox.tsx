import * as React from "react";
import styles from "./../styles";
import { AbstractControl } from "react-reactive-form";

const SelectBox = ({ handler }: AbstractControl) => (
  <div>
    <label>Nationality:</label>
    <select style={styles.input} {...handler()}>
      <option value="" disabled>
        Select
      </option>
      <option value="us">US</option>
      <option value="uk">UK</option>
      <option value="india">India</option>
      <option value="china">China</option>
    </select>
  </div>
);
export default SelectBox;
