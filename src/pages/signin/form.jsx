/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";
import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function SForm(props) {
	const { form, handleChange, handleSubmit, isLoading } = props;

	return (
		<Form>
			<TextInputWithLabel label="Email address" type="email" name="email" value={form.email} placeholder="Enter email" onChange={handleChange} />
			<TextInputWithLabel label="Password" type="password" name="password" value={form.password} placeholder="Password" onChange={handleChange} />
			<SButton variant="primary" action={handleSubmit} loading={isLoading} disabled={isLoading}>
				Submit
			</SButton>
		</Form>
	);
}
