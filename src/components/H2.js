function H2({ className, children }) {
  return (
    <h2 className={`${className} text-2xl font-semibold capitalize`}>
      {children}
    </h2>
  );
}

export default H2;
