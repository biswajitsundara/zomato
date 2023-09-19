const ShimmerCard = () => {
  return (
    <>
      <div className="shimmer-card">
        <div className="shimmer-res-logo"></div>
        <div className="card-title">
          <div className="shimmer-res-name"></div>
          <div className="shimmer-rating-chip"> </div>
        </div>
        <div className="shimmer-card-footer"></div>
      </div>
    </>
  );
};

const Shimmer = () => {
  return <div className="shimmer-container">
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
    <ShimmerCard />
  </div>;
};

export default Shimmer;
