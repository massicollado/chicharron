const partners = [
    {
        name: 'Bradley Hunter',
        info: 'Based in Chicago. I love playing tennis and loud music.'
    },
    {
        name: 'Marie Bennett',
        info: 'Currently living in Colorado. Lover of art, languages and travelling.'
    },
    {
        name: 'Diana Wells',
        info: 'Living in Athens, Greece. I love black and white classics, chillout music and green tea.'
    },
    {
        name: 'Christopher Pierce',
        info: 'Star Wars fanatic. I have a persistent enthusiasm to create new things.'
    }
];

const container = document.querySelector('#partner > .images');


partners.map(partner => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');
    const name = document.createElement('h1');
    const info = document.createElement('span');

    figure.classList.add('no-margin');

    figure.append(img);
    figure.append(figcaption);
    figcaption.append(name);
    figcaption.appendChild(info);

    name.innerText = partner.name;
    info.innerText = partner.info;

    img.src = `/img/partners/${partner.name.toLowerCase().split(' ').join('-')}.jpg`;

    return figure;
}).forEach(child => {
    container.appendChild(child);
});
