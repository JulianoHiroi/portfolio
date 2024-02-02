type ButtonHoverBarProps = {
  text: string
  HandleOnClick: () => void
}

export default function ButtonHoverBar({
  text,
  HandleOnClick,
}: ButtonHoverBarProps) {
  return (
    <div>
      <button onClick={HandleOnClick}>{text}</button>
    </div>
  )
}
