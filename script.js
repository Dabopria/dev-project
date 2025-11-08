const clipPath = () => {
    const hero = document.querySelector('.hero');

    if (hero) {
        if (window.innerWidth < 1024) {
            hero.style.clipPath = 'polygon(0 0, 100% 0, 100% 47vh, 50% 100%, 0 47vh)';
        } else {
            hero.style.clipPath = 'polygon(0 0, 100% 0, 100% 90vh, 50% 100%, 0 90vh)';
        }
    }
}
clipPath();

window.addEventListener('resize', clipPath);


const page2ContentAddition = () => {
    const data = [
        { title: 'Hotel & Hospitality', img: '' ,subtitle: 'Unique Hotel & Resorts' },
        { title: 'Real Estate', img: '' ,subtitle: 'Borak Real Estate Ltd.' },
        { title: 'Energy & Power', img: '' ,subtitle: 'Unique Meghnaghat Power Limited' },
        { title: 'Facility Management', img: '' ,subtitle: 'Hansa Management Ltd.' },
        { title: 'Ready Mix Concrete', img: '' ,subtitle: 'Borak Ready Mix Concrete' },
        { title: 'Auto Bricks', img: '' ,subtitle: 'Unique Ceramics Ltd.' },
        { title: 'Health Care', img: '' ,subtitle: 'Gulshan Clinic Ltd.' },
        { title: 'Newspaper', img: '' ,subtitle: 'The Daily Amader Shomoy' },
        { title: 'Economic Zone', img: '' ,subtitle: 'Sonargaon Economic Zone Ltd.' },
        { title: 'Tours & Travels', img: '' ,subtitle: 'Unique Tours & Travels' },
        { title: 'Agro & Dairy Farm', img: '' ,subtitle: 'Arial Agro Ltd.' },
        { title: 'Education & Training', img: '' ,subtitle: 'Update College, Institute, & BPI' },
        { title: 'Stock Brokerage', img: '' ,subtitle: 'Unique Share Management Ltd.' },
        { title: 'Technology', img: '' ,subtitle: 'MySys and Uninet Global Ltd.' },
        { title: 'Networking', img: '' ,subtitle: 'Bangla Tel Ltd.' }
    ];
}