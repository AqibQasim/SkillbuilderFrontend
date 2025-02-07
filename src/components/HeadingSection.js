function HeadingSection({
  className = "",
  labelText = "Build up the community",
  headingText = "Join the biggest community of learning",
  text = `Learn, share the knowledge with community member & shine from wherever
        you’re through online learning web app.`,
}) {
  return (
    <div className={`${className} content mb-4 text-center`}>
      <div className="mx-auto mb-1.5 w-max rounded-[3.25rem] border border-[#4000FF] bg-white px-4 py-1 text-xs font-medium text-[#4000FF]">
        {labelText}
      </div>
      <h2 className="mx-auto mb-5 max-w-3xl font-satoshi text-4xl font-semibold text-[#00204D]">
        {headingText}
      </h2>
      <p className="mx-auto max-w-3xl font-medium text-[#5F646B] xl:text-lg">
        {text}
      </p>
    </div>
  );
}

export default HeadingSection;
