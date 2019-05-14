import React, { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../firebase/firebase';
import UserContext from '../firebase/UserContext';
import BudgetForm from './BudgetForm';
const BudgetContainer = () => {
	const user = useContext(UserContext);
	const firebase = useContext(FirebaseContext);
	const [budget, setBudget] = useState({ year: '2019', month: '5', income: 0 });
	//gets budget if year or month changes
	const { year, month } = budget;
	useEffect(() => {
		firebase.db
			.collection('budgets')
			.doc(`${user.uid}${year}${month}`)
			.get()
			.then(doc => {
				if (doc.exists) {
					setBudget({ ...doc.data(), id: doc.id });
					
				} else {
					setBudget(b => {
						return { ...b, income: 0, id: '' };
					});
				}
			});
	}, [year, month, user, firebase.db]);
	const handleChange = e => {
		setBudget({ ...budget, [e.target.name]: e.target.value });
	};
	const saveBudget = () => {
		firebase.db
			.collection('budgets')
			.doc(`${user.uid}${year}${month}`)
			.set(budget, { merge: true })
			.then(d => {
				categories.forEach(cat => {
					firebase.db
						.collection('budgets')
						.doc(`${user.uid}${year}${month}`)
						.collection('categories')
						.doc(cat.id)
						.set(cat, { merge: true })
						.then(a => {});
				});
			});
		alert('Your budget has been saved.');
		setBudget({ ...budget, id: `${user.uid}${year}${month}` });
	};
	//category code
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		if (budget.id) {
			const subscribe = firebase.db
				.collection('budgets')
				.doc(budget.id)
				.collection('categories')
				.onSnapshot(s => {
					let c = [];

					s.forEach(doc => {
						c = c.concat({ ...doc.data(), id: doc.id });
					});

					setCategories(c);
				});

			return subscribe;
		} else {
			setCategories([]);
		}
	}, [budget.id, firebase.db]);
	const handleCategoryChange = (idx, e) => {
		const { value } = e.target;
		setCategories(c => {
			return c.map((v, i) => {
				if (i === idx) {
					v.amount = value;
				}
				return v;
			});
		});
	};
	const addCategory = c => {
		firebase.db
			.collection('budgets')
			.doc(budget.id)
			.collection('categories')
			.add(c)
			.then(i => {
				alert('category added successfully.');
			})
			.catch(e => {});
	};
	return (
		<BudgetForm
			budget={budget}
			handleChange={handleChange}
			saveBudget={saveBudget}
			addCategory={addCategory}
			handleCategoryChange={handleCategoryChange}
			categories={categories}
		/>
	);
};
export default BudgetContainer;
