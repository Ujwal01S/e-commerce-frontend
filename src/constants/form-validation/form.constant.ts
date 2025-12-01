interface IFormValidationMessage {
  readonly emailOrPhone: string;
  readonly password: string;
  readonly name: string;
  readonly message: string;
  readonly coupon: string;
  readonly companyName: string;
  readonly location: string;
  readonly streetAddress: string;
  readonly email: string;
  readonly phone: string;
  readonly newPassword: string;
  readonly confirmPassword: string;
  readonly specialPassword: string;
}

export const formValidationMessage: IFormValidationMessage = {
  emailOrPhone: "Email or Phone number is required.",
  password: "Password is required and must be atleast 6 character.",
  name: "Name is required and must be atleast 4 character.",
  message:
    "Message is required and message must be atleast 10 character long and maximum of 100 character.",
  coupon: "Coupon is required",
  companyName: "Company Name is required",
  email: "Email is requried",
  location: "Town/City is required",
  phone: "Phone Number is required",
  streetAddress: "Street Address is required",
  newPassword: "New Password is required",
  confirmPassword: "Confirm Password is requried",
  specialPassword:
    "Password must contain atleast one special character and number",
};

export const passwordRegex =
  /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;
