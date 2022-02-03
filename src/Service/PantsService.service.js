const BasicUrl = "https://localhost:44397/api/";

export const GetPantsData = async () => {
  try {
    return fetch(`${BasicUrl}Pants`)
      .then((res) => res.json())
      .catch((error) => console.log({ error: "is not work" }));
  } catch (error) {
    console.log("error");
  }
};
