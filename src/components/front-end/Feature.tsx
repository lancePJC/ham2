import { TbTruckDelivery } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { FaPercentage, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {  AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import FeatureCard from "./FeatureCard";

const data = [
  {
    icon: <TbTruckDelivery className="text-4xl" />,
    title: "Free Delivery",
    desc: "Order from all items",
  },
  {
    icon: <RiRefund2Fill className="text-4xl" />,
    title: "Return & Refund",
    desc: "Money back guarantee",
  },
  {
    icon: <FaPercentage className="text-4xl" />,
    title: "Member Discount",
    desc: "On orders over ksh 5000.00",
  },
  {
    icon: <FaPhoneAlt className="text-4xl" />,
    title: "Support 24/7",
    desc: "+254 114 836 044 (office) +254 724 892 006 (cell)",
  },
  {
    icon: <HiOutlineMail className="text-4xl" />,
    title: "Email",
    desc: (
      <a
        href="mailto:vincent.kenei@sydenham.co.ke"
        className="text-blue-500 hover:underline"
      >
        vincent.kenei@sydenham.co.ke
      </a>
    ),
  },
  {
    icon: <FaMapMarkerAlt className="text-4xl" />,
    title: "Office Location",
    desc: (
      <a
        href="https://www.google.com/maps/place/Silverpool+Office+Suites/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View on Google Maps
      </a>
    ),
  },
  {
    icon: <SiTiktok className="text-4xl" />,
    title: "Follow TikTok",
    desc: (
      <a
        href="https://www.tiktok.com/@tamu.coffee.made"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        @tamu.coffee.made
      </a>
    ),
  },
  {
    icon: (
      <div className="flex gap-2">
        <AiOutlineInstagram className="text-4xl" />
        <AiFillFacebook className="text-4xl" />
      </div>
    ),
    title: "Follow Instagram & Facebook",
    desc: (
      <div>
        <a
          href="https://www.instagram.com/tamuco.ffee"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Instagram
        </a>{" "}
        &{" "}
        <a
          href="https://www.facebook.com/share/19rxjrw4Bp/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Facebook
        </a>
      </div>
    ),
  },
];


const Feature = () => {
  return (
    <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {data.map((item) => (
        <FeatureCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Feature; // Ensure this line exists
