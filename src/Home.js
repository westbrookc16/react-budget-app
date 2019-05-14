import React, { useContext } from 'react';
import UserContext from './firebase/UserContext';
import BudgetContainer from './BUDGET/BudgetContainer';

const Home = () => {
	const user = useContext(UserContext);
	return (
		<div>
			<h1>Welcome home {user && user.displayName}</h1>

			{user && <BudgetContainer />}
		</div>
	);
};
export default Home;
