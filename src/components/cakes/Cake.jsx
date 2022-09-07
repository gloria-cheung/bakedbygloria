import "./Cake.scss";
export default function Cake(props) {
  const { title, id, type } = props;

  return (
    <div class="col-3 card cakeImgContainer p-2">
      <img src={`/${type}/${id}.JPG`} alt={title} />
      <div class="card-img-overlay">
        <h5 class="card-title d-flex justify-content-center">{title}</h5>
      </div>
    </div>
  );
}
