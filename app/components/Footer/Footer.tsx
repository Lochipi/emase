const Footer = () => {
   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   let day = days[new Date().getDay()];

  console.log();
  return (
    <div className="p-4 text-center bg-gray-600 min-h-[50px]">
      <p className="font-bold">Hey it is {day} have it nice Major!</p>
    </div>
  );
};

export default Footer;
