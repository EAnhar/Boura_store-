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
            "img/سوار2.jpg",
            "img/سوار2-2.jpg",
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
// console.clear()
// let id = location.search.split('?')[1]
// console.log(id)

// let counter = localStorage.getItem('counter');
// if (counter) {
//     document.getElementById("badge").innerHTML = counter;
// }
console.clear()

let id = location.search.split('?')[1]
console.log(id)

if(document.cookie.indexOf(',counter=')>=0)
{
    let counter = document.cookie.split(',')[1].split('=')[1]
    document.getElementById("badge").innerHTML = counter
}


  let selectedProduct = Products.find(product => product.id === id);
if (selectedProduct) {
    dynamicContentDetails(selectedProduct);
} else {
    console.error("Product not found for ID: ", id);
}
function dynamicContentDetails(ob)
{
    let mainContainer = document.createElement('div')
    mainContainer.id = 'containerD'
    document.getElementById('containerProduct').appendChild(mainContainer);

    let imageSectionDiv = document.createElement('div')
    imageSectionDiv.id = 'imageSection'

    let imgTag = document.createElement('img')
     imgTag.id = 'imgDetails'
     imgTag.src = ob.preview

    imageSectionDiv.appendChild(imgTag)

    let productDetailsDiv = document.createElement('div')
    productDetailsDiv.id = 'productDetails'

    let h1 = document.createElement('h1')
    let h1Text = document.createTextNode(ob.name)
    h1.appendChild(h1Text)

    let h4 = document.createElement('h4')
    let h4Text = document.createTextNode(ob.brand)
    h4.appendChild(h4Text)
    console.log(h4);

    let detailsDiv = document.createElement('div')
    detailsDiv.id = 'details'

    let h3DetailsDiv = document.createElement('h3')
    let h3DetailsText = document.createTextNode(' SR ' + ob.price)
    h3DetailsDiv.appendChild(h3DetailsText)

    let h3 = document.createElement('h3')
    let h3Text = document.createTextNode('الوصف')
    h3.appendChild(h3Text)

    let para = document.createElement('p')
    let paraText = document.createTextNode(ob.description)
    para.appendChild(paraText)

    let productPreviewDiv = document.createElement('div')
    productPreviewDiv.id = 'productPreview'

    let h3ProductPreviewDiv = document.createElement('h3')
    let h3ProductPreviewText = document.createTextNode('معاينة المنتج')
    h3ProductPreviewDiv.appendChild(h3ProductPreviewText)
    productPreviewDiv.appendChild(h3ProductPreviewDiv)

    let i;
    for(i=0; i<ob.photos.length; i++)
    {
        let imgTagProductPreviewDiv = document.createElement('img')
        imgTagProductPreviewDiv.id = 'previewImg'
        imgTagProductPreviewDiv.src = ob.photos[i]
        imgTagProductPreviewDiv.onclick = function(event)
        {
            console.log("clicked" + this.src)
            imgTag.src = ob.photos[i]
            document.getElementById("imgDetails").src = this.src 
            
        }
        productPreviewDiv.appendChild(imgTagProductPreviewDiv)
    }

    let buttonDiv = document.createElement('div')
    buttonDiv.id = 'button'

    let buttonTag = document.createElement('button')
    buttonDiv.appendChild(buttonTag)

    buttonText = document.createTextNode('أضف إلى السلة')
    // buttonTag.onclick  =   function()
    // {
    //     let order = id+" "
    //     let counter = 1


    //     let storedOrder = localStorage.getItem('orderId');
    //     if (storedOrder) {
    //         order = id + ' ' + storedOrder;
    //         counter = Number(localStorage.getItem('counter')) + 1;
    //     }
    
    //     localStorage.setItem('orderId', order);
    //     localStorage.setItem('counter', counter);
    //     document.getElementById("badge").innerHTML = counter;
    //     console.log(localStorage);

    // }
    buttonTag.onclick  =   function()
    {
        let order = id+" "
        let counter = 1
        if(document.cookie.indexOf(',counter=')>=0)
        {
            order = id + " " + document.cookie.split(',')[0].split('=')[1]
            counter = Number(document.cookie.split(',')[1].split('=')[1]) + 1
        }
        document.cookie = "orderId=" + order + ",counter=" + counter
        document.getElementById("badge").innerHTML = counter
        console.log(document.cookie)
    }
    
    buttonTag.appendChild(buttonText)


    console.log(mainContainer.appendChild(imageSectionDiv));
    mainContainer.appendChild(imageSectionDiv)
    mainContainer.appendChild(productDetailsDiv)
    productDetailsDiv.appendChild(h1)
    productDetailsDiv.appendChild(h4)
    productDetailsDiv.appendChild(detailsDiv)
    detailsDiv.appendChild(h3DetailsDiv)
    detailsDiv.appendChild(h3)
    detailsDiv.appendChild(para)
    productDetailsDiv.appendChild(productPreviewDiv)
    productDetailsDiv.appendChild(buttonDiv)


    return mainContainer
}
dynamicContentDetails(Products)
