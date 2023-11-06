document.addEventListener("DOMContentLoaded", () => {
  let inputUser = prompt("Enter your favorite froyo flavors here:");
  if (inputUser) {
    let arrayFlavor = inputUser.split(",");
    let flavorCount = countFlavors(arrayFlavor);

    console.table(flavorCount);
  }
});

function countFlavors(flavors) {
  let flavorPicks = {};

  flavors.forEach((flavor) => {
    let trimmedFlavor = flavor.trim().toLowerCase();
    if (trimmedFlavor) {
      if (!flavorPicks[trimmedFlavor]) {
        flavorPicks[trimmedFlavor] = 0;
      }
      flavorPicks[trimmedFlavor]++;
    }
  });

  return flavorPicks;
}
