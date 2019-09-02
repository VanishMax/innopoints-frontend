export default [
  {
    id: 1,
    img: '/images/projects/chess-club.png',
    title: 'Chess Tournament',
    date: {
      start: new Date('2019-07-05T00:00:00'),
      end: new Date('2019-07-05T00:00:00'),
    },
    organizer: '319',
    activities: [
      'Requisite management',
      'Catering',
      'Script writing',
      'Judging',
      'Preparation',
    ],
    spots: 3,
    competences: ['creativity', 'critical thinking', 'leadership', 'conflict aversion', 'communication', 'some other skill'],
    status: 'Unpublished, awaiting review',
  },
  {
    id: 2,
    img: '/images/projects/arro.png',
    title: 'All-Russian Robotics Olympiad',
    date: {
      start: new Date('2019-07-05T00:00:00'),
      end: new Date('2019-07-08T00:00:00'),
    },
    organizer: 'Olympiads dept.',
    activities: [
      'Requisite management',
      'Catering',
    ],
    spots: 5,
    competences: ['conflict aversion', 'communication'],
    status: 'Modified, awaiting review',
  },
];
