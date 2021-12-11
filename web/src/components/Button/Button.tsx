type ButtonProps = {
  name: string
  onClick: () => Promise<void>
  classes?: string
}

const Button = ({ name, onClick, classes }: ButtonProps) => {
  return (
    <div
      className={`btn hidden md:block p-4 rounded-lg bg-secondary text-primary ${classes}`}
      style={{ width: 'fit-content' }}
    >
      <button onClick={onClick}> {name}</button>
    </div>
  )
}

export default Button
