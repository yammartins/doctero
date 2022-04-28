const Button: React.FC = () => (
  <button type="button">
    {icon}

    {loading ? (
      <div className="loading" />
    ) : (
      label
    )}
  </button>
);

export default Button;
