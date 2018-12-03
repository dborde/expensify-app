import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => (
  <div>
    {props.expenseCount < 1 && <p>You have no expenses</p>}
    {props.expenseCount === 1 && <p>Viewing {props.expenseCount} expense totaling {numeral(props.expensesTotal / 100).format('$0,0.00')}</p>}
    {props.expenseCount >= 2 && <p>Viewing {props.expenseCount} expenses totaling {numeral(props.expensesTotal / 100).format('$0,0.00')}</p>}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenseCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: selectExpensesTotal(state.expenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
