const ProgressBar = ({ barwidth, centerBar }) => {
  return (
    <div
      className={`w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ${centerBar}`}
    >
      <div
        className="bg-blue h-2.5 rounded-full"
        style={{ width: barwidth }}
      ></div>
    </div>
  );
};

export default ProgressBar;
