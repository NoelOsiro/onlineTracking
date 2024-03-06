import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { ProfileForm } from '../components/Forms/ProfileForm';
import { UploadForm } from '../components/Forms/UploadForm';
import DefaultLayout from '../layout/DefaultLayout';



const Settings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Profile" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <ProfileForm />
          </div>
          <div className="col-span-5 xl:col-span-2">
            <UploadForm/>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
