
const getTotalExpenses = (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce(function(sum, value) {
        return sum + value;
    }, 0);
};

export default getTotalExpenses;