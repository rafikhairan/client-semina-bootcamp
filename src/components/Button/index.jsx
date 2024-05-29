/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";

export default function SButton(props) {
	const { children, action, variant, size, loading, disabled, className } = props;

	return (
		<Button className={className} onClick={action} variant={variant} disabled={disabled} size={size}>
			{loading ? "Loading..." : children}
		</Button>
	);
}
