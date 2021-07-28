window.addEventListener('DOMContentLoaded', () => {
    console.log("a");
    setTimeout(function(){
        var graphObj = document.getElementById("graph_object").contentDocument;
        var mainGraphArea = graphObj.getElementById("patch_2");
        var crosslineX = graphObj.getElementById("crosslineX").getElementsByTagName("path")[0];
        var crosslineY = graphObj.getElementById("crosslineY").getElementsByTagName("path")[0];
        var calculatedX;
        var calculatedY;
        var svgWidth , svgHeight , box;
        var boxWidth, boxHeight;
        box = document.getElementById("graph_object");
    mainGraphArea.addEventListener("mousemove",function(e){
        svgWidth = parseInt(graphObj.getElementsByTagName("svg")[0].getAttribute("width"),10);
        svgHeight = parseInt(graphObj.getElementsByTagName("svg")[0].getAttribute("height"),10);
        boxWidth = box.getBoundingClientRect().width;
        boxHeight = box.getBoundingClientRect().height;
        calculatedX = ((e.offsetX)/boxWidth*svgWidth);
        calculatedY = ((e.offsetY)/boxHeight*svgHeight);

        console.log("x:"+calculatedX+"y:"+calculatedY);
        crosslineX.setAttribute("d","M 0 "+calculatedY+"  L 864 "+calculatedY);
        crosslineY.setAttribute("d","M "+calculatedX+" 576  L "+calculatedX+" 0");
    });
    },3000);
    


});