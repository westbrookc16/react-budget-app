import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const CategoryForm = ({ categories, addCategory, handleChange }) => {
	const [category, setCategory] = useState({ name: '', amount: 0 });
	const { name, amount } = category;
	const handleAddChange = e => {
		const { name, value } = e.target;
		setCategory(c => {
			return { ...c, [name]: value };
		});
	};
	const trs = categories.map((cat, i) => {
		const { name, amount } = cat;
		return (
			<tr key={i}>
				<td>{name}</td>
				<td>
					<input
						aria-label={`amount for ${name}`}
						type="number"
						value={amount}
						onChange={e => {
							handleChange(i, e);
						}}
					/>
				</td>
			</tr>
		);
	});
	return (
		<div>
			<h1>Categories</h1>
			{categories.length > 0 && (
				<table>
					<thead>
						<tr>
							<td>Name</td>
							<td>Amount</td>
						</tr>
					</thead>
					<tbody>{trs}</tbody>
				</table>
			)}

			{categories	 && (
				<div>
					<h1>Add Category</h1>

					<Form.Group controlId="name">
						<Form.Label>Name</Form.Label>

						<Form.Control name="name" value={name} onChange={handleAddChange} />
					</Form.Group>
					<Form.Group controlId="amount">
						<Form.Label>Amount</Form.Label>

						<Form.Control name="amount" value={amount} onChange={handleAddChange} />
					</Form.Group>
					<Button
						type="button"
						onClick={e => {
							e.preventDefault();
							console.log(category);
							addCategory(category);
						}}
					>
						Add
					</Button>
				</div>
			)}
		</div>
	);
};
export default CategoryForm;
