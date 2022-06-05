const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const CAT_BTN = document.getElementById("change-cat")

const getCats = async () => {
    const data = await fetch(BASE_URL, {mode: 'no-cors'})
    .then((res) => res.json())
    .catch((e) => console.log(e))
    // const json = await data.json()
    
    return data.webpurl
}

const loadImg = async () => {
    const CAT_IMG = document.getElementById("cat")
    CAT_IMG.src = await getCats()
}

CAT_BTN.addEventListener('click', loadImg)

loadImg()