document.addEventListener("mousemove", function (event) {
    let tooltip = document.getElementById("customPreview");
    
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "customPreview";
        tooltip.style.position = "absolute";
        tooltip.style.background = "white";
        tooltip.style.border = "1px solid black";
        tooltip.style.padding = "5px";
        tooltip.style.zIndex = "1000";
        tooltip.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
        tooltip.innerText = "這是我設定的預覽文字";  // 可以改成你要的內容
        document.body.appendChild(tooltip);
    }

    tooltip.style.left = event.pageX + "px";
    tooltip.style.top = event.pageY + "px";
});
