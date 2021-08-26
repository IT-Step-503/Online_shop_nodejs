let submitBtn = document.querySelector(".submit");
let form = document.querySelector("form");

submitBtn.addEventListener("click", function(e) {
    let data = {};

    for (let elem of form.children) {
        if (elem.name != "") {
            if (elem.className === "select_box") {
                for (let element of elem.children) {
                    data[element.name] = element.value;
                }
            } else {
                data[elem.name] = elem.value;
            }
        }
    }

    data.imgurl = data.mainImgUrl;
    data.imgUrls = [data.mainImgUrl, data.secondImgUrl, data.thirdImgUrl];
    delete data.mainImgUrl
    delete data.secondImgUrl
    delete data.thirdImgUrl

    data.sizes = [];
    let keys = Object.keys(data);

    keys.forEach((el) => {
        if (/size-/.test(el)) {
            let obj = {}
            obj.size = data[el];
            obj.qty = data[`qty-${el.split("size-")[1]}`];
            data.sizes.push(obj);

            delete data[el]
            delete data[`qty-${el.split("size-")[1]}`]

        }

        if (el === "") {
            delete data[el];
        }
    })

    console.log(data);
    e.preventDefault();
});