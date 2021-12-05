type Props = {
  features: Feature[]
}

type Feature = {
  icon: string
  name: string
  description: string
}

const Features = ({ features }: Props) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 px-20">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col justify-start p-20">
          <img src={feature.icon} alt={feature.name} className="my-2" />
          <h2 className="my-2 font-bold capitalize text-3xl">{feature.name}</h2>
          <p className="my-2 text-xl">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Features
