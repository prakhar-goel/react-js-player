waitForKeyElements("#video-player_html5_api", actionFunction);
function actionFunction(videodiv) {
    //================constants
    let oneTimeAd1 = true;
    let oneTimeAd2 = true;
    let oneTimeAd3 = true;
    //===========================================helper functions=================================================
    function addimage(url) {
        var image = document.createElement("img");
        image.src = url;
        return image;
    }

    function addbutton(id, text) {
        let button = document.createElement("button");
        button.setAttribute("id", id);
        button.innerHTML = text;
        button.style.cssText = 'height: 40px;border-radius: 5px;width:80%;left:7%;position:relative;pointer-events: auto;background-color: #4CAF50;border: none;color: white;padding: 10px 25px;text-align: center;text-decoration: none;display: inline-block;font-size: 15px;margin: 2px 2px;cursor: pointer';
        return button;
    }

    function addradiobutton(type, name, text) {
        var label = document.createElement("label");
        label.style.color = "black";

        var element = document.createElement("input");
        element.setAttribute("type", type);
        element.setAttribute("name", name);
        //element.setAttribute("align-items", flex-start);
        element.style.cssText = 'align-items: flex-start;margin-right : 60px;border: 5px; width: 5%; height: 0.8em;pointer-events: auto';

        label.appendChild(element);
        label.innerHTML += text;
        var br = document.createElement("br");
        label.appendChild(br);

        return label;
    }

    function create_text(text) {
        var para = document.createElement("P");
        para.style.cssText = 'text-align:left';
        para.style.color = "black";

        var textvar = document.createTextNode(text);
        para.appendChild(textvar);

        return para;
    }

    //function for inserting elements
    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }


    //===============Screens======================================================================================
    //home Screen
    var homeScreenforad1 = document.createElement('div');
    homeScreenforad1.setAttribute("id", "adspaceforAd1");
    homeScreenforad1.style.cssText = 'pointer-events: auto;float: right;position:relative;width:30%;height:80%;opacity:0.9;z-index:1;background:#000;top:0;left:0;pointer-events:none;display:block';
    homeScreenforad1.style.marginTop = "525px";
    homeScreenforad1.className = "testele";

    //order detail screen
    var orderButtonForAd1 = document.createElement('div');
    orderButtonForAd1.setAttribute("id", "orderButtonForAd1id");
    orderButtonForAd1.style.cssText = 'pointer-events: auto;margin-bottom:20px;float: right;position:relative;width:25%;height:92%;opacity:1;z-index:1;background:#000;top:0;left:0;pointer-events:none;display:block';
    orderButtonForAd1.className = "odrscreen";
    orderButtonForAd1.style.marginTop = "50px";
    orderButtonForAd1.style.borderRadius = "20px 20px 0px 0px";

    //payment screen
    var paymentScreenForad1 = document.createElement('div');
    paymentScreenForad1.setAttribute("id", "paymentScreenForad1id");
    paymentScreenForad1.style.cssText = 'pointer-events: auto;margin-bottom:20px;float: right;position:relative;width:25%;height:92%;opacity:1;z-index:1;background:#000;top:0;left:0;pointer-events:none;display:block';
    paymentScreenForad1.className = "pytscreen";
    paymentScreenForad1.style.marginTop = "50px";
    paymentScreenForad1.style.borderRadius = "20px 20px 0px 0px";



    //inserting ads screen
    var video = document.getElementById("video-player_html5_api");
    insertAfter(video, homeScreenforad1);


    //==============================ADS==========================================================================
    //First Ad
    var firstAdforAd1 = document.createElement('div');
    firstAdforAd1.setAttribute("id", "firstadidforAd1");
    firstAdforAd1.style.cssText = 'margin:10px;position:relative;width:92%;height:30%;opacity:1;z-index:1;background:#000;top:0;left:0;pointer-events:none;display:block';


    //=====================================Images================================================================
    //image of 1st order
    var imageforAd1 = addimage('https://i.ibb.co/KGHQvP9/7c8ee3be-bd11-4ce0-bd8c-c10cd5095d101628840354064-Prakhya-Women-Yellow-Yoke-Design-Pleated-Kurtiwith.jpg');
    imageforAd1.style.cssText = 'float:left;padding-top:5px;padding-right:10px;padding-left:20px;width:40%;height:50%';

    //=============================Botton=======================================================================
    //button for 1st order
    let buttonforad1 = addbutton("buttonid1", "ORDER NOW");

    //button for placeorder
    let placeorderbuttonAd1 = document.createElement("button");
    placeorderbuttonAd1.setAttribute("id", "podrbutton");
    placeorderbuttonAd1.innerHTML = "Place Order";
    placeorderbuttonAd1.style.cssText = 'width:100%;vertical-align: bottom;pointer-events: auto;pointer-events: auto;background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer';

    //=================================================content for page order detail(2nd page) ==========================================
    //main div
    var orderdetaildivAD1 = document.createElement('div');
    orderdetaildivAD1.setAttribute("id", "orderdetaildivAD1id");
    orderdetaildivAD1.style.cssText = 'height:80%;position:relative;z-index:1;background:#fff;pointer-events:none;display:block';
    orderdetaildivAD1.style.borderRadius = "20px 20px 0px 0px";
    //payment detail div
    var paymentdetaildivAd1 = document.createElement('div');
    paymentdetaildivAd1.setAttribute("id", "paymentdetaildivAd1id");
    paymentdetaildivAd1.style.cssText = 'height:18%;position:relative;z-index:1;background:#fdd;pointer-events:none;display:block';
    //images
    var kurtaimageleft = addimage('https://i.ibb.co/j6bD6w1/4c3ec68a-33c6-4043-8e77-8658ae6ba4e61628840354552-Prakhya-Women-Yellow-Yoke-Design-Pleated-Kurtiwith.webp');
    kurtaimageleft.style.cssText = 'border-radius: 20px 0px 0px 0px;padding-top:0px;padding-left:0px;width:33.33%;height:30%';
    var kurtaimagecenter = addimage('https://i.ibb.co/MNJxbZm/a2e70d54-f2c4-4a90-bfd9-780da2e019ed1628840354398-Prakhya-Women-Yellow-Yoke-Design-Pleated-Kurtiwith.webp');
    kurtaimagecenter.style.cssText = 'padding-top:0px;padding-left:0px;width:33.33%;height:30%';
    var kurtaimageright = addimage('https://i.ibb.co/qrcPkdd/db92fa33-fdab-49f0-9621-3489c62dffd21628840353787-Prakhya-Women-Yellow-Yoke-Design-Pleated-Kurtiwith.webp');
    kurtaimageright.style.cssText = 'border-radius: 0px 20px 0px 0px;padding-top:0px;padding-left:0px;width:33.33%;height:30%';

    var radio1forAD1 = addradiobutton("radio", "button1name", "S &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 34 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 26-30");
    var radio2forAd1 = addradiobutton("radio", "button1name", "M &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 36 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 28-32");
    var radio3forAd1 = addradiobutton("radio", "button1name", "L &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 38 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 30-34");
    //headtext
    var titleofAd1 = create_text("Prakhya Yellow Kurta");
    titleofAd1.style.fontWeight = "900";
    titleofAd1.style.fontSize = "large";
    titleofAd1.style.marginLeft = "10px";
    titleofAd1.style.marginTop = "8px";
    titleofAd1.style.marginBottom = "5px";

    var discriptionofAd1 = create_text("Women Yellow Yoke Design Regular Mirror Work Kurta with Salwar & Dupatta");
    discriptionofAd1.style.fontSize = "x-small";
    discriptionofAd1.style.marginLeft = "10px";

    //mid text
    var sizeTextforAd1 = create_text("Size");
    sizeTextforAd1.style.fontWeight = "900";
    sizeTextforAd1.style.fontSize = "small";
    sizeTextforAd1.style.marginLeft = "10px";
    sizeTextforAd1.style.marginTop = "20px";
    var textdisforAd1 = create_text("Please select any one option");
    textdisforAd1.style.fontWeight = "500";
    textdisforAd1.style.fontSize = "x-small";
    textdisforAd1.style.marginLeft = "10px";
    //textdisforAd1.style.marginTop = "50px";

    var typeofsizeforAd1 = create_text("Size TopChest Waist");
    typeofsizeforAd1.style.fontSize = "x-small";
    typeofsizeforAd1.style.marginLeft = "80px";
    typeofsizeforAd1.style.marginTop = "10px";
    typeofsizeforAd1.style.wordSpacing = "40px";


    //end text
    var pricedetailforAd1 = create_text("Price Details");
    pricedetailforAd1.style.fontSize = "small";
    pricedetailforAd1.style.marginLeft = "10px";
    pricedetailforAd1.style.marginTop = "35px";
    pricedetailforAd1.style.paddingTop = "20px";

    var itemcountforAd1 = create_text("Price (1 item)");
    itemcountforAd1.style.fontSize = "x-small";
    itemcountforAd1.style.marginLeft = "10px";
    var brnewline1 = document.createElement("br");
    var brnewline2 = document.createElement("br");
    var deliverycharge = document.createTextNode("Delivery charge");
    var totalprice = document.createTextNode("Total Price");
    itemcountforAd1.appendChild(brnewline1);
    itemcountforAd1.appendChild(deliverycharge);
    itemcountforAd1.appendChild(brnewline2);
    itemcountforAd1.appendChild(totalprice);

    paymentdetaildivAd1.appendChild(pricedetailforAd1);
    paymentdetaildivAd1.appendChild(itemcountforAd1);



    //horizontal line
    //horizontal line
    var horizontallineforAd1 = document.createElement("HR");
    horizontallineforAd1.style.cssText = "border-color: #fafafa; width:95%;margin-left:3";


    //append elements in div
    orderdetaildivAD1.appendChild(kurtaimageleft);
    orderdetaildivAD1.appendChild(kurtaimagecenter);
    orderdetaildivAD1.appendChild(kurtaimageright);
    orderdetaildivAD1.appendChild(titleofAd1);
    orderdetaildivAD1.appendChild(discriptionofAd1);
    orderdetaildivAD1.appendChild(horizontallineforAd1);
    orderdetaildivAD1.appendChild(sizeTextforAd1);
    orderdetaildivAD1.appendChild(textdisforAd1);
    orderdetaildivAD1.appendChild(typeofsizeforAd1);
    orderdetaildivAD1.appendChild(radio1forAD1);
    orderdetaildivAD1.appendChild(radio2forAd1);
    orderdetaildivAD1.appendChild(radio3forAd1);
    orderdetaildivAD1.appendChild(paymentdetaildivAd1);

    //=================================================content for page payment detail(2nd page) ==========================================
    //main div
    var paymentScreenForad1div = document.createElement('div');
    paymentScreenForad1div.setAttribute("id", "paymentScreenForad1divid");
    paymentScreenForad1div.style.cssText = 'height:80%;position:relative;z-index:1;background:#fff;pointer-events:none;display:block';
    paymentScreenForad1div.style.borderRadius = "20px 20px 0px 0px";

    //button for payment
    let paymentbuttonforAd1 = document.createElement("button");
    paymentbuttonforAd1.setAttribute("id", "paymentbuttonforAd1id");
    paymentbuttonforAd1.innerHTML = "Pay Now";
    paymentbuttonforAd1.style.cssText = 'position:relative;width:100%;vertical-align: bottom;pointer-events: auto;pointer-events: auto;background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer';


    var paymentScreenForad1pic = addimage('https://i.ibb.co/WkvKR02/payment-sceen2.jpg');
    paymentScreenForad1pic.style.cssText = 'border-radius: 0px 20px 0px 0px;padding-top:0px;padding-left:0px;width:100%;height:60%';

    paymentScreenForad1div.appendChild(paymentScreenForad1pic);


    //====================================Button Action====================================================================
    paymentbuttonforAd1.addEventListener("click", function () {
        paymentScreenForad1.style.display = "none";
        alert("Order Placed");
        video.play();
    });

    var paymentdetailsforAd1 = function () {
        document.getElementById("paymentScreenForad1id").appendChild(paymentScreenForad1div);
        document.getElementById("paymentScreenForad1id").appendChild(paymentbuttonforAd1);
    };

    //action after placeorder button click
    placeorderbuttonAd1.addEventListener("click", function () {
        orderButtonForAd1.style.display = "none";
        insertAfter(video, paymentScreenForad1);
        paymentdetailsforAd1();
    });

    var orderdetailsforAd1 = function () {
        document.getElementById("orderButtonForAd1id").appendChild(orderdetaildivAD1);
        document.getElementById("orderButtonForAd1id").appendChild(placeorderbuttonAd1);
    };

    //action after order now button click
    buttonforad1.addEventListener("click", function () {
        video.pause();
        oneTimeAd1 = false;
        homeScreenforad1.style.display = "none";
        insertAfter(video, orderButtonForAd1);
        orderdetailsforAd1();
    });

    //================================ADDING elements===================================================================
    //add elements in home screen
    document.getElementById("adspaceforAd1").appendChild(firstAdforAd1);
    document.getElementById("firstadidforAd1").appendChild(imageforAd1);
    var ad1text = '<div style="font-size: 20px; padding:5px;" id="adtext">Order this yellow kurta before you start your next episode.</div>';
    imageforAd1.insertAdjacentHTML('afterend', ad1text);
    document.getElementById("firstadidforAd1").appendChild(buttonforad1);

























    function addradiobuttonforAd2(type, name, text) {
        var label = document.createElement("label");
        label.style.color = "black";

        var element = document.createElement("input");
        element.setAttribute("type", type);
        element.setAttribute("name", name);
        //element.setAttribute("align-items", flex-start);
        element.style.cssText = 'align-items: flex-start;margin-right : 10px;border: 5px; width: 5%; height: 0.8em;pointer-events: auto';

        label.appendChild(element);
        label.innerHTML += text;
        var br = document.createElement("br");
        label.appendChild(br);

        return label;
    }
    //==========================================================2nd AD Complete========================================================
    //===============Screens======================================================================================
    //home Screen
    var homeScreenforad2 = document.createElement('div');
    homeScreenforad2.setAttribute("id", "adspaceforAd2");
    homeScreenforad2.style.cssText = 'pointer-events: auto;float: right;position:relative;width:30%;height:80%;opacity:0.9;z-index:1;background:#000;top:0;left:0;pointer-events:none;display:block';
    homeScreenforad2.style.marginTop = "520px";
    homeScreenforad2.className = "testele";

    //order detail screen
    var orderButtonForAd2 = document.createElement('div');
    orderButtonForAd2.setAttribute("id", "orderButtonForAd2id");
    orderButtonForAd2.style.cssText = 'pointer-events: auto;margin-bottom:20px;float: right;position:relative;width:25%;height:92%;opacity:1;z-index:1;background:#000;top:0;left:0;pointer-events:none;display:block';
    orderButtonForAd2.className = "odrscreen";
    orderButtonForAd2.style.marginTop = "50px";
    orderButtonForAd2.style.borderRadius = "20px 20px 0px 0px";

    //payment screen
    var paymentScreenForad2 = document.createElement('div');
    paymentScreenForad2.setAttribute("id", "paymentScreenForad2id");
    paymentScreenForad2.style.cssText = 'pointer-events: auto;margin-bottom:20px;float: right;position:relative;width:25%;height:92%;opacity:1;z-index:1;background:#000;top:0;left:0;pointer-events:none;display:block';
    paymentScreenForad2.className = "pytscreen";
    paymentScreenForad2.style.marginTop = "50px";
    paymentScreenForad2.style.borderRadius = "20px 20px 0px 0px";



    //inserting ads screen
    //var video = document.getElementById("video-player_html5_api");
    insertAfter(video, homeScreenforad2);


    //==============================ADS==========================================================================
    //First Ad
    var firstAdforAd2 = document.createElement('div');
    firstAdforAd2.setAttribute("id", "firstadidforAd2");
    firstAdforAd2.style.cssText = 'margin:10px;position:relative;width:92%;height:30%;opacity:1;z-index:1;background:#000;top:0;left:0;pointer-events:none;display:block';


    //=====================================Images================================================================
    //image of 1st order
    var imageforAd2 = addimage('https://i.ibb.co/r2jWCqV/bright.jpg');
    imageforAd2.style.cssText = 'float:left;padding-top:5px;padding-right:10px;padding-left:20px;width:40%;height:50%';

    //=============================Botton=======================================================================
    //button for 1st order
    let buttonforad2 = addbutton("buttonid1", "ORDER NOW");

    //button for placeorder
    let placeorderbuttonAd2 = document.createElement("button");
    placeorderbuttonAd2.setAttribute("id", "podrbutton");
    placeorderbuttonAd2.innerHTML = "Place Order";
    placeorderbuttonAd2.style.cssText = 'width:100%;vertical-align: bottom;pointer-events: auto;pointer-events: auto;background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer';

    //=================================================content for page order detail(2nd page) ==========================================
    //main div
    var orderdetaildivAD2 = document.createElement('div');
    orderdetaildivAD2.setAttribute("id", "orderdetaildivAD2id");
    orderdetaildivAD2.style.cssText = 'height:80%;position:relative;z-index:1;background:#fff;pointer-events:none;display:block';
    orderdetaildivAD2.style.borderRadius = "20px 20px 0px 0px";
    //payment detail div
    var paymentdetaildivAd2 = document.createElement('div');
    paymentdetaildivAd2.setAttribute("id", "paymentdetaildivAd2id");
    paymentdetaildivAd2.style.cssText = 'height:18%;position:relative;z-index:1;background:#fdd;pointer-events:none;display:block';
    //images
    var burgerleft = addimage('https://i.ibb.co/HdMMm4v/bleft.webp');
    burgerleft.style.cssText = 'border-radius: 20px 0px 0px 0px;padding-top:0px;padding-left:0px;width:50%;height:30%';
    //     var burgercenter = addimage('https://i.ibb.co/3BrwdH8/bcenter.webp');
    //     burgercenter.style.cssText = 'padding-top:0px;padding-left:0px;width:50%;height:30%';
    var burgerright = addimage('https://i.ibb.co/r2jWCqV/bright.jpg');
    burgerright.style.cssText = 'border-radius: 0px 20px 0px 0px;padding-top:0px;padding-left:0px;width:50%;height:30%';

    var radio1forAD2 = addradiobuttonforAd2("radio", "button1name", "Personal [Giant Slice] &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Rs.265/-");
    var radio2forAd2 = addradiobuttonforAd2("radio", "button1name", "Regular [7 Inches, Serves 1] &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Rs.290/-");
    var radio3forAd2 = addradiobuttonforAd2("radio", "button1name", "Medium [10 Inches, Serves 2] &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Rs.240/-");

    //headtext
    var titleofAd2 = create_text("Burger recipe");
    titleofAd2.style.fontWeight = "900";
    titleofAd2.style.fontSize = "large";
    titleofAd2.style.marginLeft = "10px";
    titleofAd2.style.marginTop = "8px";
    titleofAd2.style.marginBottom = "5px";

    var discriptionofAd2 = create_text("A hamburger is a food, typically considered a sandwich, consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.");
    discriptionofAd2.style.fontSize = "x-small";
    discriptionofAd2.style.marginLeft = "10px";

    //mid text
    var sizeTextforAd2 = create_text("Size");
    sizeTextforAd2.style.fontWeight = "900";
    sizeTextforAd2.style.fontSize = "small";
    sizeTextforAd2.style.marginLeft = "10px";
    sizeTextforAd2.style.marginTop = "20px";
    var textdisforAd2 = create_text("Please select any one option");
    textdisforAd2.style.fontWeight = "500";
    textdisforAd2.style.fontSize = "x-small";
    textdisforAd2.style.marginLeft = "10px";
    //textdisforAd2.style.marginTop = "50px";

    //     var typeofsizeforAd2 = create_text("Size TopChest Waist");
    //     typeofsizeforAd2.style.fontSize = "x-small";
    //     typeofsizeforAd2.style.marginLeft = "80px";
    //     typeofsizeforAd2.style.marginTop = "10px";
    //     typeofsizeforAd2.style.wordSpacing = "40px";


    //end text
    var pricedetailforAd2 = create_text("Price Details");
    pricedetailforAd2.style.fontSize = "small";
    pricedetailforAd2.style.marginLeft = "10px";
    pricedetailforAd2.style.marginTop = "35px";
    pricedetailforAd2.style.paddingTop = "20px";

    var itemcountforAd2 = create_text("Price (1 item)");
    itemcountforAd2.style.fontSize = "x-small";
    itemcountforAd2.style.marginLeft = "10px";

    itemcountforAd2.appendChild(brnewline1);
    itemcountforAd2.appendChild(deliverycharge);
    itemcountforAd2.appendChild(brnewline2);
    itemcountforAd2.appendChild(totalprice);

    paymentdetaildivAd2.appendChild(pricedetailforAd2);
    paymentdetaildivAd2.appendChild(itemcountforAd2);



    //horizontal line
    var horizontallineforAd2 = document.createElement("HR");
    horizontallineforAd2.style.cssText = "border-color: #fafafa; width:95%;margin-left:3";

    //append elements in div
    orderdetaildivAD2.appendChild(burgerleft);
    //     orderdetaildivAD2.appendChild(burgercenter);
    orderdetaildivAD2.appendChild(burgerright);
    orderdetaildivAD2.appendChild(titleofAd2);
    orderdetaildivAD2.appendChild(discriptionofAd2);
    orderdetaildivAD2.appendChild(horizontallineforAd2);
    orderdetaildivAD2.appendChild(sizeTextforAd2);
    orderdetaildivAD2.appendChild(textdisforAd2);
    //orderdetaildivAD2.appendChild(typeofsizeforAd2);
    orderdetaildivAD2.appendChild(radio1forAD2);
    orderdetaildivAD2.appendChild(radio2forAd2);
    orderdetaildivAD2.appendChild(radio3forAd2);
    orderdetaildivAD2.appendChild(paymentdetaildivAd2);

    //=================================================content for page payment detail(2nd page) ==========================================
    //main div
    var paymentScreenForad2div = document.createElement('div');
    paymentScreenForad2div.setAttribute("id", "paymentScreenForad2divid");
    paymentScreenForad2div.style.cssText = 'height:80%;position:relative;z-index:1;background:#fff;pointer-events:none;display:block';
    paymentScreenForad2div.style.borderRadius = "20px 20px 0px 0px";

    //button for payment
    let paymentbuttonforAd2 = document.createElement("button");
    paymentbuttonforAd2.setAttribute("id", "paymentbuttonforAd2id");
    paymentbuttonforAd2.innerHTML = "Pay Now";
    paymentbuttonforAd2.style.cssText = 'position:relative;width:100%;vertical-align: bottom;pointer-events: auto;pointer-events: auto;background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer';


    var paymentScreenForad2pic = addimage('https://i.ibb.co/WkvKR02/payment-sceen2.jpg');
    paymentScreenForad2pic.style.cssText = 'border-radius: 0px 20px 0px 0px;padding-top:0px;padding-left:0px;width:100%;height:60%';

    paymentScreenForad2div.appendChild(paymentScreenForad2pic);


    //====================================Button Action====================================================================
    paymentbuttonforAd2.addEventListener("click", function () {
        paymentScreenForad2.style.display = "none";
        alert("Order Placed");
        video.play();
    });

    var paymentdetailsforAd2 = function () {
        document.getElementById("paymentScreenForad2id").appendChild(paymentScreenForad2div);
        document.getElementById("paymentScreenForad2id").appendChild(paymentbuttonforAd2);
    };

    //action after placeorder button click
    placeorderbuttonAd2.addEventListener("click", function () {
        orderButtonForAd2.style.display = "none";
        insertAfter(video, paymentScreenForad2);
        paymentdetailsforAd2();
    });

    var orderdetailsforAd2 = function () {
        document.getElementById("orderButtonForAd2id").appendChild(orderdetaildivAD2);
        document.getElementById("orderButtonForAd2id").appendChild(placeorderbuttonAd2);
    };

    //action after order now button click
    buttonforad2.addEventListener("click", function () {
        video.pause();
        oneTimeAd2 = false;
        homeScreenforad2.style.display = "none";
        insertAfter(video, orderButtonForAd2);
        orderdetailsforAd2();
    });

    //================================ADDING elements===================================================================
    //add elements in home screen
    document.getElementById("adspaceforAd2").appendChild(firstAdforAd2);
    document.getElementById("firstadidforAd2").appendChild(imageforAd2);
    var ad2text = '<div style="font-size: 20px; padding:5px;" id="adtext">Order this delicious burger before you start your next episode.</div>';
    imageforAd2.insertAdjacentHTML('afterend', ad2text);
    document.getElementById("firstadidforAd2").appendChild(buttonforad2);














    //================================================================3rd ad=============================================================================================
    //===============Screens======================================================================================
    //home Screen
    var homeScreenforad3 = document.createElement('div');
    homeScreenforad3.setAttribute("id", "adspaceforAd3");
    homeScreenforad3.style.cssText = 'pointer-events: auto;float: right;position:relative;width:30%;height:80%;opacity:0.9;z-index:1;background:#000;top:0;left:0;pointer-events:none;display:block';
    homeScreenforad3.style.marginTop = "530px";
    homeScreenforad3.className = "testele";

    //order detail screen
    var orderButtonForAd3 = document.createElement('div');
    orderButtonForAd3.setAttribute("id", "orderButtonForAd3id");
    orderButtonForAd3.style.cssText = 'pointer-events: auto;margin-bottom:20px;float: right;position:relative;width:25%;height:92%;opacity:1;z-index:1;background:#000;top:0;left:0;pointer-events:none;display:block';
    orderButtonForAd3.className = "odrscreen";
    orderButtonForAd3.style.marginTop = "50px";
    orderButtonForAd3.style.borderRadius = "20px 20px 0px 0px";

    //payment screen
    var paymentScreenForad3 = document.createElement('div');
    paymentScreenForad3.setAttribute("id", "paymentScreenForad3id");
    paymentScreenForad3.style.cssText = 'pointer-events: auto;margin-bottom:20px;float: right;position:relative;width:25%;height:92%;opacity:1;z-index:1;background:#000;top:0;left:0;pointer-events:none;display:block';
    paymentScreenForad3.className = "pytscreen";
    paymentScreenForad3.style.marginTop = "50px";
    paymentScreenForad3.style.borderRadius = "20px 20px 0px 0px";



    //inserting ads screen
    //var video = document.getElementById("video-player_html5_api");
    insertAfter(video, homeScreenforad3);


    //==============================ADS==========================================================================
    //First Ad
    var firstAdforAd3 = document.createElement('div');
    firstAdforAd3.setAttribute("id", "firstadidforAd3");
    firstAdforAd3.style.cssText = 'margin:10px;position:relative;width:92%;height:30%;opacity:1;z-index:1;background:#000;top:0;left:0;pointer-events:none;display:block';


    //=====================================Images================================================================
    //image of 1st order
    var imageforAd3 = addimage('https://i.ibb.co/7v5ySGF/home.jpg');
    imageforAd3.style.cssText = 'float:left;padding-top:5px;padding-right:10px;padding-left:20px;width:40%;height:50%';

    //=============================Botton=======================================================================
    //button for 1st order
    let buttonforad3 = addbutton("buttonid1", "ORDER NOW");

    //button for placeorder
    let placeorderbuttonAd3 = document.createElement("button");
    placeorderbuttonAd3.setAttribute("id", "podrbutton");
    placeorderbuttonAd3.innerHTML = "Place Order";
    placeorderbuttonAd3.style.cssText = 'width:100%;vertical-align: bottom;pointer-events: auto;pointer-events: auto;background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer';

    //=================================================content for page order detail(2nd page) ==========================================
    //main div
    var orderdetaildivAD3 = document.createElement('div');
    orderdetaildivAD3.setAttribute("id", "orderdetaildivAD3id");
    orderdetaildivAD3.style.cssText = 'height:80%;position:relative;z-index:1;background:#fff;pointer-events:none;display:block';
    orderdetaildivAD3.style.borderRadius = "20px 20px 0px 0px";
    //payment detail div
    var paymentdetaildivAd3 = document.createElement('div');
    paymentdetaildivAd3.setAttribute("id", "paymentdetaildivAd3id");
    paymentdetaildivAd3.style.cssText = 'height:18%;position:relative;z-index:1;background:#fdd;pointer-events:none;display:block';
    //images
    var earringleft = addimage('https://i.ibb.co/Y3npG8k/left.jpg');
    earringleft.style.cssText = 'border-radius: 20px 0px 0px 0px;padding-top:0px;padding-left:0px;width:33.33%;height:25%';
    var earringcenter = addimage('https://i.ibb.co/xJ5jsZc/center.jpg');
    earringcenter.style.cssText = 'padding-top:0px;padding-left:0px;width:33.33%;height:25%';
    var earringright = addimage('https://i.ibb.co/yqVNZ7K/right.jpg');
    earringright.style.cssText = 'border-radius: 0px 20px 0px 0px;padding-top:0px;padding-left:0px;width:33.33%;height:25%';

    //headtext
    var titleofAd3 = create_text("PANASH");
    titleofAd3.style.fontWeight = "900";
    titleofAd3.style.fontSize = "large";
    titleofAd3.style.marginLeft = "10px";
    titleofAd3.style.marginTop = "8px";
    titleofAd3.style.marginBottom = "5px";


    var headpriceAd3 = create_text("₹399(60% OFF)");
    headpriceAd3.style.fontWeight = "900";
    headpriceAd3.style.fontSize = "meddium";
    headpriceAd3.style.marginLeft = "10px";
    headpriceAd3.style.marginTop = "20px";
    headpriceAd3.style.marginBottom = "5px";

    var discriptionofAd3 = create_text("Silver-Plated & Pink Oxidised Jhumkas.");
    discriptionofAd3.style.fontSize = "x-small";
    discriptionofAd3.style.marginLeft = "0px";
    discriptionofAd3.style.marginLeft = "10px";

    //mid text
    var productdetailAd3 = create_text("PRODUCT DETAILS");
    productdetailAd3.style.fontWeight = "900";
    productdetailAd3.style.fontSize = "small";
    productdetailAd3.style.marginLeft = "10px";
    productdetailAd3.style.marginTop = "35px";
    var productdetaildisAd3 = create_text("Silver-toned dome shaped jhumkas, silver-plated, has pearls Secured with a post and back");
    productdetaildisAd3.style.fontWeight = "500";
    productdetaildisAd3.style.fontSize = "x-small";
    productdetaildisAd3.style.marginLeft = "10px";
    //productdetaildisAd3.style.marginTop = "50px";

    var typeofsizeforAd3 = create_text("Size & Fit");
    typeofsizeforAd3.style.fontSize = "small";
    typeofsizeforAd3.style.marginLeft = "10px";
    typeofsizeforAd3.style.marginTop = "10px";
    var sizedisAd3 = create_text("Length:4.5cm");
    sizedisAd3.style.fontWeight = "500";
    sizedisAd3.style.fontSize = "x-small";
    sizedisAd3.style.marginLeft = "10px";
    //typeofsizeforAd3.style.wordSpacing = "40px";


    //end text
    var pricedetailforAd3 = create_text("Price Details");
    pricedetailforAd3.style.fontSize = "small";
    pricedetailforAd3.style.marginLeft = "10px";
    pricedetailforAd3.style.marginTop = "35px";
    pricedetailforAd3.style.paddingTop = "20px";

    var itemcountforAd3 = create_text("Price (1 item)");
    itemcountforAd3.style.fontSize = "x-small";
    itemcountforAd3.style.marginLeft = "10px";
    itemcountforAd3.appendChild(brnewline1);
    itemcountforAd3.appendChild(deliverycharge);
    itemcountforAd3.appendChild(brnewline2);
    itemcountforAd3.appendChild(totalprice);

    paymentdetaildivAd3.appendChild(pricedetailforAd3);
    paymentdetaildivAd3.appendChild(itemcountforAd3);



    //horizontal line
    var horizontallineforAd3 = document.createElement("HR");
    horizontallineforAd3.style.cssText = "border-color: #fafafa; width:95%;margin-left:3";

    //append elements in div
    orderdetaildivAD3.appendChild(earringleft);
    orderdetaildivAD3.appendChild(earringcenter);
    orderdetaildivAD3.appendChild(earringright);
    orderdetaildivAD3.appendChild(titleofAd3);
    orderdetaildivAD3.appendChild(headpriceAd3);
    orderdetaildivAD3.appendChild(discriptionofAd3);
    orderdetaildivAD3.appendChild(horizontallineforAd3);
    orderdetaildivAD3.appendChild(productdetailAd3);
    orderdetaildivAD3.appendChild(productdetaildisAd3);
    orderdetaildivAD3.appendChild(typeofsizeforAd3);
    orderdetaildivAD3.appendChild(sizedisAd3);
    //orderdetaildivAD3.appendChild(radio1forAD3);
    //orderdetaildivAD3.appendChild(radio2forAd3);
    //orderdetaildivAD3.appendChild(radio3forAd3);
    orderdetaildivAD3.appendChild(paymentdetaildivAd3);

    //=================================================content for page payment detail(2nd page) ==========================================
    //main div
    var paymentScreenForad3div = document.createElement('div');
    paymentScreenForad3div.setAttribute("id", "paymentScreenForad3divid");
    paymentScreenForad3div.style.cssText = 'height:80%;position:relative;z-index:1;background:#fff;pointer-events:none;display:block';
    paymentScreenForad3div.style.borderRadius = "20px 20px 0px 0px";

    //button for payment
    let paymentbuttonforAd3 = document.createElement("button");
    paymentbuttonforAd3.setAttribute("id", "paymentbuttonforAd3id");
    paymentbuttonforAd3.innerHTML = "Pay Now";
    paymentbuttonforAd3.style.cssText = 'position:relative;width:100%;vertical-align: bottom;pointer-events: auto;pointer-events: auto;background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer';


    var paymentScreenForad3pic = addimage('https://i.ibb.co/WkvKR02/payment-sceen2.jpg');
    paymentScreenForad3pic.style.cssText = 'border-radius: 0px 20px 0px 0px;padding-top:0px;padding-left:0px;width:100%;height:60%';

    paymentScreenForad3div.appendChild(paymentScreenForad3pic);


    //====================================Button Action====================================================================
    paymentbuttonforAd3.addEventListener("click", function () {
        paymentScreenForad3.style.display = "none";
        alert("Order Placed");
        video.play();
    });

    var paymentdetailsforAd3 = function () {
        document.getElementById("paymentScreenForad3id").appendChild(paymentScreenForad3div);
        document.getElementById("paymentScreenForad3id").appendChild(paymentbuttonforAd3);
    };

    //action after placeorder button click
    placeorderbuttonAd3.addEventListener("click", function () {
        orderButtonForAd3.style.display = "none";
        insertAfter(video, paymentScreenForad3);
        paymentdetailsforAd3();
    });

    var orderdetailsforAd3 = function () {
        document.getElementById("orderButtonForAd3id").appendChild(orderdetaildivAD3);
        document.getElementById("orderButtonForAd3id").appendChild(placeorderbuttonAd3);
    };

    //action after order now button click
    buttonforad3.addEventListener("click", function () {
        video.pause();
        oneTimeAd3 = false;
        homeScreenforad3.style.display = "none";
        insertAfter(video, orderButtonForAd3);
        orderdetailsforAd3();
    });

    //================================ADDING elements===================================================================
    //add elements in home screen
    document.getElementById("adspaceforAd3").appendChild(firstAdforAd3);
    document.getElementById("firstadidforAd3").appendChild(imageforAd3);
    var ad3text = '<div style="font-size: 20px; padding:5px;" id="adtext">Order this yellow kurta before you start your next episode.</div>';
    imageforAd3.insertAdjacentHTML('afterend', ad3text);
    document.getElementById("firstadidforAd3").appendChild(buttonforad3);



    //===============controling images and ads timing ========================================================
    video.addEventListener("timeupdate", function () {
        if ((this.currentTime > 287 && this.currentTime < 310) && oneTimeAd1 == true) {
            homeScreenforad1.style.display = "block";
        } else if ((this.currentTime > 517 && this.currentTime < 530) && oneTimeAd2 == true) {
            homeScreenforad2.style.display = "block";
        }
        else if ((this.currentTime > 623 && this.currentTime < 635) && oneTimeAd3 == true) {
            homeScreenforad3.style.display = "block";
        } else {
            homeScreenforad1.style.display = "none";
            homeScreenforad2.style.display = "none";
            homeScreenforad3.style.display = "none";
        }
    });
}