function switchOn(){
    document.getElementById("bulbImg").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImg") .src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";

    document.getElementById("switchStatus") .textContent = "Switched ON";
    document.getElementById("onSwitch") .style.backgroundColor = "rgba(30, 238, 51, 1)";
    document.getElementById("offSwitch") .style.backgroundColor = "#e0d4d4ff";
}

function switchOff(){
    document.getElementById("bulbImg").src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImg") .src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";

    document.getElementById("switchStatus") .textContent = "Switched OFF";
    document.getElementById("onSwitch") .style.background = "rgba(218, 212, 212, 1)";
    document.getElementById("offSwitch") .style.background = "rgba(219, 40, 34, 1)";
}
