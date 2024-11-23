
const Sidebar = () => {
  const items = [
    { label: "Home ", type: "circle", active: false },
    { label: "About", type: "diamond", active: true },
    { label: "About", type: "diamond", active: false },
    { label: "Contacts", type: "circle", active: false },
  ];

  return (
    <div className="fixed top-1/2 right-10 transform -translate-y-1/2 flex flex-col items-center space-y-8">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center space-x-4 ${item.active ? "text-red-500" : "text-white"
            }`}
        >
          <span className="text-sm">{item.label}</span>
          <div
            className={`size-6 flex items-center justify-center ${item.type === "circle"
                ? "rounded-full"
                : "transform rotate-45"
              } border-2 border-white`}
          >
            <div
              className={`size-3 ${
                item.type === "circle" ? "rounded-full" : ""
              } ${
                item.active ? "bg-orange-500" : "bg-black"
              }`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
