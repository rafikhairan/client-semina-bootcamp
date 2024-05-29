/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Alert } from "react-bootstrap";

export default function SAlert(props) {
	const { message, type } = props;

	return <Alert variant={type}>{message}</Alert>;
}
