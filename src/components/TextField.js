import React from 'react'
import { useField, ErrorMessage } from "formik";

const TextField = ({ name, label, ...props }) => {
    const [field, meta] = useField(name);
    return(
        <div className="mb-2">
        <label className="d-block text-sm font-bold" for={field.name}>
          {label}
        </label>
        <input
          className={`${
            meta.error && meta.touched ? "border-danger" : ""
          } border rounded w-full py-2 px-3 w-100`}
          {...field}
          {...props}
        />
        <ErrorMessage
          name={field.name}
          component="div"
          className="text-danger"
        />
      </div>
    )
}

export default TextField
