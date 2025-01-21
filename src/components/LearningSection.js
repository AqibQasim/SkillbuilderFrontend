import LayoutXPadding from "./LayoutXPadding";

function LearningSection() {
  return (
    <>
      <LayoutXPadding>
        <div>
          <div className="content mb-4 text-center">
            <div className="mx-auto mb-1.5 w-max rounded-[3.25rem] border border-[#4000FF] bg-white px-4 py-1 text-xs font-medium text-[#4000FF]">
              Build up the community
            </div>
            <h2 className="mx-auto mb-5 max-w-3xl font-satoshi text-4xl font-semibold text-[#00204D]">
              Join the biggest community of learning
            </h2>
            <p className="mx-auto max-w-3xl text-lg font-medium text-[#5F646B]">
              Learn, share the knowledge with community member & shine from
              wherever you’re through online learning web app.
            </p>
          </div>
        </div>
      </LayoutXPadding>
      {/* Globe */}
      {/* <div className="h-96 w-full bg-slate-600">
        <CustomGlobe />
      </div> */}
    </>
  );
}

export default LearningSection;
