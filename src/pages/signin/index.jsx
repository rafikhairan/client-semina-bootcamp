import { useState } from "react";
import { Container, Card } from "react-bootstrap";
import SAlert from "../../components/Alert";
import SForm from "./form";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions";

function PageSignin() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const [alert, setAlert] = useState({
		status: false,
		message: "",
		type: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const handleChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};
	const handleSubmit = async () => {
		setIsLoading(true);
		try {
			const res = await postData("/cms/auth/signin", form);

			dispatch(userLogin(res.data.data.token, res.data.data.role));
			setIsLoading(false);
			navigate("/");
		} catch (error) {
			setIsLoading(false);
			setAlert({
				status: true,
				message: error?.response?.data?.msg ?? "Internal server error",
				type: "danger",
			});
		}
	};

	return (
		<Container className="my-5">
			{alert.status && (
				<div className="m-auto" style={{ width: "50%" }}>
					<SAlert message={alert.message} type={alert.type} />
				</div>
			)}
			<Card style={{ width: "50%" }} className="m-auto mt-5">
				<Card.Body>
					<Card.Title className="text-center">Form Login</Card.Title>
					<SForm form={form} handleChange={handleChange} isLoading={isLoading} handleSubmit={handleSubmit} />
				</Card.Body>
			</Card>
		</Container>
	);
}

export default PageSignin;
