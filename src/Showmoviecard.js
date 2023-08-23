import Moviecard from "./Moviecard";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Showmoviecard(moviedata) {
  const cards = moviedata.cardlist;
  const cardelement = cards.map((crd) => (
    <Moviecard key={crd.id} mdata={crd}></Moviecard>
  ));
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  };
  return <div style={containerStyle}>{cardelement}</div>;
}

export default Showmoviecard;
