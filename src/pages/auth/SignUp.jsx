import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { ROUTE } from "utils";
import _ from "lodash";
import { useAuth } from "providers";
import clsx from "clsx";

const schema = yup
  .object({
    firstName: yup.string().required("First name is required."),
    lastName: yup.string().required("Last name is required."),
    email: yup
      .string()
      .email("Email is invalid.")
      .required("Email is required."),
    password: yup
      .string()
      .required("Password is required")
      .matches(/^(?=.*[0-9])/, "Needs at least 1 number")
      .matches(
        /^(?=.*[\^$*.[\]{}()?"!@#%&/\\,><':;|_~`=+\- ])/,
        "Needs at least 1 special character"
      )
      .matches(/^(?=.*[a-z])/, "Needs at least 1 lowercase letter")
      .matches(/^(?=.*[A-Z])/, "Needs at least 1 uppercase letter")
      .min(8, "Must be at least 8 chars")
      .max(24, "Must be less than 256 chars"),
  })
  .required();

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john@doe.com",
      password: "Abcdef1@#",
    },
  });
  const { isLoading, signUp: onSubmit } = useAuth();

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="/assets/images/CardioPhi-logos_colored.png"
          alt="CardioPhi"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign up
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    autoComplete="given-name"
                    className="shadow-sm focus:ring-0 focus:ring-offset-0 focus:border-[#066A94] block w-full sm:text-sm border-gray-300"
                    {...register("firstName")}
                  />
                </div>
                <p
                  className={clsx(
                    "mt-2 text-sm text-red-600",
                    isSubmitted ? "visible" : "invisible"
                  )}
                >
                  {_.get(errors, "firstName.message", "")}
                </p>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    autoComplete="family-name"
                    className="shadow-sm focus:ring-0 focus:ring-offset-0 focus:border-[#066A94] block w-full sm:text-sm border-gray-300"
                    {...register("lastName")}
                  />
                </div>
                <p
                  className={clsx(
                    "mt-2 text-sm text-red-600",
                    isSubmitted ? "visible" : "invisible"
                  )}
                >
                  {_.get(errors, "lastName.message", "")}
                </p>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#066A94] sm:text-sm"
                  {...register("email")}
                />
              </div>
              <p
                className={clsx(
                  "mt-2 text-sm text-red-600",
                  isSubmitted ? "visible" : "invisible"
                )}
              >
                {_.get(errors, "email.message", "")}
              </p>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:border-[#066A94] sm:text-sm"
                  {...register("password")}
                />
              </div>
              <p
                className={clsx(
                  "mt-2 text-sm text-red-600",
                  isSubmitted ? "visible" : "invisible"
                )}
              >
                {_.get(errors, "password.message", "")}
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-[#066A94] hover:opacity-75 focus:outline-none focus:ring-0 focus:ring-offset-0"
                disabled={isLoading}
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            <div className="mt-6">
              <Link to={ROUTE.AUTH_SIGN_IN}>
                <button className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-[#066A94] hover:opacity-75 focus:outline-none focus:ring-0 focus:ring-offset-0">
                  Sign in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
