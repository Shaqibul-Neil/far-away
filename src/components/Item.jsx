const Item = ({ item }) => {
  return (
    <>
      <li key={item.id}>
        <input type="checkbox" />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.description} {item.quantity}
        </span>
        <button>❌</button>
      </li>
    </>
  );
};

export default Item;
