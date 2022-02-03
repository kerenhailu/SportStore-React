const BasicUrl = "https://localhost:44397/api/";

export const GetSportsEquipment = async () => {
  try {
    fetch(`${BasicUrl}SportsEquipment`)
      .then((res) => res.json())
      .catch((rej) => console.log("error"));
  } catch (error) {
    console.log("error");
  }
};
