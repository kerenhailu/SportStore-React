const CardPants = ({ itemPants }) => {
  return (
    <div>
      <section>
      <h1>Pants Card !!:</h1>
        <h3>ClothModel :{itemPants.ClothModel}</h3>
        <h5>IsShort :{itemPants.IsShort}</h5>
        <h5>Amount :{itemPants.Amount}</h5>
        <h5>IsDreyfit :{itemPants.IsDreyfit}</h5>
        <h5>Gender :{itemPants.Gender}</h5>
        <h5>Price :{itemPants.Price}</h5>
        <h5>Company :{itemPants.Company}</h5>
        <img src={itemPants.Img} width="50px" height="50px" />
      </section>
    </div>
  );
};
export default CardPants;
