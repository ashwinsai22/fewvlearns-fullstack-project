import Jane from "./assets/testimonials-images/jane.jpg";
import Chris from "./assets/testimonials-images/chris.jpg";
import Leslie from "./assets/testimonials-images/Leslie.jpg";
import Mike from "./assets/testimonials-images/mike.jpg";
import Emily from "./assets/testimonials-images/Emily.png";

const people = [
  {
    name: "Leslie Alexander",
    role: "Front-End Developer",
    imageUrl: Leslie,
  },
  {
    name: "Jane Cooper",
    role: "AWS Certified Solutions Architect",
    imageUrl: Jane,
  },
  {
    name: "Mike Jhonson",
    role: "Terraform Expert",
    imageUrl: Mike,
  },
  {
    name: "Emily Davis",
    role: "DevOps Engineer",
    imageUrl: Emily,
  },
  {
    name: "Chris Wilson",
    role: "Software Engineer",
    imageUrl: Chris,
  },
];

export default function Team() {
  return (
    <div className="pt-36 bg-black">
      <div className="mx-auto container text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Our dedicated team
        </h2>
        <p className="mt-6 text-gray-400">
          FewvLearns has a team of passionate individuals who are dedicated to
          helping you learn new skills and advance your career.
        </p>
      </div>

      <div className="mx-auto flex justify-center items-center mt-12 max-w-6xl gap-x-8 gap-y-20 px-6 lg:px-8">
        <ul
          role="list"
          className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex flex-col items-center gap-x-6 sm:flex-row bg-[#141414] shadow-lg hover:shadow-red-600 md:px-8 rounded-2xl md:py-8 transform transition-transform duration-300 hover:scale-105 p-4">
                <img
                  alt={person.name}
                  src={person.imageUrl}
                  className="h-24 w-24 rounded-full"
                />

                <div className="text-center sm:text-left">
                  <h3 className="mt-4 text-base font-semibold leading-7 tracking-tight text-red-600 sm:mt-0">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-gray-400">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
