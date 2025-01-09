import HomePageNavbar from "./HomePageNavbar";
import LayoutXPadding from "./LayoutXPadding";

function Showcase() {
  return (
    // add tmep height
    <LayoutXPadding>
      <div className="mx-3 h-[650px] rounded-[1.25rem] bg-[#F3F7FA] pt-11 xl:mx-5">
        <HomePageNavbar />
      </div>
    </LayoutXPadding>
  );
}

export default Showcase;
