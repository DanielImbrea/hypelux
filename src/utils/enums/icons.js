import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export const types = [
  {
    type: "facebook",
    Icon: FiFacebook,
  },
  {
    type: "instagram",
    Icon: FiInstagram,
  },
  {
    type: "twitter",
    Icon: FiTwitter,
  },
];

const getIconByType = type =>
  (types.find(item => item.type === type) || types[0]).Icon;

export default getIconByType;
