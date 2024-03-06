import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import userThree from '../images/user/user-03.png';
import DefaultLayout from '../layout/DefaultLayout';

const Shipping = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Shipping" />
      </div>
    </DefaultLayout>
  );
};

export default Shipping;
