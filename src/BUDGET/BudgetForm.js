import React from 'react';
import CategoryForm from '../categories/CategoryForm';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const BudgetForm = ({ handleChange, saveBudget, budget, categories, addCategory, handleCategoryChange }) => {
	const { month, year, income } = budget;
	return (
		<Form
			onSubmit={e => {
				e.preventDefault();
				saveBudget(budget);
			}}
		>
			<Form.Group controlId="year">
				<Form.Label>Month</Form.Label>
				<Form.Control as="select" name="month" value={month} onChange={handleChange}>
					<option value="1">Jan</option>
					<option value="2">Feb</option>
					<option value="3">March</option>
					<option value="4">Apr</option>
					<option value="5">May</option>
					<option value="6">Jun</option>
					<option value="7">Jul</option>
					<option value="8">Aug</option>
					<option value="9">Sept</option>
					<option value="10">Oct</option>
					<option value="11">Nov</option>
					<option value="12">Dec</option>
				</Form.Control>
			</Form.Group>
			<Form.Group controlId="year">
				<Form.Control as="select" value={year} name="year" onChange={handleChange}>
					<option>2019</option>
					<option>2020</option>
					<option>2021</option>
				</Form.Control>
			</Form.Group>
			<Form.Group controlId="income">
				<Form.Label>Total Income</Form.Label>
				<Form.Control type="number" value={income} onChange={handleChange} name="income" />
			</Form.Group>
			{budget.id && (
				<CategoryForm categories={categories} addCategory={addCategory} handleChange={handleCategoryChange} />
			)}

			<Button type="submit">Save</Button>
		</Form>
	);
};
export default BudgetForm;
