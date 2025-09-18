import { Button, Form as BootstrapForm } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as yup from "yup";
import { login } from "../redux/slices/authSlice";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[^A-Za-z0-9]/, "Password must contain at least one symbol"),
});

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "wW2@dedededd",
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(login(data));
    navigate("/home");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <FormikForm>
          <BootstrapForm.Group className="mb-3" controlId="formBasicEmail">
            <Field
              name="email"
              type="email"
              placeholder="Enter email"
              as={BootstrapForm.Control}
              isInvalid={touched.email && !!errors.email}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3" controlId="formBasicPassword">
            <Field
              name="password"
              type="password"
              placeholder="Password"
              as={BootstrapForm.Control}
              isInvalid={touched.password && !!errors.password}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3" controlId="formBasicCheckbox">
            <Field
              name="keepSignedIn"
              type="checkbox"
              label="Keep me signed in"
              as={BootstrapForm.Check}
            />
          </BootstrapForm.Group>

          <Button
            variant="dark"
            type="submit"
            className="w-100 border-0 rounded-0"
          >
            Sign In
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default LoginForm;
