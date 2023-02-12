const PlansData = () => {
  return [
    {
      id: 0,
      title: "Free",
      price: 0,
      reccuring: "/month",
      features: ["Search Places", "Limited Places", "Free Consulting"],
      button: "Free trial",
    },
    {
      id: 1,
      title: "Basic Plan",
      price: 15,
      reccuring: "/month",
      features: ["Filter places", "unlimited Places", "5 user places"],
      button: "Join now",
    },
    {
      id: 2,
      title: "Trainer plan",
      price: 67,
      reccuring: "/month",
      features: ["All featured pro", "Exclusive places", "Free fitness Shirts"],
      button: "Join now",
    },
  ];
};
export default PlansData;
