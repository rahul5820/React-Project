import { movies } from "./Data.jsx";
import { useState } from "react";

function Movie() {
  const [MovieShow, SetMovieShow] = useState(movies);

const filterBycategory = (category) => {
SetMovieShow((movies.filter((data)=>data.category==category)))

}



  return (
    <>
      <div className=" mx-auto" style={{ width: "1250px",justifyContent:"center",alignItems:"center" ,display:"flex",marginTop:"10px"}}>
        
        <button type="button" onClick={()=>SetMovieShow(movies)} className="btn btn-outline-primary mx-3 p-3">
          All
        </button>
        <button type="button" onClick={()=>filterBycategory("Action")} className="btn btn-outline-secondary  mx-3 p-3  px-4">
          Action
        </button>
        <button type="button" onClick={()=>filterBycategory("Thriller")} className="btn btn-outline-success mx-3 p-3  px-4">
          Thriller
        </button>
        <button type="button" onClick={()=>filterBycategory ("Animation")} className="btn btn-outline-danger mx-3 p-3  px-4">
          Animation
        </button>
        <button type="button" onClick={()=>filterBycategory ("Horror")} className="btn btn-outline-warning mx-3 p-3  px-4">
          Horror
        </button>
        <button type="button" onClick={()=>filterBycategory ("Drama")} className="btn btn-outline-info mx-3 p-3  px-4">
          Drama
        </button>
        <button type="button" onClick={()=>filterBycategory ("Sci-fi")} className="btn btn-outline-light mx-3 p-3  px-4">
          Sci-fi
        </button>
        <button type="button" onClick={()=>filterBycategory ("Mystery")} className="btn btn-outline-info mx-3 p-3  px-4">
          Mystery
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          textAlign: "center",
          width: "1300px",
          margin: "auto",
          marginTop: "1.5rem",
        }}
      >
        {MovieShow.map((data) => (
          <div key={data.id} style={{ maxWidth: "300px" }}>
            <div className="hover-effect" style={{ padding: "10px" }}>
              <img
                src={data.poster_path}
                style={{
                  width: "250px",
                  border: "1px solid yellow",
                  borderRadius: "10px",
                }}
              />
            </div>
            <h5 style={{ display: "inline-block", color: "white" ,textAlign:"center"}}>
              {data.title}
            </h5>
            <p style={{ fontSize: "large", color: "white" }}>
              {data.release_date}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movie;
