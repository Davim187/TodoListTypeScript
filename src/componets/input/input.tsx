import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Style from "./input.module.css";

interface Props {
  typeInput: string;
  name: string;
  placeholder: string;
  value: string | number  ;
  nameLabel: string;
  for:string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = (props: Props) => {
  return (
    <div className={Style.input_container}>
      <label htmlFor={props.for}>{props.nameLabel}</label>
      <input
        type={props.typeInput}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Input;
