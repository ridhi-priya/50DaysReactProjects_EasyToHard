import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 8979812, name: "shopping", cost: 500 },
    { id: 8978812, name: "Holiday", cost: 500 },
    { id: 8979412, name: "Transpotation", cost: 500 },
    { id: 8976812, name: "Fuel", cost: 500 },
    { id: 8970812, name: "Child Care", cost: 500 },
  ];
  return (
    <div>
      <ul className="list-group">
        {expenses.map((expense) => (
            <ExpenseItem 
            key = {expense.id}
            name = {expense.name}
            cost = {expense.cost}
            />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
