const steps = [
  {
    step: 1,
    title: "Sed leo enim, condimentum",
    description:
      "Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
  },
  {
    step: 2,
    title: "Morbi velit risus",
    description:
      "Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
  },
  {
    step: 3,
    title: "Sed leo enim, condimentum",
    description:
      "Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
  }
];
const baseSrc = "/img/steps";

const fillSteps = () => {
  const container = document.querySelector("#how-it-works > .images");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  steps
    .map(step => {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figcaption = document.createElement("figcaption");
      const title = document.createElement("h2");
      const description = document.createElement("p");
      const currentStep = document.createElement("span");

      img.src = `${baseSrc}/step${step.step}.png`;

      description.innerText = step.description;

      currentStep.innerText = `STEP ${step.step}`;
      currentStep.classList.add("button");
      currentStep.classList.add("filled");

      title.innerText = step.title;

      figcaption.appendChild(currentStep);
      figcaption.appendChild(title);
      figcaption.appendChild(description);

      figure.classList.add("no-margin");
      figure.appendChild(img);
      figure.appendChild(figcaption);

      return figure;
    })
    .forEach(child => container.append(child));
};

fillSteps();
