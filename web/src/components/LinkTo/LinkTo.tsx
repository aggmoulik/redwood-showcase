const LinkTo = ({ name, linkTo, invert = false, style = {} }) => {
  const light = 'bg-secondary text-primary'
  const dark = 'bg-primary text-secondary'
  const styleButton = {
    width: 'fit-content',
    ...style,
  }
  return (
    <div
      className={`btn !ml-4 hidden md:block p-4 rounded-lg ${
        invert ? dark : light
      }`}
      style={styleButton}
    >
      <a href={linkTo}>{name}</a>
    </div>
  )
}

export default LinkTo
