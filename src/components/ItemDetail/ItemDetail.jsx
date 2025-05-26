export const ItemDetail = ({ title, value }) => {
  if (!value) {
    return null;
  }
  return (
    <div>
      <span>
        {title} {value}
      </span>
    </div>
  );
};
