const BasicUrl = "https://localhost:44397/api/Shirt";

export const GetDataShirt = async () => {
  try {
    return fetch(`${BasicUrl}`)
      .then((res) => res.json())
      .catch((error) => console.log({ error: "is not work" }));
  } catch (error) {
    console.log("error");
  }
};