console.debug("hello");

const frukostItems = [
    {
        name: "Frukosttallerken",
        description:
            "Ferskt brød, smør, ost, skinke, kokt egg, yoghurt med granola og sesongens frukt.",
        price: 149,
        imgSrc: "./images/will smith ai spaghetti.png",
        imgAlt: "img alt text 1",
    },
    {
        name: "Nordisk havregraut",
        description:
            "Kremet havregraut toppa med honning, rista nøtter og friske bær.",
        price: 89,
        imgSrc: "./images/will smith ai spaghetti.png",
        imgAlt: "img alt text 1",
    },
    {
        name: "Avokado & laks",
        description:
            "Rista surdeigsbrød med most avokado, røykelaks, sitron og friske urter.",
        price: 139,
        imgSrc: "./images/will smith ai spaghetti.png",
        imgAlt: "img alt text 1",
    },
    {
        name: "Søt start",
        description:
            "Nysteikte pannekaker serverte med lønnesirup og bærkompott.",
        price: 119,
        imgSrc: "./images/will smith ai spaghetti.png",
        imgAlt: "img alt text 1",
    },
];
const lunsjItems = [
    {
        name: "Rekesmørbrød med sitron og dill",
        description:
            "Handpilla reker på grovbrød med majones, salat, sitron og frisk dill.",
        price: 189,
        imgSrc: "./images/will smith ai spaghetti.png",
        imgAlt: "img alt text 1",
    },
    {
        name: "Kremet fiskesuppe med brød",
        description:
            "Mild og fyldig suppe med laks og torsk, servert med ferskt brød og smør.",
        price: 179,
        imgSrc: "./images/will smith ai spaghetti.png",
        imgAlt: "img alt text 1",
    },
    {
        name: "Røykelaks med eggerøre",
        description: "Norsk røykelaks med mjuk eggerøre, salat og rugbrød.",
        price: 199,
        imgSrc: "./images/will smith ai spaghetti.png",
        imgAlt: "img alt text 1",
    },
    {
        name: "Varm karbonadesmørbrød",
        description:
            "Saftig karbonade med steikt lauk, salat og sylteagurk på landbrød.",
        price: 169,
        imgSrc: "./images/will smith ai spaghetti.png",
        imgAlt: "img alt text 1",
    },
];
const drikkeItems = [
    {
        name: "Kaffi",
        description: "Nykverna kaffi av høg kvalitet.",
        price: 49,
        imgSrc: "./images/will smith ai spaghetti.png",
        imgAlt: "img alt text 1",
    },
    {
        name: "Te",
        description: "Eit utval av svarte, grøne og urtete-sortar.",
        price: 45,
        imgSrc: "./images/will smith ai spaghetti.png",
        imgAlt: "img alt text 1",
    },
    {
        name: "Varm kakao med krem",
        description: "Fyldig kakao toppa med piska krem.",
        price: 55,
        imgSrc: "./images/will smith ai spaghetti.png",
        imgAlt: "img alt text 1",
    },
    {
        name: "Eplemost",
        description: "Lokalprodusert eplemost.",
        price: 59,
        imgSrc: "./images/will smith ai spaghetti.png",
        imgAlt: "img alt text 1",
    },
];

populateMenuItems(document.getElementById("frukost"), frukostItems);
populateMenuItems(document.getElementById("lunsj"), lunsjItems);
populateMenuItems(document.getElementById("drikke"), drikkeItems);

function populateMenuItems(menu, items) {
    var dl = document.createElement("dl");
    menu.appendChild(dl);
    items.forEach((e) => {
        var item = document.createElement("div");
        item.classList.add("item");
        dl.appendChild(item);

        var img = document.createElement("img");
        img.src = e.imgSrc;
        img.alt = e.imgAlt;
        item.appendChild(img);

        var itemTextContainer = document.createElement("div");
        itemTextContainer.classList.add("itemTextContainer");
        item.appendChild(itemTextContainer);

        var dt = document.createElement("dt");
        itemTextContainer.appendChild(dt);
        var name = document.createElement("h3");
        name.innerHTML = e.name + " - " + e.price + " kr";
        dt.appendChild(name);

        var dd = document.createElement("dd");
        dd.innerHTML = e.description;
        itemTextContainer.appendChild(dd);
    });
}
