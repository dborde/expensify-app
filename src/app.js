import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter, setStartDate, setEndDate } from './actions/filters';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
// store.dispatch(setTextFilter('water'));
// store.dispatch(setStartDate(-1001));
// store.dispatch(setEndDate(5000));

// setTimeout(() => {
//   store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
//   store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
//   store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
// }, 3000);

ReactDOM.render(jsx, document.getElementById('app'));
