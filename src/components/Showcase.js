import HomePageNavbar from "./HomePageNavbar";
import LayoutXPadding from "./LayoutXPadding";

function Showcase() {
  return (
    // add tmep height
    <LayoutXPadding>
      <div className="mx-3 h-[650px] rounded-[1.25rem] bg-gradient-to-b from-[#E7F7FF] to-[#DBEDFF] pt-11 xl:mx-5">
        <HomePageNavbar />
      </div>
    </LayoutXPadding>
  );
}

export default Showcase;
