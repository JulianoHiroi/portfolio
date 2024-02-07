import '../app/globals.css'

type ButtonHoverBarProps = {
  text: string
  id: string
  scrollToSection: (id: string) => void
}

export default function ButtonHoverBar({
  text,
  scrollToSection,
  id,
}: ButtonHoverBarProps) {
  const HandleOnClick = () => {
    scrollToSection(id)
  }

  return (
    <div className="button-bar hover:text-gray-300">
      <button onClick={HandleOnClick} className="">
        {text}
      </button>
      <span className="button-bar-span"></span>
    </div>
  )
}
