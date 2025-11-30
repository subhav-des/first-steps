//import { Fragment } from "react"; //we can use Fragment using this
function ListGroup() {

  const items = ['New Delhi', 'Gurugram', 'Pune', 'Bangalore', 'Dehradun'];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
         {items.map((item) => <li key = {item}>{item}</li>)}
      </ul>
    </>
  );
}

export default ListGroup;
