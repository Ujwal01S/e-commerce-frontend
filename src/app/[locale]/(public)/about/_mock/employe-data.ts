export interface IEmployeProps {
  name: string;
  role: string;
  imageUrl: string;
}

export const employeData: IEmployeProps[] = [
  { name: "Tom Cruise", imageUrl: "/employe1.jpg", role: "Founder & Chairman" },
  { name: "Emma Watsom", imageUrl: "/employe2.jpg", role: "Managing Director" },
  { name: "Will Smith", imageUrl: "/employe3.jpg", role: "Product Designer" },
  { name: "Jadan Smith", imageUrl: "/employe4.jpg", role: "Product Creator" },
  { name: "Random Guy", imageUrl: "/employe5.jpg", role: "Music Creator" },

  { name: "Sparrow Smith", imageUrl: "/employe3.jpg", role: "Actor" },
  { name: "Panther", imageUrl: "/employe1.jpg", role: "Designer Director" },
  {
    name: "Peter Griffen",
    imageUrl: "/employe4.jpg",
    role: "Comedian Director",
  },

  {
    name: "Stewie Griffen",
    imageUrl: "/employe2.jpg",
    role: "Lost Direction",
  },
];
