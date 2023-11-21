var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var mouseEvent = "empty"
var lx,ly
var color = "red"
var widthofline = 3
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e) {
    mouseEvent="mouseDown"
    color = document.getElementById("color").value
    widthofline = document.getElementById("lineWidth").value

}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e) {
    mouseEvent="mouseUp"
}
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e) {
    mouseEvent="mouseLeave"
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e) {
    cx = e.clientX-canvas.offsetLeft
    cy = e.clientY-canvas.offsetTop
    if(mouseEvent=="mouseDown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = widthofline
        ctx.moveTo(lx,ly)
        ctx.lineTo(cx,cy)
        ctx.stroke()
    }
    lx=cx
    ly=cy
}
function erase() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

