const DashCards = ({ imageurl, title, desc }) => {
  return (
    <div>
      <div className="rounded-lg w-full hover:shadow-xl hover:shadow-blue-900 bg-white shadow-xl">
        <figure className="flex items-center justify-center pt-10">
          <img src={imageurl} alt="icons" className="w-20 h-20 rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions">
            <button className="btn text-white bg-blue-500 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-500">View Reports</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashCards;
