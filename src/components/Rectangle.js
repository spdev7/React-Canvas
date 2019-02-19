
const Rectangle = (props) => {
    console.log(props);
    const {ctx,x, y, width, height,colour} = props;

    ctx.fillStyle = `${colour}`;
    ctx.fillRect(x, y, width, height);
}



export default Rectangle