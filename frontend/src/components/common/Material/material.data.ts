let materialImages = [
    {
        id: 1,
        img: '/assets/onegoldchair.png',
        obj: {
            id: 1,
            title: 'Nordic',
            price: '#500000'
        }
    },
    {
        id: 2,
        img: '/assets/onesinglechair.png',
        obj: {
            id: 2,
            title: 'Nordic',
            price: '#500000'
        }
    },
    {
        id: 3,
        img: '/assets/oneroundbottomchair.png',
        obj: {
            id: 3,
            title: 'Nordic',
            price: '#500000'
        }
    },
]

const set = new Set(materialImages);
export let arrCardSet = [...set];