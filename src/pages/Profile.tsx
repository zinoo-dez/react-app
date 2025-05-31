import ProfileHeader from "../components/ProfileHeader";
import ProfileContent from "../components/ProfileContent";

export default function Profile() {
     return (
          <div className="min-h-screen">
               {/* <!-- Author Profile Header --> */}
               <ProfileHeader />

               {/* <!-- Main Content --> */}
               <ProfileContent />


          </div>
     )
}
