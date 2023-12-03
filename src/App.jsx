// App.js
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    // Add the new expense to the expenses state
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteExpenseHandler = (index) => {
    // Remove the expense at the specified index
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      {/* ExpenseForm component */}
      <ExpenseForm onAddExpense={addExpenseHandler} />

      {/* Display the list of expenses */}
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.title} - ${expense.amount} - {expense.date.toISOString().slice(0, 10)}
            <button onClick={() => deleteExpenseHandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
