let div = document.createElement("div");
div.classList.add("d-flex", "flex-wrap","justify-content-around","div");
document.body.appendChild(div);
div.setAttribute("id", "head");




const betterCode = async () => {
    try{
  let response = await fetch(
    `https://anapioficeandfire.com/api/books?pageSize=15`
  );
        return await response.json();
    }catch (err) {
            console.log(err);
        }
};

        let imgarr = ["https://i5.walmartimages.com/asr/32972475-32a2-44e4-8e33-0821d4703de3_1.3fe5fd84d9507c71205cf4982747048a.jpeg", "https://kbimages1-a.akamaihd.net/00900976-c551-4258-9cf5-f0b190e2d2e9/1200/1200/False/a-clash-of-kings-the-illustrated-edition.jpg", "https://www.lwcurrey.com/pictures/medium/158627.jpg?v=1520549868", "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/959703.jpg", "https://boomcrib.com/wp-content/uploads/2020/11/A-Feast-for-Crows-by-George-R-R-Martin.jpg", "https://wordery.com/jackets/ed1e66a8/l/the-sworn-sword-the-graphic-novel-george-r-r-martin-9781477849293.jpg", "http://images.gr-assets.com/books/1397654538l/11350430.jpg", "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1029151.jpg", "http://pre07.deviantart.net/060a/th/pre/i/2013/338/6/f/the_princess_and_the_queen_book_cover_by_nateblunt-d6wqf76.jpg", "https://covers.zlibcdn2.com/covers/books/c8/23/3e/c8233ee677427a6eeb3badba02ebf8fb.jpg", "https://images.thenile.io/r1000/9780007580910.jpg", "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2976401.jpg"];

betterCode()
    .then((response) => {
        console.log(response);
        let p = 0;
        response.map((x) => {

            let cardpdiv = document.createElement("div");
            cardpdiv.setAttribute("id", "card");
            cardpdiv.setAttribute("style", "width: 30rem; height: 62rem;");
            cardpdiv.classList.add("card","m-3","p-5","card","border-success","bg-light","cardpdiv");
            div.appendChild(cardpdiv);

            let img = document.createElement("img");
            img.classList.add("img-fluid");
            
            img.setAttribute("src", imgarr[p]);
            img.setAttribute("style", "height:30rem");            
            cardpdiv.appendChild(img);
            p = p + 1;

            


            let cardBody = document.createElement("p");
            cardBody.setAttribute("id", "cardbody");
            cardBody.classList.add("cardBody");
            cardpdiv.appendChild(cardBody);

            let cardTitle = document.createElement("h5");
            cardTitle.setAttribute("id", "cardtitle");
            cardTitle.classList.add("cardTitle");
            cardBody.appendChild(cardTitle);

            let cardText = document.createElement("p");
            cardText.setAttribute("id", "cardtext");
            cardText.classList.add("cardText");
            cardBody.appendChild(cardText);


            let btn = document.createElement("a");
            btn.setAttribute("href", "#");
            btn.setAttribute("style", "height:3rem");
            btn.classList.add( "mbtn", "text-center","pt-2","pb-2","infobtn");
            
            btn.innerText = "See Characters";
            btn.addEventListener("click", () => {
                let carr = x.characters;
                let rarr = [];
                for (i = 0; i <= 5; i++) {
                    fetch(carr[i])
                        .then((res) => res.json())
                        .then((objc) => {
                            let cname = objc.name;
                            rarr.push(cname);
                            console.log("rarr", rarr);
                        })
                }
                setTimeout(() => {
                    let ul = document.createElement("ul");
                            for (let i = 0; i < 4; i++) {
                                let li = document.createElement("li");
                                li.innerHTML = rarr[i];
                                ul.appendChild(li);
                    }
                     cardpdiv.appendChild(ul);
                },3000);
            })
            cardpdiv.appendChild(btn);
                
            

            let divB = document.createElement("p");
            divB.classList.add("d-flex", "flex-column");
            cardText.appendChild(divB);



            let bName = document.createElement("p");
            bName.setAttribute("id", "bname");
            bName.innerText = "Book Name 📕:"+ x.name; 
            cardTitle.appendChild(bName);

            let bNo = document.createElement("p");
            bNo.innerText = "ISBN 🔢: " + x.isbn;
            divB.appendChild(bNo);

            let bPg = document.createElement("p");
            bPg.innerText = "No. of Pages 📖: " + x.numberOfPages;
            divB.appendChild(bPg);

            let bAuthor = document.createElement("p");
            bAuthor.innerText = "Authors ✍️: " + x.authors;
            divB.appendChild(bAuthor);

            let bPubl = document.createElement("p");
            bPubl.innerText = "Publisher 🤵: " + x.publisher;
            divB.appendChild(bPubl);

         

            let bRd = document.createElement("p");
            bRd.innerText = "Released Date 📅: " + x.released;
            divB.appendChild(bRd);

        })



    })

let find = document.getElementById("search");
let tofind = document.getElementById("insearch");
let result = document.getElementById("details");
let direct = "https://www.youtube.com/results?search_query=";
result.addEventListener("click", () => {
    if (tofind.value.length>0) {
        location.href = direct + tofind.value;
    }
})

find.addEventListener("click", () => {
    if (tofind.value) {
        window.find(tofind.value);
    }
})