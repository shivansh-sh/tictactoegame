interface blockprops{
    value : string | null,
    onclick?: () => void
}
function Block(props : blockprops) {
  return (
    <div onClick={props.onclick} className="block">{props.value}</div>
  )
}

export default Block;