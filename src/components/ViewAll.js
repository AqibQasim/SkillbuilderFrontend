import { LuArrowRight } from "react-icons/lu";

function ViewAll({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-1 border-b border-b-transparent text-gray-shade-1 transition-transform duration-200 hover:border-b hover:border-gray-shade-1"
    >
      View All{" "}
      <LuArrowRight className="size-5 transition-transform duration-200 group-hover:-rotate-45" />
    </button>
  );
}

export default ViewAll;
