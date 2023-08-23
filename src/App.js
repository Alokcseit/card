import "./App.css";
import Products from "./Products";
import Product from "./Product";
import Signup from "./Signup";
import Moviecard from "./Moviecard";
import Showmoviecard from "./Showmoviecard";
import Showoroducts from "./Showoroducts";
const productdata = [
  { id: "1", name: "apple" },
  { id: "2", name: "banana" },
  { id: "3", name: "orange" },
];
const cardary = [
  {
    id: "1",
    name: "Gadar 2",
    imgurl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/gadar-2-et00338629-1688724591.jpg",
    type: "action/drama/period",
  },
  {
    id: "2",
    name: "Gadar 2",
    imgurl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dream-girl-2-et00340111-1690375184.jpg",
    type: "comedy/drama/romantic",
  },
  {
    id: "3",
    name: "OMG2",
    imgurl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/omg-2-et00361712-1689772587.jpg",
    type: "comedy/drama",
  },
  {
    id: "4",
    name: "Blue Bettle",
    imgurl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/blue-beetle-et00331565-1686294348.jpg",
    type: "action/Adventure/sci-fi",
  },
  {
    id: "5",
    name: "Rocky our Rani ki Prem Kahani",
    imgurl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rocky-aur-rani-kii-prem-kahaani-et00312549-1690269122.jpg",
    type: "comedy/family/romantic",
  },
  {
    id: "6",
    name: "Ghoomer",
    imgurl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ghoomer-et00365396-1691567589.jpg",
    type: "thriller",
  },
  {
    id: "7",
    name: "Oppenheimer",
    imgurl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/oppenheimer-et00347867-1683533414.jpg",
    type: "thriller/adventure",
  },
];

function App() {
  return (
    <div>
      {/* <Product prodata={productdata}></Product>
      <Signup></Signup> */}
      {/* <Moviecard
        name="Gadar2"
        imgurl="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMDAuMUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg"
      ></Moviecard> */}
      <Showmoviecard
        cardlist={cardary}
        style={{ display: "flex", flexDirection: "row" }}
      ></Showmoviecard>
      {/* <Products></Products> */}
      {/* <Showoroducts prolist={productdata}></Showoroducts> */}
    </div>
  );
}

export default App;
