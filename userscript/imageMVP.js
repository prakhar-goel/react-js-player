waitForKeyElements("#video-player_html5_api", actionFunction);
function addimage(url) {
    var image = document.createElement("img");
    image.src = url;
    return image;
}
function addbutton(id, text) {
    let button = document.createElement("button");
    button.setAttribute("id", id);
    button.innerHTML = text;
    button.style.cssText = 'width:80%;vertical-align: bottom;pointer-events: auto;pointer-events: auto;background-color: #45A8FC;border: none;color: white;padding: 10px 10px;text-align: center;text-decoration: none;display: inline-block;font-size: 12px;margin: 4px 4px 4px 4px;cursor: pointer';
    return button;
}
function create_text(text) {
    var para = document.createElement("P");
    para.style.cssText = 'text-align:left';
    para.style.color = "black";

    var textvar = document.createTextNode(text);
    para.appendChild(textvar);

    return para;
}
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//===============1st screen set Screens======================================================================================
var homeScreenforad1 = document.createElement('div');
homeScreenforad1.setAttribute("id", "adspaceforAd1");
homeScreenforad1.style.cssText = 'pointer-events: auto;float: right;position:relative;width:30%;height:80%;opacity:0.9;z-index:1;background:rgba(56,255,255,0.0);top:0;left:0;pointer-events:none;display:block';
homeScreenforad1.style.marginTop = "540px";
homeScreenforad1.className = "testele";
//inserting ads screen
var video = document.getElementById("video-player_html5_api");
insertAfter(video, homeScreenforad1);

//add div
var firstAdforAd1 = document.createElement('div');
firstAdforAd1.setAttribute("id", "firstadidforAd1");
firstAdforAd1.style.cssText = 'cursor: pointer;margin:10px;position:relative;width:92%;height:30%;opacity:1;z-index:1;background:rgba(56,255,255,0.0);top:0;left:0;pointer-events:none;display:block';
//image
var imageforAd1 = addimage('https://i.ibb.co/KGHQvP9/7c8ee3be-bd11-4ce0-bd8c-c10cd5095d101628840354064-Prakhya-Women-Yellow-Yoke-Design-Pleated-Kurtiwith.jpg');
imageforAd1.style.cssText = 'pointer-events: auto;cursor: pointer;position:absolute;left:60%;top:0%;cursor:pointer;float:center;width:40%;height:80%';

var titleofAd1 = create_text("Mini ka favourite");
titleofAd1.style.fontWeight = "900";
titleofAd1.style.color = "white";
titleofAd1.style.fontSize = "x-large";
titleofAd1.style.marginLeft = "10px";
titleofAd1.style.marginTop = "8px";
titleofAd1.style.marginBottom = "5px";

var title2ndlineofAd1 = create_text("Yellow Kurta");
title2ndlineofAd1.style.fontWeight = "600";
title2ndlineofAd1.style.color = "white";
title2ndlineofAd1.style.marginLeft = "10px";
title2ndlineofAd1.style.fontSize = "large";

var title3rdlineofAd1 = create_text("with dupatta");
title3rdlineofAd1.style.fontWeight = "600";
title3rdlineofAd1.style.color = "white";
title3rdlineofAd1.style.marginLeft = "10px";
title3rdlineofAd1.style.fontSize = "large";

//button
let buttonforad1 = addbutton("buttonid1", "ORDER NOW");
// ======================================================1st screen done===========================



// ==========================================screen 2 ===================================
var orderScreenForAd1 = document.createElement('div');
orderScreenForAd1.setAttribute("id", "orderScreenForAd1id");
orderScreenForAd1.style.cssText = 'width:80%;height:90%;position:absolute;top:12%;left:20%;z-index:1;background:rgba(56,255,255,0.0);pointer-events:none;display:block';


//button for payment
let placeorderbuttonAd1 = document.createElement("button");
placeorderbuttonAd1.setAttribute("id", "podrbutton");
placeorderbuttonAd1.innerHTML = "Pay Now";
placeorderbuttonAd1.style.cssText = 'width:79%;vertical-align: bottom;pointer-events: auto;pointer-events: auto;background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer';

var orderscreenUIimage = addimage('https://i.ibb.co/ZHChFxM/Group-170.png');
orderscreenUIimage.style.cssText = 'position:relative;padding-top:5px;padding-left:5px;padding-bottom:5px;padding-right:5px;height:80%';

orderScreenForAd1.appendChild(orderscreenUIimage);
// ===============================================================2nd done=========================



//================================3rd re=============================
//==========payment screen
//button for payment
var paymentScreenForad1div = document.createElement('div');
paymentScreenForad1div.setAttribute("id", "paymentScreenForad1id");
paymentScreenForad1div.style.cssText = 'width:80%;height:90%;position:absolute;top:12%;left:20%;z-index:1;background:rgba(56,255,255,0.0);pointer-events:none;display:block';


//button for payment
let paymentbuttonforAd1 = document.createElement("button");
paymentbuttonforAd1.setAttribute("id", "paymentbuttonforAd1id");
paymentbuttonforAd1.innerHTML = "Pay Now";
paymentbuttonforAd1.style.cssText = 'width:77%;vertical-align: bottom;pointer-events: auto;pointer-events: auto;background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer';

var paymentScreenForad1pic = addimage('https://i.ibb.co/QFHPHmQ/Scroll-Group-6.png');
paymentScreenForad1pic.style.cssText = 'position:relative;padding-top:5px;padding-left:5px;padding-bottom:5px;padding-right:5px;height:80%';

paymentScreenForad1div.appendChild(paymentScreenForad1pic);
// ===========================================================3d set=========================


//====================================Button Action====================================================================
paymentbuttonforAd1.addEventListener("click", function () {
    paymentScreenForad1div.style.display = "none";
    alert("Order Placed");
    video.play();
});

var paymentdetailsforAd1 = function () {
    document.getElementById("paymentScreenForad1id").appendChild(paymentbuttonforAd1);
};

//action after placeorder button click
placeorderbuttonAd1.addEventListener("click", function () {
    orderScreenForAd1.style.display = "none";
    insertAfter(video, paymentScreenForad1div);
    paymentdetailsforAd1();
});

var orderdetailsforAd1 = function () {
    document.getElementById("orderScreenForAd1id").appendChild(placeorderbuttonAd1);
};

//action after order now button click
imageforAd1.addEventListener("click", function () {
    video.pause();
    homeScreenforad1.style.display = "none";
    insertAfter(video, orderScreenForAd1);
    orderdetailsforAd1();
});


//================================ADDING elements===================================================================
document.getElementById("adspaceforAd1").appendChild(firstAdforAd1);
document.getElementById("firstadidforAd1").appendChild(titleofAd1);
document.getElementById("firstadidforAd1").appendChild(title2ndlineofAd1);
document.getElementById("firstadidforAd1").appendChild(title3rdlineofAd1);
document.getElementById("firstadidforAd1").appendChild(imageforAd1);
