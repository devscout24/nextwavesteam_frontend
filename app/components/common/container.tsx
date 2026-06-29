 

export default function Container({children}: {children: React.ReactNode}) {
  return (
    <div className="max-w-330 mx-auto px-2 ">
      {children}
    </div>
  )
}