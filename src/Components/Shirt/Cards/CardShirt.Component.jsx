const CardShirt = ({ item }) => {
  return (
    <div>
      <section>
      <h1>Shirt Card :</h1>
        <h3>ClothModel :{item.ClothModel}</h3>
        <h5>IsShort :{item.IsShort}</h5>
        <h5>Amount :{item.Amount}</h5>
        <h5>IsDreyfit :{item.IsDreyfit}</h5>
        <h5>Gender :{item.Gender}</h5>
        <h5>Price :{item.Price}</h5>
        <h5>Company:{item.Company}</h5>
        <img src={item.Img} width="50px" height="50px" />
      </section>
      )
    </div>
  );
};
export default CardShirt;
