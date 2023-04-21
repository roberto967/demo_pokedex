const PokemonCardPlaceholder = () => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex justify-content-center">
          <div
            className="bg-secondary mx-auto rounded-circle"
            style={{ width: "120px", height: "120px" }}
          />
        </div>
        <h5 className="card-title text-center mt-3 mb-2">
          <span className="bg-secondary px-3 py-1 rounded" />
        </h5>
        <div className="d-flex justify-content-center">
          <span className="bg-secondary px-3 py-1 rounded mr-2" />
          <span className="bg-secondary px-3 py-1 rounded" />
        </div>
      </div>
    </div>
  );
};

export default PokemonCardPlaceholder;
