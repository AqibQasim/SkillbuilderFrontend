export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      window.location.hash = `#${id}`;
    }, 200);
  }
};
