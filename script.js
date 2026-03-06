const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "translateY(-6px) scale(1.02)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "";
  });

  link.addEventListener("click", () => {
    console.log("Clicked:", link.innerText.trim());
  });
});