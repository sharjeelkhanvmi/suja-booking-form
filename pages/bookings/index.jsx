import ThreeBoxes from '@/app/components/3boxes';
import { Formik, Field, Form } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
let formdata = Cookies.get('formData');
const data = formdata ? JSON.parse(formdata) : {postal_code: ''};
const index = () => {
  const router = useRouter()
  return (
    <div>
      <Formik
        initialValues={data}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          Cookies.set('formData', JSON.stringify(values));
          let formdata = Cookies.get('formData');
          // console.log(formdata);
          router.push('/bookings/addons')

          // alert(JSON.stringify(values, null, 2));
        }}
      >
        {/* <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" required/>

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" required/>

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="jane@acme.com" type="email" required/>
          <button type="submit">Submit</button>
        </Form> */}

        <Form>
        <div className="space-y-12 mx-auto max-w-5xl p-10 pb-0">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold lg:text-3xl leading-7 text-gray-900 text-center">
                Lets pass you fast. Where would you like your lessons to start?
            </h2>
            <div className="mt-10 grid">
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <Field
                    required="required"
                    type="text"
                    name="postal_code"
                    placeholder="Postal code"
                    id="postal_code"
                    className="block w-full rounded-md border-0 px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ... sm:text-sm sm:leading-6"
                  />
                </div>
                { ( <p className="text-red-500 text-sm mt-1"></p>)}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end  gap-x-6  max-w-5xl pb-10">
            <button
              type="button"
              className="text-sm font-semibold px-4 py-4 leading-6 text-gray-900"
            > Back to website
            </button>
            <button type="submit" className="bg-red-700 hover:bg-red-600 hover:text-white rounded-md  px-12 py-4 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ... focus-visible:outline-indigo-600"
            >
              Continue to Course{" "}
              <span className="" aria-hidden="true">
              </span>
            </button>
          </div>
          <ThreeBoxes/>
        </div>
      </Form> 
      </Formik>
    </div>
  );
};

export default index;
