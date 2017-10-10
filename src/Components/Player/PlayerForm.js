import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Requerido.'
  } else if (values.name.length > 70) {
    errors.name = 'Debe contener 70 caracteres o menos.'
  }
  if (!values.club) {
    errors.club = 'Requerido.'
  } else if (values.club.length > 70) {
    errors.club = 'Debe contener 70 caracteres o menos.'
  }
  if (!values.category) {
    errors.category = 'Requerido.'
  } else if (values.category.length > 70) {
    errors.category = 'Debe contener 70 caracteres o menos.'
  }
  if (values.cabeza_serie === undefined) {
      console.log(values.cabeza_serie)
      values.cabeza_serie = false
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

const CheckBoxField = ({
  input,
  label,
  type,
  meta: { touched }
}) =>
  <div className="field">
    <label className="label">
      {label} <input className="checkbox" {...input} type={type} />
    </label>
  </div>

const PlayerForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" type="text" component={renderField} label="Nombre" />
      <Field name="club" type="text" component={renderField} label="Club" />
      <Field name="category" type="text" component={renderField} label="Categoria" /> 
      <Field name="cabeza_serie" type="checkbox" component={CheckBoxField} label="Cabeza de serie" />      
      <div className="control">
        <button className="button is-primary" type="submit" disabled={submitting}>
          Inscribir
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidationPlayer', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(PlayerForm)
