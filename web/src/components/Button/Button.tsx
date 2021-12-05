const Button = ({ name, onClick }) => {
  return (
    <div className="btn hidden md:block p-4 rounded-lg bg-secondary text-primary">
      <button onClick={onClick}> {name}</button>
    </div>
  )
}

export default Button
