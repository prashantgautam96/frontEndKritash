
import Sidebar from "components/Sidebar/Sidebar";
import SinglePost from "components/singlePost/SinglePost";
import Footer from "components/footers/SimpleFiveColumn.js";
import "./Single.css";
import Hero from "components/hero/BackgroundAsImage.js";
export default function Single() {
  return (
    <div>
      
      <Hero/>
      <div className="single">
        <SinglePost />
        <Sidebar />
      </div>
      
      <Footer/>
    </div>
    
  );
}