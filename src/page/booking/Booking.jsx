import { useDispatch, useSelector } from "react-redux";
import "./Booking.css";
import { useEffect, useState } from "react";
import { AddPetService, fetchAllService } from "../../slice/petServiceSlice";
import Helper from "../../utiliti/helper/Helper";

function Booking() {
	const [selectedService, setSelectedService] = useState('');
	const [selectedClassifications, setSelectedClassifications] = useState({});
	const dispatch = useDispatch();
	const services = useSelector(state => state.service.petServices);

	const [formData, setFormData] = useState({
		appointmentId: "",
		customerName: "",
		serviceName: "",
		customerPhone: "",
		customerEmail: "",
		district: "",
		city: "",
		default: false,
	});

	useEffect(() => {
		dispatch(fetchAllService());
	}, [dispatch]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prevValues => ({
			...prevValues,
			[name]: value
		}));
	};

	const handleServiceChange = (event) => {
		const selectedService = event.target.value;
		setSelectedService(selectedService);
		setSelectedClassifications({}); // Xóa các lựa chọn phân loại khi chọn lại dịch vụ
	};

	const handleClassificationChange = (classificationName, event) => {
		setSelectedClassifications({
			...selectedClassifications,
			[classificationName]: event.target.value
		});
	};

	const handleSubmit = async () => {
		dispatch(AddPetService(formData))
	}


	console.log(services)
	return (
		<>
			<div className="breadcrumb_background">
				<section className="bread-crumb">
					<span className="crumb-border"></span>
					<div className="container">
						<div className="rows">
							<div className="col-xs-12 a-left">
								<ul className="breadcrumb" >
									<li className="home">
										<a href="/" ><span >Trang chủ</span></a>
										<span className="mr_lr">&nbsp;/&nbsp;</span>
									</li>

									<li><strong ><span>Đặt lịch</span></strong></li>

								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>

			<section className="page page_booking">
				<div className="container">
					<div className="wrap_background_aside padding-top-15 padding-bottom-40">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12">
								<h1 className="title_page a-center"><span>Đặt lịch</span></h1>
								<p className="des">
									Nếu bạn là một người nuôi thú cưng nhưng có công việc rất bận rộn thì việc đưa thú cưng<br /> đến các cơ sở chăm sóc thú cưng là một giải pháp rất hữu ích. Với dịch vụ trọn gói cùng <br />các nhân viên chuyên nghiệp sẽ giúp bạn chăm sóc thú cưng một cách dễ dàng.
								</p>
								<div className="row">
									<div className="col-lg-7 col-12">
										<form method="post" action="/postcontact" id="contact" acceptCharset="UTF-8"><input name="FormType" type="hidden" value="contact" />
											<input name="utf8" type="hidden" value="true" />
											<input type="hidden" id="Token-f49bb0bb315046ae90f417251549df90" name="Token" />

											<div className="form-signup clearfix">
												<div className="row group_contact">
													<fieldset className="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12">
														<input placeholder="Họ tên:" type="text" className="form-control  form-control-lg" required name="" />
														<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-user fa-w-14">
															<path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" className=""></path>
														</svg>
													</fieldset>
													<fieldset className="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12">
														<input type="number" placeholder="Số điện thoại:" name="contact[phone]" className="form-control form-control-lg" required />
														<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-phone-alt fa-w-16">
															<path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" className=""></path>
														</svg>
													</fieldset>
													<fieldset className="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12">
														<input placeholder="Email:" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required id="email1" className="form-control form-control-lg" name="contact[email]" />
														<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-envelope fa-w-16">
															<path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" className=""></path>
														</svg>
													</fieldset>
													<fieldset className="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12">
														<input placeholder="Chủ đề:" type="text" required id="content" className="form-control form-control-lg" name="contact[Chủ đề]" />
														<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-book fa-w-14">
															<path fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" className=""></path>
														</svg>
													</fieldset>
													<fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
														<textarea placeholder="Nội dung:" name="contact[body]" id="comment" className="form-control content-area form-control-lg" rows="5" required></textarea>
														<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-comment fa-w-16">
															<path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z" className=""></path>
														</svg>
													</fieldset>

													<div>
														<select value={selectedService} onChange={handleServiceChange}>
															<option value="">Chọn dịch vụ</option>
															{services.map(service => (
																<option key={service.petCareId} value={service.serviceName}>{service.serviceName}</option>
															))}
														</select>

														{selectedService && services.find(service => service.serviceName === selectedService)?.classifications.map(classification => (
															<div key={classification.classificationPetId}>
																<select
																	value={selectedClassifications[classification.classificationName] || ''}
																	onChange={(event) => handleClassificationChange(classification.classificationName, event)}
																>
																	<option value="">{classification.classificationName}</option>
																	{Object.keys(classification.values).map((value, index) => (
																		<option key={index} value={value}>{value}</option>
																	))}
																</select>
															</div>
														))}
													</div>

													<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 a-left">
														<button onClick={handleSubmit} type="submit" className="btn btn-primary btn-lienhe">Đặt lịch</button>
													</div>
												</div>
											</div>
										</form>
									</div>
									<div className="col-lg-5 col-12">
										<div className="banner_booking">
											<img className="lazyload loaded" src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/banner_booking.png?1676276556806" alt="banner_booking" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section >
		</>
	);
}

export default Booking;