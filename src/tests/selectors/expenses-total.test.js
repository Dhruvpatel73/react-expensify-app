import selectExtensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = selectExtensesTotal([]);
    expect(result).toBe(0);
});

test('shoud correctly add up a single value', () => {
    const result = selectExtensesTotal([expenses[1]]);
    expect(result).toBe(109500);
});


test('shoud correctly add up multiple values', () => {
    const result = selectExtensesTotal(expenses);
    expect(result).toBe(114195);
});