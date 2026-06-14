import { Sofa, BookImage, ChartNoAxesCombined, User } from "lucide-react";
import { Link } from "react-router-dom";
import ChartBar from "@/components/common/ChartBar";
import AvatarGroup from "@/components/common/AvatarGroup";

const Dashboard = () => {
  const sales = [
    {
      icon: <Sofa />,
      name: "Bookings",
      number: 184,
      progress: <progress value={0.5} />,
      isColor: true,
    },
    {
      icon: <BookImage />,
      name: "Website Visits",
      number: "75,521",
      progress: <progress value={0.5} />,
      isColor: false,
    },
    {
      icon: <ChartNoAxesCombined />,
      name: "Revenue",
      number: "$34,245",
      progress: <progress value={0.5} />,
      isColor: true,
    },
    {
      icon: <User />,
      name: "Followers",
      number: "245+",
      progress: <progress value={0.5} />,
      isColor: false,
    },
  ];
  const locations = [
    {
      country: "USA",
      flag: "https://images.unsplash.com/photo-1562884328-39da45501a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW4lMjBmbGFnfGVufDB8fDB8fHww",
      number: "2.920",
      percent: "53.23%",
    },
    {
      country: "Germany",
      flag: "https://images.unsplash.com/photo-1676970121820-4219064a72af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdlcm1hbnklMjBmbGFnfGVufDB8fDB8fHww",
      number: "1.920",
      percent: "20.23%",
    },
    {
      country: "Australia",
      flag: "https://images.unsplash.com/photo-1563698876759-5388be71113b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      number: 760,
      percent: "10.23%",
    },
    {
      country: "United Kingdom",
      flag: "https://images.unsplash.com/photo-1678371271544-d7394c57b3a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdGVkJTIwa2luZ2RvbSUyMGZsYWd8ZW58MHx8MHx8fDI%3D",
      number: 690,
      percent: "7.87%",
    },
    {
      country: "Romania",
      flag: "https://images.unsplash.com/photo-1676286155294-4bba34d8ca78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9tYW5pYSUyMGZsYWd8ZW58MHx8MHx8fDI%3D",
      number: 600,
      percent: "5.94%",
    },
    {
      country: "Brasil",
      flag: "https://images.unsplash.com/photo-1676899069914-373ae0b13d3e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJhc2lsJTIwZmxhZ3xlbnwwfHwwfHx8Mg%3D%3D",
      number: 550,
      percent: "4.34%",
    },
    {
      country: "England",
      flag: "https://images.unsplash.com/photo-1494419470281-65c2b001a42b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW5nbGFuZCUyMGZsYWd8ZW58MHx8MHx8fDI%3D",
      number: 760,
      percent: "10.35%",
    },
    {
      country: "Mexico",
      flag: "https://images.unsplash.com/photo-1609779858641-af32f73effa6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      number: 760,
      percent: "10.35%",
    },
    {
      country: "France",
      flag: "https://images.unsplash.com/photo-1675855508131-798d42b6f1ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhbmNlJTIwZmxhZ3xlbnwwfHwwfHx8Mg%3D%3D",
      number: 760,
      percent: "10.35%",
    },
  ];
  const booking = [
    {
      images: [
        {
          src: "https://images.unsplash.com/photo-1778483154373-6044a7867656?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      month: "This month",
      time: "05 - 10",
      avatar: <AvatarGroup />,
    },
    {
      images: [
        {
          src: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eSUyMGJ1aWxkaW5nfGVufDB8fDB8fHwy",
        },
        {
          src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3J8ZW58MHx8MHx8fDI%3D",
        },
        {
          src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1092&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
      month: "February",
      time: "First Week",
      avatar: <AvatarGroup />,
    },
    {
      images: [
        {
          src: "https://images.unsplash.com/photo-1595037935521-15ce2282a03e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFydHklMjBkZWNvcnxlbnwwfHwwfHx8Mg%3D%3D",
        },
        {
          src: "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fHwy",
        },
      ],
      month: "This month",
      time: "05 - 10",
      avatar: <AvatarGroup />,
    },
  ];
  return (
    <div className="grid grid-cols-7 gap-5 h-full border-black">
      <div className="col-span-5 h-full flex flex-col gap-5 justify-between">
        <div className="h-full flex flex-col justify-between gap-5 ">
          <div className="h-full flex justify-between gap-3">
            <div className="h-[80%] bg-[#D3E8EA] w-full rounded-2xl p-4">
              <div>
                <h2 className="font-bold">Website Views</h2>
                <p className="text-[12px]">Last Campaign Performance</p>

                <div>
                  <ChartBar />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#D3E8EA] h-full rounded-2xl p-6">
            <h2 className="font-bold">Daily Sales</h2>
            <div className="gap-2 flex w-full h-full">
              {sales.map((sale) => (
                <div key={sale.name} className="w-full  h-[90%]">
                  <div className="flex flex-row pl-6 justify-start gap-1 h-[70%] items-center">
                    <div
                      className={`${sale.isColor ? ("text-[#EDA748]", "bg-[#FDA743]") : "bg-[#00A63E]"} p-2 rounded-sm text-white`}
                    >
                      {sale.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{sale.name}</h3>
                      <p className="text-[#7CCE81]">{sale.number}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-200 h-100 rounded-2xl flex flex-col p-6">
          <div className="flex flex-row justify-between mb-0.5">
            <h2 className="font-bold">Active Booking</h2>
            <p>
              <Link className="text-[#7CCE81] hover:underline">Check All</Link>
            </p>
          </div>
          <div className="flex h-[90%]">
            {booking.map((book) => (
              <div key={book.month}>
                <div>
                  {book.images.map((image, index) => (
                    <img key={index} src={image.src} alt={book.month} />
                  ))}
                </div>
                <div>
                  <h2>{book.month}</h2>
                  <p>{book.time}</p>
                  <AvatarGroup />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right-bar */}
      <div className="col-span-2  bg-gray-200 rounded-2xl p-6 mb-4">
        <h2 className="font-bold text-2x">Global Sales by Top Locations</h2>
        <div className="m-4">
          {locations.map((location) => (
            <div
              key={location.country}
              className="flex border-b-2 border-[#006766] pb-1.5 pt-1.5 mb-5 justify-between w-full h-full "
            >
              <img
                src={location.flag}
                alt={location.country}
                className="w-9 h-auto rounded-full"
              />
              <p className="font-semibold">{location.country}</p>
              <p>{location.number}</p>
              <p>{location.percent}</p>
            </div>
          ))}
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1722680001761-75450b9f085e?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="map pin"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
