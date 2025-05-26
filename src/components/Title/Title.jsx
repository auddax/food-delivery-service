export const Title = ({ level = 2, value, className }) => {
  if (!value) {
    return null;
  }
  const Tag = `h${level}`;
  return <Tag className={className}>{value}</Tag>;
};
