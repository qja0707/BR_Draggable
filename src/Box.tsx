type boxProps = {
  style:Object
};
function Box(props: boxProps) {
  return <div style={props.style} />;
}
export default Box;
