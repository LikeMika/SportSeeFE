export function formatKeyData(keyData) {
  return [
    {
      id: "calories",
      label: "Calories",
      value: keyData.calorieCount.toLocaleString() + "kCal",
      icon: "../assets/calories-icon.png",
      alt: "Calories icon"
    },
    {
      id: "proteins",
      label: "Protéines",
      value: keyData.proteinCount + "g",
      icon: "../assets/protein-icon.png",
      alt: "Proteins icon"
    },
    {
      id: "carbs",
      label: "Glucides",
      value: keyData.carbohydrateCount + "g",
      icon: "../assets/carbs-icon.png",
      alt: "Carbs icon"
    },
    {
      id: "lipids",
      label: "Lipides",
      value: keyData.lipidCount + "g",
      icon: "../assets/fat-icon.png",
      alt: "Lipids icon"
    }
  ];
}
