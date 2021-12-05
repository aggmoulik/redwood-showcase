import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const ProjectForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.project?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.project?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="email" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.project?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="website"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Website
        </Label>
        <TextField
          name="website"
          defaultValue={props.project?.website}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="website" className="rw-field-error" />

        <Label
          name="github_url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Github url
        </Label>
        <TextField
          name="github_url"
          defaultValue={props.project?.github_url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="github_url" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        <TextField
          name="description"
          defaultValue={props.project?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="description" className="rw-field-error" />

        <Label
          name="twitter"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Twitter
        </Label>
        <TextField
          name="twitter"
          defaultValue={props.project?.twitter}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="twitter" className="rw-field-error" />

        <Label
          name="github"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Github
        </Label>
        <TextField
          name="github"
          defaultValue={props.project?.github}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="github" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            {'Submit the Project'}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProjectForm
