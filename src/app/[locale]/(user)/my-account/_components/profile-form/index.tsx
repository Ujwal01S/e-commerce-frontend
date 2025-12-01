import { getUserSession } from "@/app/api/auth/[...nextauth]/option";
import ProfileForm from "@/components/form/profile";

const ProfileFormCard = async () => {
  const session = await getUserSession();
  return (
    <div className="py-5 px-4 sm-md:px-18 shadow rounded-sm">
      <h3 className="text-button-background text-xl font-medium my-3">
        Edit Your Profile
      </h3>

      {session?.user && <ProfileForm userData={session} />}
    </div>
  );
};

export default ProfileFormCard;
