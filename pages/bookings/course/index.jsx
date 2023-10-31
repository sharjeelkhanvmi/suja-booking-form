import { Formik, Field, Form } from "formik";
import Footnote from '@/app/components/Footnote';
import Formnav from '@/app/components/Formnav';
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
          router.push('/bookings/course')

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
        <Formnav/>
        <div className="space-y-12 mx-auto max-w-[40%] pt-36 py-24">
          <div>
          <h2 class="font-semibold text-2xl text-gray-900 text-start">Lets pass you fast. Where would you like your lessons to start?</h2>
            <div className="mt-7 grid">
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <Field
                    required="required"
                    type="text"
                    name="postal_code"
                    placeholder="Postal code"
                    id="postal_code"
                    className="text-lg block w-full rounded-md border-0 px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
                  />
                </div>
                { ( <p className="text-black-500 text-sm mt-1"></p>)}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-content-center">
            {/* <button type="submit" className="bg-red-700 hover:bg-red-600 w-full hover:text-white rounded-md  px-12 py-4 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ... focus-visible:outline-indigo-600"
            >
              Continue to Course{" "}
              <span className="" aria-hidden="true">
              </span>
            </button> */}
               { <button type="submit" className="bg-theme-red-color hover:bg-red-900 w-full hover:text-white rounded-md mb-5 px-12 py-4 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ... focus-visible:outline-indigo-600"
            >
             <span class="flex items-center justify-center">Continue<span class="ml-4"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"></path></svg></span></span>
            </button> }
          </div>
        </div>
      </Form>
      </Formik>
      <Footnote/>
    </div>
  );
};

export default index;