import heartIcon from "../assets/heart-icon.png";

export default function Lives({ lives }) {
  return (
    <div className="w-full flex justify-center h-6 animate-pulse">
      {Array.from({ length: lives }, (_, index) => (
        <img src={heartIcon} alt="Heart icon" key={index} className="h-full " />
      ))}
    </div>
  );
}
