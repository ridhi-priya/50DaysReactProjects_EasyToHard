import {TiDelete} from 'react-icons/ti'

const ExpenseItem = ({name, cost}) => {
    // console.log(expense)
  return (
    <>
    <li className="list-group-item d-flex justify-content-between align-item-center ">
      {name}
      <div>
        <span className="mr-2 text-light bg-primary rounded">
          ₹{cost}
        </span>
        <TiDelete size='1.5em' />
      </div>
    </li>
    </>
  );
};

export default ExpenseItem;
