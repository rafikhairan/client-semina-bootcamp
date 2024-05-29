/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Form } from "react-bootstrap";
import TextInput from "../TextInput";

export default function TextInputWithLabel(props) {
	const { label, name, value, type, onChange, placeholder } = props;

	return (
		<Form.Group className="mb-3">
			<Form.Label>{label}</Form.Label>
			<TextInput type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
		</Form.Group>
	);
}
