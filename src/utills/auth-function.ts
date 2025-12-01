import { mockLoginData } from "@/constants/form-validation/login.constant";

export const loginMockApi = async ({
  emailOrPhone,
  password,
}: {
  emailOrPhone: string;
  password: string;
}) => {
  const user = mockLoginData.find(
    (user) => user.email === emailOrPhone || user.phone === emailOrPhone,
  );
  if (!user || user.password !== password) {
    return { success: false };
  }
  return { success: true, data: user };
};
