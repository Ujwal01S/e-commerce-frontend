import { BreadcrumbWithCustomSeparator } from "@/components/common/bread-crumb";
import ProfileFormCard from "./_components/profile-form";
import AccountSideBar from "./_components/side-bar";
import { getUserSession } from "@/app/api/auth/[...nextauth]/option";

const MyAccountPage = async () => {
  const session = await getUserSession();

  return (
    <div className="grid container gap-5 sm-md:gap-10 my-5 sm-md:my-14 px-4 md:px-0">
      <div className="sm-md:mb-4 flex justify-between items-center px-4 md:px-0">
        <BreadcrumbWithCustomSeparator />

        <p className="text-sm">
          Welcome!{" "}
          <span className="text-button-background">{session?.user.name}</span>
        </p>
      </div>

      <div className="grid sm:grid-cols-[20%_1fr] gap-6 md:gap-12 mx-4 md:mx-0">
        <AccountSideBar />

        <ProfileFormCard />
      </div>
    </div>
  );
};

export default MyAccountPage;
