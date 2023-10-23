import { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Select, { StylesConfig } from "react-select";

const options = [
  { value: "reading", label: "Reading" },
  { value: "swimming", label: "Swimming" },
  { value: "Journaling", label: "Journaling" },
  { value: "Hiking", label: "Hiking" },
  { value: "Running ", label: "Running" },
];
function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [data, setData] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control my-3"
            id="exampleInputuser1"
            aria-describedby="userHelp"
            placeholder="Enter Username"
            {...register("text", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
          />

          {errors?.text && (
            <small id="user1Help" className="form-text text-danger fw-bold">
              Username is required
            </small>
          )}
        </div>

        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control my-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register("email", {
              required: true,
            })}
          />

          {errors?.email && (
            <small id="emailHelp" className="form-text text-danger fw-bold">
              Email is required
            </small>
          )}
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control  my-3"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password", {
              required: true,
              pattern: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
            })}
          />
          {errors?.password && (
            <small id="passHelp" className="form-text text-danger fw-bold">
              password is required
            </small>
          )}
        </div>
        <div className="my-3">
          <Select options={options} isMulti name="hobbies" />
        </div>

        <div className="form-check my-3 d-flex">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            {...register("checkbox", {
              required: true,
            })}
          />

          <label className="form-check-label mx-3" for="exampleCheck1">
            agree terms and conditions
          </label>
          {errors?.checkbox && (
            <small id="checkHelp" className="form-text text-danger fw-bold">
              Check required
            </small>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
}

export default SignIn;
