import Header from 'src/components/Header/Header'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <main className="p-4 md:p-8 w-full max-w-screen-xxl flex flex-col bg-primary text-text overflow-x-hidden h-screen">
      <Header />
      {children}
    </main>
  )
}

export default DefaultLayout
