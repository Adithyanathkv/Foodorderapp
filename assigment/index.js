//  let foodData = [{
//     name:"Chicken Cryspy",
//     price:999,
//     image:"https://i.ytimg.com/vi/6x1kyFdmz3s/maxresdefault.jpg",
// },{
//     name:"Burger",
//     price:899,
//     image:"https://loveincorporated.blob.core.windows.net/contentimages/gallery/65e52a5e-7b25-4247-8927-f9f68fcd1aba-McSpicy_Paneer_India.jpg"
// },{
//     name:"Fries",
//     price:2199,
//     image:"https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/mcdonalds-french-fries-on-tray.jpg"
// },{
//     name:"Chicken Bucket",
//     price:1200,
//     image:"https://www.8days.sg/image/15116762/3x4/1440/1920/4e121c5635b8e98e9bcfbad75d8338b4/Lb/mcdonald-s-chicken-bucket.jpg"
// },{
//     name:"Leg_piece",
//     price:900,
//     image:"https://mcdonaldsblog.in/wp-content/uploads/2020/05/McSpicy-Fried-Chicken1408.jpg"
// }];
let burgerArray = [
  {
    name: "Burger",
    price: 899,
    image:
      "https://loveincorporated.blob.core.windows.net/contentimages/gallery/65e52a5e-7b25-4247-8927-f9f68fcd1aba-McSpicy_Paneer_India.jpg",
  },
];
let friesArray = [
  {
    name: "Fries",
    price: 2199,
    image:
      "https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/mcdonalds-french-fries-on-tray.jpg",
  },
];
let chickenbucketArray = [
  {
    name: "Chicken Bucket",
    price: 1200,
    image:
      "https://images-sg.girlstyle.com/wp-content/uploads/2021/07/f4f79c54.jpg?quality=90",
  },
];

function displaydata(burgerArray) {
  burgerArray.map(function (ele, index, array) {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = ele.image;
    image.id = "servedimage";
    let h5 = document.createElement("h5");
    h5.innerText = Math.floor(Math.random() * 30 + 1);
    div.append(image, h5);
    document.querySelector("#afterorder").append(div);
  });
}

let Open = document.querySelector("#open");
Open.style.display = "none";

function openorclose() {
  let nav = document.querySelector("#navcheck");
  if (nav.checked) {
    document.querySelector("#afterorder").innerText = "";
    let Open = document.querySelector("#open");
    Open.style.display = "block";
    let Close = document.querySelector("#closed");
    Close.style.display = "none";
  } else {
    document.querySelector("#afterorder").innerText = "";
    let Open = document.querySelector("#open");
    Open.style.display = "none";
    let Close = document.querySelector("#closed");
    Close.style.display = "block";
  }
}

function orderFood() {
  let burger = document.querySelector("#burger");
  let fries = document.querySelector("#fries");
  let chickenbucket = document.querySelector("#Chickenbucket");

  let nav = document.querySelector("#navcheck");

  if (nav.checked) {
    var status = "open";
    let close = document.querySelector("#closed");
    close.style.display = "none";
    document.querySelector("#afterorder").innerText = "";
  } else {
    var status = "closed";
  }

  let time = Math.floor(Math.random() * 10000);

  let foodPromise = new Promise(function (resolve, reject) {
    if (status === "closed") {
      reject("Shop is Closed");
    } else {
      setTimeout(function () {
        if (burger.checked) {
          // console.log("hai")
          resolve(burgerArray);
        }
        if (fries.checked) {
          // console.log("chicken")
          resolve(friesArray);
        }
        if (Chickenbucket.checked) {
          // console.log("chicken")
          resolve(chickenbucketArray);
        }
      }, time);
    }
  });
  setTimeout(() => {
    if (burger.checked) {
      foodPromise.then(function (res) {
        displaydata(burgerArray);
        // burger.removeAttribute("type","checkbox")
        burger.checked = false;
      });
    }
  }, time + 3);

  setTimeout(() => {
    if (fries.checked) {
      foodPromise.then(function (res) {
        displaydata(friesArray);
        fries.checked = false;
      });
    }
  }, time + 1);

  setTimeout(() => {
    if (chickenbucket.checked) {
      foodPromise.then(function (res) {
        displaydata(chickenbucketArray);
        chickenbucket.checked = false;
      });
    }
  }, time + 5);

  foodPromise.catch(function (error) {
    setTimeout(function () {
      document.querySelector("#afterorder").innerText = "";
      let img = document.createElement("img");
      img.src =
        "https://cdn.vectorstock.com/i/1000x1000/71/12/sorry-we-are-closed-sign-on-door-store-business-vector-27127112.webp";
      img.id = "closedimage";
      document.querySelector("#afterorder").append(img);
    }, 1);
  });
}
