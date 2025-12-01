interface IMockLoginData {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
}

export const mockLoginData: IMockLoginData[] = [
  {
    id: "1",
    email: "test@test.com",
    name: "Tester1",
    password: "test1234",
    phone: "1023456789",
  },
  {
    id: "2",
    email: "admin@admin.com",
    name: "Tester2",
    password: "admin1234",
    phone: "9876543201",
  },
];
