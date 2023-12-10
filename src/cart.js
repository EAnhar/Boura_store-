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
        "description": "تعليقة تتميز بتصميم بسيط يجمع بين نوى التمر، يمنحك لمسة طبيعية وأنيقة في إكسسوارك اليومي",
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
// let counter = localStorage.getItem('counter');
// if (counter) {
//     document.getElementById("badge").innerHTML = counter;
// }

if(document.cookie.indexOf(',counter=')>=0)
{
    let counter = document.cookie.split(',')[1].split('=')[1]
    document.getElementById("badge").innerHTML = counter
}

let cartContainer = document.getElementById('cartContainer')
let boxContainerDiv = document.createElement('div')
boxContainerDiv.id = 'boxContainer'

// DYNAMIC CODE TO SHOW THE SELECTED ITEMS IN YOUR CART
function dynamicCartSection(ob,itemCounter)
{
    let boxDiv = document.createElement('div')
    boxDiv.id = 'box'
    boxContainerDiv.appendChild(boxDiv)

    let boxImg = document.createElement('img')
    boxImg.src = ob.preview
    boxDiv.appendChild(boxImg)

    let boxh3 = document.createElement('h3')
    let h3Text = document.createTextNode(ob.name + ' × ' + itemCounter)
    boxh3.appendChild(h3Text)
    boxDiv.appendChild(boxh3)

    let boxh4 = document.createElement('h4')
    let h4Text = document.createTextNode('المبلغ: SR' + ob.price)
    boxh4.appendChild(h4Text)
    boxDiv.appendChild(boxh4)

    buttonLink.appendChild(buttonText)
    cartContainer.appendChild(boxContainerDiv)
    cartContainer.appendChild(totalContainerDiv)

    return cartContainer
}

let totalContainerDiv = document.createElement('div')
totalContainerDiv.id = 'totalContainer'

let totalDiv = document.createElement('div')
totalDiv.id = 'total'
totalContainerDiv.appendChild(totalDiv)

let totalh2 = document.createElement('h2')
let h2Text = document.createTextNode('المبلغ الإجمالي')
totalh2.appendChild(h2Text)
totalDiv.appendChild(totalh2)

// TO UPDATE THE TOTAL AMOUNT
function amountUpdate(amount)
{
    let totalh4 = document.createElement('h4')
    // let totalh4Text = document.createTextNode(amount)
    let totalh4Text = document.createTextNode('المبلغ: SR ' + amount)
    totalh4Text.id = 'toth4'
    totalh4.appendChild(totalh4Text)
    totalDiv.appendChild(totalh4)
    totalDiv.appendChild(buttonDiv)
    console.log(totalh4);
}


let buttonDiv = document.createElement('div')
buttonDiv.id = 'button'
totalDiv.appendChild(buttonDiv)

let buttonTag = document.createElement('button')
buttonDiv.appendChild(buttonTag)

let buttonLink = document.createElement('a')
buttonLink.href = 'orderPlaced.html?'
buttonTag.appendChild(buttonLink)

buttonText = document.createTextNode('قدِّم الطلب')
buttonTag.onclick = function()
{
    console.log("clicked")
} 

// let i;
// let totalAmount = 0;

// let storedOrder = localStorage.getItem('orderId');
// let items = storedOrder ? storedOrder.split(' ') : [];

// for (i = 0; i < counter; i++) {
//     let itemCounter = 1;
//     for (let j = i + 1; j < counter; j++) {
//         if (Number(items[j]) === Number(items[i])) {
//             itemCounter += 1;
//         }
//     }
//     totalAmount += Number(Products[items[i] - 1].price) * itemCounter;
//     dynamicCartSection(Products[items[i] - 1], itemCounter);
//     i += (itemCounter - 1);
// }

// amountUpdate(totalAmount);

// contentTitle = JSON.parse(this.responseText)

let counter = Number(document.cookie.split(',')[1].split('=')[1])
document.getElementById("totalItem").innerHTML = ('اجمالي المنتجات: ' + counter)

let item = document.cookie.split(',')[0].split('=')[1].split(" ")
console.log(counter)
console.log(item)

let i;
let totalAmount = 0
for(i=0; i<counter; i++)
{
    let itemCounter = 1
    for(let j = i+1; j<counter; j++)
    {   
        if(Number(item[j]) == Number(item[i]))
        {
            itemCounter +=1;
        }
    }
    totalAmount += Number(Products[item[i]-1].price) * itemCounter
    dynamicCartSection(Products[item[i]-1],itemCounter)
    i += (itemCounter-1)
}
amountUpdate(totalAmount)
