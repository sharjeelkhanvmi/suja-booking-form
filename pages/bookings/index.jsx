import { Formik, Field, Form } from "formik";
import Cookies from "js-cookie";
let formdata = Cookies.get('formData');
const data = formdata ? JSON.parse(formdata) : null;
const index = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={data}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          Cookies.set('formData', JSON.stringify(values));
          let formdata = Cookies.get('formData');
          console.log(formdata);
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default index;
