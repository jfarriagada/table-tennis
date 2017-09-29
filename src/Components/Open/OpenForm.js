import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Requerido.'
  } else if (values.name.length > 70) {
    errors.name = 'Debe contener 70 caracteres o menos.'
  }
  if (!values.city) {
    errors.city = 'Requerido.'
  } else if (values.city.length > 70) {
    errors.city = 'Debe contener 70 caracteres o menos.'
  }
  if (!values.category) {
    errors.category = 'Requerido.'
  } else if (values.category.length > 70) {
    errors.category = 'Debe contener 70 caracteres o menos.'
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) =>
  <div className="field">
    <label className="label">
      {label}
    </label>
    <div>
     <div className="control">
        <input className="input" {...input} placeholder={label} type={type} />
      </div>
      {touched &&
        ((error &&
          <p className="help is-danger">
            {error}
          </p>) ||
          (warning &&
            <p className="help is-danger">
                {warning}
            </p>))}
    </div>
  </div>

const OpenForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" type="text" component={renderField} label="Nombre" />
      <Field name="city" type="text" component={renderField} label="Cuidad" />
      <Field name="category" type="text" component={renderField} label="Categoria" />      
      <div className="control">
        <button className="button is-primary" type="submit" disabled={submitting}>
          Ir al Campeonato
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(OpenForm)
