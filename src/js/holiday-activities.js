const baseSource = '/img/holiday-activities/';

const activities = [
    {
        title: 'Sports and Activities',
        classList: ['match-width']
    },
    {
        title: 'Wellness and Health',
        classList: ['match-width']
    },
    {
        title: 'Extreme Sports and Expeditions',
        classList: ['match-width']
    },
    {
        title: 'Games',
        classList: ['match-width']
    },
    {
        title: 'Culture and Education',
        classList: ['two', 'match-width']
    },
    {
        title: 'Enjoyment and Relaxation',
        classList: ['two', 'match-width']
    },
    {
        title: 'Traveling',
        classList: ['match-width']
    }
];


const fillActivities = () => {
    const container = document.querySelector('#activities-article > #activities');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }


    activities.map(activity => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');

        figure.classList.add('no-margin');

        img.src = baseSource + activity.title.split(' ').join('-').toLowerCase() + '.png';
        img.alt = activity.title;

        figcaption.innerText = activity.title;

        figure.appendChild(img);
        figure.appendChild(figcaption);

        (activity.classList || []).forEach(classValue => {
            figure.classList.add(classValue);
        });

        if (activity.style)
            img.style = activity.style;

        if (activity.weight === 2) {
            figure.className = 'double';
        }
        return figure;
    }).forEach(child => container.appendChild(child));
};


fillActivities();
