const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const root = $(".root");

const list = [
  "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
  "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
  "linear-gradient(-90deg, #00C9FF 0%, #92FE9D 100%)",
  "linear-gradient(45deg, #00C9FF 0%, #92FE9D 100%)",
  "linear-gradient(-45deg, #00C9FF 0%, #92FE9D 100%)",
  "linear-gradient(0deg, #00C9FF 0%, #92FE9D 100%)",
  "linear-gradient(180deg, #00C9FF 0%, #92FE9D 100%)",
  "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)",
  "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)",
  "linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)",
  "linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%)",
  "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
  "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
  "linear-gradient(90deg, #9ebd13 0%, #008552 100%)",
  "linear-gradient(90deg, #0700b8 0%, #00ff88 100%)",
  "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
  "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)",
  "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
  "linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)",
  "linear-gradient(90deg, #fcff9e 0%, #c67700 100%)",
  "linear-gradient(0, #fcff9e 0%, #c67700 100%)",
  "linear-gradient(45deg, #fcff9e 0%, #c67700 100%)",
  "linear-gradient(-45deg, #fcff9e 0%, #c67700 100%)",
  "linear-gradient(-90deg, #fcff9e 0%, #c67700 100%)",
];

list.forEach((i) => {
  const span = document.createElement("span");
  span.style.background = i;
  span.className = "itemColor";
  span.setAttribute("data-color", i);
  root.appendChild(span);
});

if ($$(".itemColor")) {
  $$(".itemColor").forEach((item) => {
    item.addEventListener("click", function (e) {
      const over = document.createElement("div");
      const bkg = e.target.dataset.color;
      const textCopy = `background-color: ${bkg};`;
      const span = document.createElement("span");
      span.textContent = "Copied";
      over.appendChild(span);
      over.className = "overlay";
      over.style.background = bkg;
      document.body.appendChild(over);
      setTimeout(() => {
        over.parentNode.removeChild(over);
      }, 1200);
      //copy to clipboard
      const input = document.createElement("input");
      input.value = textCopy;
      input.select();
      navigator.clipboard.writeText(input.value);
    });
  });
}
