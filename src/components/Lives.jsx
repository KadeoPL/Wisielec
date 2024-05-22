export default function Lives({lives}) {
    return (
      <div className="heart-section">
        {Array.from({ length: lives }, (_, index) => (
          <div key={index} className="heart"></div>
        ))}
      </div>
    );
  }