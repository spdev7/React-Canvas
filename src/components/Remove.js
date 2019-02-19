
const Remove = (props) => {
    const {ctx,x, y, width, height,colour} = props;
    ctx.fillStyle = 'rgba(255,0,0)';
    ctx.clearRect(x, y, width, height,colour);
}



export default Remove