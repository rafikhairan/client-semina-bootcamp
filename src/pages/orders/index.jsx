import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../../components/Breadcrumb";
import Table from "../../components/TableWithAction";
import SearchInput from "../../components/SearchInput";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders, setPage, setDate, setTitle } from "../../redux/orders/actions";
import { fetchListEvents } from "../../redux/lists/actions";
import DateRange from "../../components/InputDate";
import { formatDate } from "../../utils/formatDate";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function OrderPage() {
	const dispatch = useDispatch();

	const orders = useSelector((state) => state.orders);

	let [isShowed, setIsShowed] = useState(false);

	useEffect(() => {
		dispatch(fetchOrders());
	}, [dispatch, orders?.page, orders?.date, orders?.title]);

	useEffect(() => {
		dispatch(fetchListEvents());
	}, [dispatch]);

	const displayDate = `${orders.date?.startDate ? formatDate(orders.date?.startDate) : ""}${orders.date?.endDate ? " - " + formatDate(orders.date.endDate) : ""}`;

	return (
		<Container className="mt-3">
			<BreadCrumb textSecond={"Orders"} />
			<Row>
				<Col sm={6}>
					<SearchInput query={orders.title} handleChange={(e) => dispatch(setTitle(e.target.value))} />
				</Col>
				<Col sm={6} className="cursor-pointer position-relative" onClick={() => setIsShowed(true)}>
					<SearchInput query={displayDate} />
					{isShowed ? <DateRange date={orders.date} setIsShowed={() => setIsShowed(!isShowed)} onChangeDate={(ranges) => dispatch(setDate(ranges.selection))} /> : ""}
				</Col>
			</Row>

			<Table
				status={orders.status}
				thead={["Nama", "Email", "Judul", "Tanggal Event", "Tanggal Order", "Tempat"]}
				data={orders.data}
				tbody={["name", "email", "title", "date", "orderDate", "venueName"]}
				pages={orders.pages}
				actionNotDisplay
				handlePageClick={({ selected }) => dispatch(setPage(selected + 1))}
			/>
		</Container>
	);
}

export default OrderPage;
