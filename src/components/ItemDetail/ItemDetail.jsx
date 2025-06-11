export const ItemDetail = ({ title, value, className }) => {
  if (!value) return null;

  return (
    <div className={className}>
      <span>
        {title} {value}
      </span>
    </div>
  );
};
