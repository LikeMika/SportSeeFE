export function formatKeyData(keyData) {
  return [
    {
      id: "calories",
      label: "Calories",
      value: keyData.calorieCount.toLocaleString() + "kCal",
      icon: "../src/assets/calories-icon.png",
      alt: "Calories icon"
    },
    {
      id: "proteins",
      label: "Protéines",
      value: keyData.proteinCount + "g",
      icon: "../src/assets/protein-icon.png",
      alt: "Proteins icon"
    },
    {
      id: "carbs",
      label: "Glucides",
      value: keyData.carbohydrateCount + "g",
      icon: "../src/assets/carbs-icon.png",
      alt: "Carbs icon"
    },
    {
      id: "lipids",
      label: "Lipides",
      value: keyData.lipidCount + "g",
      icon: "../src/assets/fat-icon.png",
      alt: "Lipids icon"
    }
  ];
}
