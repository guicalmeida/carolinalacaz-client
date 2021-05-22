import * as S from './styles'

type InputProps = {
  title: string
  type: string
  name: string
}

type FormProps = {
  formName: string
  fields: InputProps[]
}

const Input = ({ title, type, name }: InputProps) => {
  return (
    <S.Label>
      {title}
      <S.Input type={type} name={name} required />
    </S.Label>
  )
}

const Form = ({ formName, fields }: FormProps) => {
  return (
    <S.Container>
      <form
        name={formName}
        method="post"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <S.Input type="hidden" name="form-name" value={formName} />
        <div>
          {fields.map((field) => {
            return (
              <Input
                key={field.name}
                title={field.title}
                type={field.type}
                name={field.name}
              />
            )
          })}
        </div>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit"> Enviar</button>
      </form>
    </S.Container>
  )
}
export default Form
