// ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
    const currentDate = new Date().toISOString().slice(0, 10); // Get current date in 'YYYY-MM-DD' format
  const [formData, setFormData] = useState({
    expense: '',
    amount: '',
    date: currentDate,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} - ${value}`);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if title, amount, and date are not empty
    if (formData.expense.trim() === '' || formData.amount.trim() === '' || formData.date.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    
    const expenseData = {
      expense: formData.expense,
      amount: +formData.amount, // Convert amount to number
      date: new Date(formData.date),
    };
    console.log(expenseData);
    // Pass the expenseData to the parent component (App.js)
    onAddExpense(expenseData);

    // Clear the form fields
    setFormData({
      expense: '',
      amount: '',
      date: currentDate,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" name="expense" value={formData.expense} onChange={handleInputChange} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} />
      </div>
      <div>
        <label>Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
