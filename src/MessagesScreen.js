import Lilly from "./images/Lilly.png";
import CityBoyJJ from "./images/CityboyJJ.png";
import Therapist from "./images/Therapist.png";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function MessagesScreen() {
  const MessageItem = ({ name }) => {
    const navigate = useNavigate();

    const toggleMessage = () => {
      navigate("/message", { state: { name: name } });
    };
 
    return (
      <div
        className="bg-white border-b-2 border-light-gray h-24 flex  items-center gap-2 px-3"
        onClick={toggleMessage}
      >
        <div
          style={{
            backgroundImage: `url(${
              (name === "Jerome" && CityBoyJJ) ||
              (name === "Lilly" && Lilly) ||
              Therapist
            })`,
          }}
          className="w-16 h-16 bg-no-repeat bg-cover"
        />
        <div className="flex flex-col">
          <h3>{name}</h3>
          <h3 className="text-sm text-gray leading-3">active</h3>
        </div>
      </div>
    );
  };

  const names = ["Alexis", "Jerome", "Lilly"];

  return (
    <div className="h-screen flex flex-col content-start">
      <div className="bg-white border-b-2 border-light-gray h-16 flex  items-center gap-2 px-4">
        <h3>Your Family</h3>
      </div>
      <div className="h-3/4 w-screen flex flex-col mb-7">
        {names.map((name) => MessageItem({ name }))}
      </div>
      <Nav selected={"messages"} />
    </div>
  );
}

export default MessagesScreen;
