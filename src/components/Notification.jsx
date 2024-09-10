import { notification1 } from "../assets";
import { ocranimation } from "../assets/";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={ocranimation}
        width={62}
        height={62}
        alt="generating"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
      </div>
    </div>
  );
};

export default Notification;
