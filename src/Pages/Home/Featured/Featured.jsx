import SectionTitle from "../../../Compnents/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css"
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-10 my-20">
      <SectionTitle
        subHeading={"check it out"}
        heading={"featured item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 py-20 pt-12 px-36 ">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 ">
          <p>Aug 20, 2028</p>
          <p className="uppercase">Where can I get some</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            autem porro nihil repellendus deleniti praesentium soluta explicabo
            corporis facere! Id, veritatis assumenda. Corrupti, incidunt
            voluptate modi unde laboriosam suscipit est.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Know</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
