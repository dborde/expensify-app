import React from 'react';
import { shallow } from 'enzyme';
import RemoveExpenseModal from '../../components/RemoveExpenseModal';
import expenses from '../fixtures/expenses';

let wrapper, isModalOpen, onRemove, onToggleModal, expense;

beforeEach(() => {
  isModalOpen = true;
  onRemove = jest.fn();
  onToggleModal = jest.fn();
  expense = expenses[0];
  wrapper = shallow(
    <RemoveExpenseModal
      expense={expense}
      isModalOpen={isModalOpen}
      onRemove={onRemove}
      onToggleModal={onToggleModal}
    />);
});

test('should render RemoveExpenseModal correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
