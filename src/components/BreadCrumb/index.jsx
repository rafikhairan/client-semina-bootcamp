/* eslint-disable react/prop-types */
import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SBreadCrumb(props) {
	const { textSecond, textThird, urlSecond } = props;
	const navigate = useNavigate();

	return (
		<Breadcrumb className="my-3">
			<Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
			{!textThird && <Breadcrumb.Item active>{textSecond}</Breadcrumb.Item>}
			{textThird && (
				<>
					<Breadcrumb.Item onClick={() => navigate(urlSecond)}>{textSecond}</Breadcrumb.Item>
					<Breadcrumb.Item active>{textThird}</Breadcrumb.Item>
				</>
			)}
		</Breadcrumb>
	);
}
