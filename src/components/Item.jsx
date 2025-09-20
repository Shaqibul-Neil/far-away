const Item = ({ item }) => {
  return (
    <>
      <li key={item.id}>
        <input type="checkbox" />
        {item.description} {item.quantity}
        <button>❌</button>
      </li>
    </>
  );
};

export default Item;
