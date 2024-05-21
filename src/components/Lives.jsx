export default function Lives({lives}) {
    return (
      <div>
        {Array.from({ length: lives }, (_, index) => (
          <div key={index} className="heart"></div>
        ))}
      </div>
    );
  }