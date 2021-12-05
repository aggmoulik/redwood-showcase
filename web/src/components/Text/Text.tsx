const Text = ({ name, classes = '' }) => {
  return <div className={`text-secondary ${classes}`}>{name}</div>
}

export default Text
