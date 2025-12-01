"use client";
import CustomButton from "@/components/common/custom-button";
import RHFInput from "@/components/rhf/rhf-input";
import RHFPasswordInput from "@/components/rhf/rhf-password-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  profileSchema,
  ProfileSchemaType,
} from "@/schema/profile/profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Session } from "next-auth";
import { useForm } from "react-hook-form";

const ProfileForm = ({ userData }: { userData: Session }) => {
  const form = useForm<ProfileSchemaType>({
    defaultValues: {
      address: "",
      confirmPassword: "",
      email: userData.user.email ?? "",
      firstName: userData.user.name ?? "",
      lastName: "",
      newPassword: "",
      password: "",
    },
    resolver: zodResolver(profileSchema),
  });
  const submitHandler = (data: ProfileSchemaType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="grid gap-4"
      >
        <div className="grid md-lg:grid-cols-2 gap-3 md-lg:gap-14 self-start items-start">
          <RHFInput
            name="firstName"
            placeholder="Md"
            label="First Name"
            isRequired={false}
            inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
          />

          <RHFInput
            name="lastName"
            placeholder="Rimel"
            label="Last Name"
            isRequired={false}
            inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
          />
        </div>

        <div className="grid md-lg:grid-cols-2 gap-3 md-lg:gap-14 items-start">
          <RHFInput
            name="email"
            placeholder="rimel111@gmail.com"
            label="Email"
            isRequired={false}
            inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
          />

          <RHFInput
            name="address"
            placeholder="Kingston,5236, United State"
            label="Address"
            isRequired={false}
            inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
          />
        </div>
        <RHFPasswordInput
          name="password"
          placeholder="Current Password"
          label="Password"
          isRequired={false}
          inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
        />

        <RHFPasswordInput
          name="newPassword"
          placeholder="New Password"
          isRequired={false}
          inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
        />
        <RHFPasswordInput
          name="confirmPassword"
          placeholder="Confirm Password"
          isRequired={false}
          inputClassName="shadow-none py-5 border-none bg-[#f5f5f5] rounded-sm"
        />

        <div className="w-full flex justify-end gap-4">
          <Button
            variant={"ghost"}
            className="font-normal"
            onClick={() => form.reset({ email: "", firstName: "" })}
          >
            Cancel
          </Button>

          <CustomButton
            label="Save Changes"
            className="py-5"
          />
        </div>
      </form>
    </Form>
  );
};

export default ProfileForm;
