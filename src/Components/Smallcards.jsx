
const Smallcards = ({ title, desc }) => {
  return (
    <div>
      <div className="card w-full hover: hover:shadow-xl hover:shadow-blue-900  bg-white ">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Smallcards;
