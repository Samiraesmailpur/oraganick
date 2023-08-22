import "./Form.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { fullNameRegex, emailRegex, numberRegex } from "../../utils/regex";

const OrderForm = ({ handleFormSubmit }) => {
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .matches(
        fullNameRegex,
        "Please enter a valid full name. It should start with a capital letter, followed by at least 3 lowercase letters, and optionally another capitalized name."
      )
      .required("Please enter your fullname"),
    number: Yup.string()
      .matches(numberRegex, "Please enter a valid phone number")
      .required("Please enter your phone number"),
    message: Yup.string(),
    address: Yup.string().required("Please enter your address"),
    email: Yup.string()
      .matches(emailRegex, "Please enter a valid email address")
      .required("Please enter your email address"),
  });

  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          address: "",
          number: "",
          email: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off" className="form">
            <div className="form__field">
              <label className="form__label">Full Name*</label>
              <Field
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                className="form__input"
              />
              <div className="form__error">
                {errors.fullName && touched.fullName ? (
                  <p> {errors.fullName}</p>
                ) : null}
              </div>
            </div>
            <div className="form__field">
              <label className="form__label">Your Email*</label>
              <Field
                type="text"
                name="email"
                placeholder="example@yourmail.com"
                className="form__input"
              />
              <div className="form__error">
                {errors.email && touched.email ? <p> {errors.email}</p> : null}
              </div>
            </div>
            <div className="form__field">
              <label className="form__label">Address*</label>
              <Field
                type="text"
                name="address"
                placeholder="your company address"
                className="form__input"
              />
              <div className="form__error">
                {errors.address && touched.address ? (
                  <p> {errors.address}</p>
                ) : null}
              </div>
            </div>
            <div className="form__field">
              <label className="form__label">Phone number*</label>
              <Field
                type="text"
                name="number"
                placeholder="Enter your phone"
                className="form__input"
              />
              <div className="form__error">
                {errors.number && touched.number ? (
                  <p>{errors.number}</p>
                ) : null}
              </div>
            </div>
            <div className="form__field form__field--full-width">
              <label className="form__label">Message</label>
              <Field
                as="textarea"
                name="message"
                placeholder="some extra information"
                className="form__textarea"
              />
              <div className="form__error">
                {errors.message && touched.message ? (
                  <p>{errors.message}</p>
                ) : null}
              </div>
            </div>
            <button type="submit" className="form__button">
              Confirm
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default OrderForm;
