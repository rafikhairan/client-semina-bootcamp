/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "react-bootstrap";

export default function TextInput(props) {
	const { name, value, type, onChange, placeholder } = props;

	return <Form.Control type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />;
}
