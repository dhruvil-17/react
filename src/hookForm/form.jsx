import { useForm } from "react-hook-form"

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-3xs gap-2">

          {/* <input
            type="text"
            {...register("username", { required: true, minLength: 3, maxLength: 8 })}
            placeholder="username"
            className="border p-2"
          /> */}

          <input
            type="text"
            {...register("username", { required:{value:true , message:"username is required"} , minLength: {value:3 , message:"min length is 3"}, maxLength: {value:8 , message:"max length is 8"} })}
            placeholder="username"
            className="border p-2"
          />
          {/* convert minlength maxlength into objects to use them seperately to handle errors */}
            {errors.username && <div className="text-red-500">{errors.username.message}</div>}
            {/* no need to add different blocks to display error messages */}
            



          {/* {errors.username?.type === "required" && (
            <div className="text-red-500">Username is required</div>
          )} */}
          {/* {errors.username?.type === "minLength" && (
            <div className="text-red-500">Username must be at least 3 characters long</div>
          )}
          {errors.username?.type === "maxLength" && (
            <div className="text-red-500">Username cannot exceed 8 characters</div>
          )} */}

          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="password"
            className="border p-2"
          />
          {errors.password?.type === "required" && (
            <div className="text-red-500">Password is required</div>
          )}

          <input type="submit" className="border p-2 cursor-pointer bg-blue-500 text-white rounded" />
        </form>
      </div>
    </>
  );
}


