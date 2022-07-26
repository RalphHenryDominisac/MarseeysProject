import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../../../helpers/axios';

export default function EditIngredientForm(props) {
	const location = useLocation();
	const navigate = useNavigate();
	const ingredient = location.state;
	const [ingredientRequest, setIngredientRequest] = useState({
		name: '',
		ingredientCategory: '',
		threshold: '',
		unitMeasure: '',
	});
	const [ingredientCategories, setIngredientCategories] = useState([]);
	const [unitMeasures] = useState([
		'KG',
		'G',
		'L',
		'ML',
		'PACKS',
		'BUNDLES',
		'PIECES',
		'CANS',
		'JARS',
		'STICKS',
	]);

	useEffect(() => {
		if (ingredientCategories.length === 0) {
			axiosInstance
				.get('/ingredient/category')
				.then((response) => {
					setIngredientCategories(response.data);
				})
				.catch((error) => {
					console.log('Error: ', error);
				});
		}

		setIngredientRequest({
			name: ingredient.name,
			ingredientCategory: ingredient.ingredientCategory.name,
			threshold: ingredient.threshold,
			unitMeasure: ingredient.unitMeasure,
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function submitIngredientRequest(event) {
		event.preventDefault();
		console.log(ingredientRequest);

		axiosInstance
			.post('/ingredient/edit/' + ingredient.id, ingredientRequest)
			.then((response) => {
				if (response.data !== null) {
					navigate('/');
				}
			})
			.catch((error) => {
				console.log('Error: ', error);
			});
	}

	function handleChange(event) {
		setIngredientRequest({
			...ingredientRequest,
			[event.target.name]: event.target.value,
		});
	}

	return (
		<div>
			<Card className="border border-dark bg-dark text-white">
				<Card.Header>
					<i className="fa fa-plus-square" /> Ingredient
				</Card.Header>
				<Form onSubmit={submitIngredientRequest} id="ingredientFormId">
					<Card.Body>
						<Row>
							<Form.Group as={Col} controlId="formGridName">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									name="name"
									required
									autoComplete="off"
									value={ingredientRequest.name}
									className="bg-dark text-white"
									placeholder="Enter name"
									onChange={handleChange}
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridCategory">
								<Form.Label>Category</Form.Label>
								<Form.Control
									as="select"
									name="ingredientCategory"
									value={ingredientRequest.ingredientCategory}
									required
									className="bg-dark text-white"
									onChange={handleChange}
								>
									<option key="blankChoice" hidden value>
										Pick an Ingredient Category
									</option>
									{ingredientCategories.map((category) => (
										<option key={category.id} value={category.name}>
											{category.name}
										</option>
									))}
								</Form.Control>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group as={Col} controlId="formGridMeasure">
								<Form.Label>Unit Measure</Form.Label>
								<Form.Control
									as="select"
									name="unitMeasure"
									value={ingredientRequest.unitMeasure}
									required
									className="bg-dark text-white"
									onChange={handleChange}
								>
									<option key="blankChoice" hidden value>
										Pick a Unit Measure
									</option>
									{unitMeasures.map((unitMeasure) => (
										<option key={unitMeasure} value={unitMeasure}>
											{unitMeasure}
										</option>
									))}
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridQuantity">
								<Form.Label>Reorder Point</Form.Label>
								<Form.Control
									type="number"
									name="threshold"
									value={ingredientRequest.threshold}
									required
									autoComplete="off"
									className="bg-dark text-white"
									placeholder="Enter a reorder point"
									onChange={handleChange}
								/>
							</Form.Group>
						</Row>
					</Card.Body>
					<Card.Footer>
						<Button size="sm" variant="success" type="submit">
							<i className="fa fa-save" /> Submit
						</Button>
					</Card.Footer>
				</Form>
			</Card>
		</div>
	);
}
