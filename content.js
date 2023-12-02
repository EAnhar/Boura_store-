// فقط مصفوفه المنتجات تحتاج تغيير مع البقية 
Products = [
    {
        // المنتج الاول 
        "id": "1",
        // اسم النتج 
        "name": "سوار النوى واللؤلؤ", 
        // الصورة الي تظهر بالصفحة الرئيسية
        "preview": "img/سواره.jpg",
        // صور المعاينة اللي تظهر بصفحة تفاصيل المنتج
        "photos": [
            "img/سواره.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
        ],
        // وصف المنتج
        "description": "سوار فاخر مصنوع من نوى التمر واللؤلؤ الزراعي.",
        // الماركة (ممكن نستغني عنه او نحط boura)
        "brand": "بؤرة",
        // السعر 
        "price": 65
    },
    {
        // المنتج الثاني
        "id": "2",
        "name": "خاتم",
        "preview": "img/خاتم.jpg",
        "photos": [
            "img/خاتم.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/9b14396e-0ee1-46b4-833c-4a2c35b5ce661558948436160-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-2.jpg",
            // "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/27569983-fada-4874-9306-14c945c234781558948436148-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-3.jpg"
        ],
        "description": "خاتم يتميز بتصميم بسيط يجمع بين نوى التمر، يمنحك لمسة طبيعية وأنيقة في إكسسوارك اليومي",
        "brand": "بؤرة",
        "price": 55
    },
    {
        // المنتج الثالث
        "id": "3",
        "name": "تعليقة",
        "preview": "img/تعليقه.jpg",
        "photos": [
            "img/تعليقه.jpg",
        ],
        "description": "تعليقة يتميز بتصميم بسيط يجمع بين نوى التمر، يمنحك لمسة طبيعية وأنيقة في إكسسوارك اليومي",
        "brand": "بؤرة",
        "price": 40
    },
    {
        // المنتج الرابع
        "id": "4",
        "name": "سبحة ملونة",
        "preview": "img/سبحة.jpg",
        "photos": [
            "img/سبحة.jpg",
        ],
        "description": "سبحة تمر تتميز ببساطة تصميمها وجمال الطبيعة. مصنوعة من حبيبات التمر ",
        "brand": "بؤرة",
        "price": 150
    },
    {
      // المنتج الخامس
      "id": "5",
      "name": "قلادة",
      "preview": "img/قلادة.jpg",
      "photos": [
          "img/قلادة.jpg",
      ],
      "description": "قلادة تمر تتميز ببساطة تصميمها وجمال الطبيعة. مصنوعة من حبيبات التمر ",
      "brand": "بؤرة",
      "price": 85
  }

  ];

// اللي تحت ما يحتاج تغيير
console.clear();
console.log(document.cookie);
function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");
  boxLink.href = "contentDetails.html?" + ob.id;

  console.log(boxLink.href);

  let imgTag = document.createElement("img");
  imgTag.src = ob.preview;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.brand);
  h4.appendChild(h4Text);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("SR  " + ob.price);
  h2.appendChild(h2Text);

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}

let mainContainer = document.getElementById("mainContainer");
let containerAccessories = document.getElementById("containerAccessories");




// Rest of the existing code (starting from the if statement)
if (document.cookie.indexOf(",counter=") >= 0) {
  var counter = document.cookie.split(",")[1].split("=")[1];
  document.getElementById("badge").innerHTML = counter;
}

for (let i = 0; i < Products.length; i++) {
    console.log(Products[i]);
    containerAccessories.appendChild(
      dynamicClothingSection(Products[i])
    );
}
