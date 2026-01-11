import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const userData = [
    [
      {
        id: 1,
        name: "Radhika",
        profileImg: "https://randomuser.me/api/portraits/women/1.jpg",
        city: "Delhi",
        age: 22,
        profession: "Frontend Developer",
      },
      {
        id: 2,
        name: "Aman",
        profileImg: "https://randomuser.me/api/portraits/men/2.jpg",
        city: "Mumbai",
        age: 25,
        profession: "Backend Developer",
      },
      {
        id: 3,
        name: "Sneha",
        profileImg: "https://randomuser.me/api/portraits/women/3.jpg",
        city: "Pune",
        age: 23,
        profession: "UI/UX Designer",
      },
      {
        id: 4,
        name: "Rahul",
        profileImg: "https://randomuser.me/api/portraits/men/4.jpg",
        city: "Bangalore",
        age: 28,
        profession: "Full Stack Developer",
      },
      {
        id: 5,
        name: "Neha",
        profileImg: "https://randomuser.me/api/portraits/women/5.jpg",
        city: "Jaipur",
        age: 24,
        profession: "Digital Marketer",
      },
      {
        id: 6,
        name: "Arjun",
        profileImg: "https://randomuser.me/api/portraits/men/6.jpg",
        city: "Chandigarh",
        age: 27,
        profession: "DevOps Engineer",
      },
      {
        id: 7,
        name: "Priya",
        profileImg: "https://randomuser.me/api/portraits/women/7.jpg",
        city: "Kolkata",
        age: 21,
        profession: "CSE Student",
      },
      {
        id: 8,
        name: "Vikram",
        profileImg: "https://randomuser.me/api/portraits/men/8.jpg",
        city: "Hyderabad",
        age: 29,
        profession: "Data Analyst",
      },
      {
        id: 9,
        name: "Anjali",
        profileImg: "https://randomuser.me/api/portraits/women/9.jpg",
        city: "Indore",
        age: 26,
        profession: "Product Manager",
      },
      {
        id: 10,
        name: "Rohit",
        profileImg: "https://randomuser.me/api/portraits/men/10.jpg",
        city: "Noida",
        age: 24,
        profession: "Mobile App Developer",
      },
    ],
  ];
  return (
    <>
      <Header />
      <div className="grid grid-cols-4 gap-6 mx-10 my-10">
        {userData[0].map((user) => (
          <Card
            key={user.id}
            name={user.name}
            profileImg={user.profileImg}
            city={user.city}
            age={user.age}
            profession={user.profession}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
