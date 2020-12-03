import {UserTypes} from '../const';

export const news = [
  {
    id: 1,
    title: 'Путин поручил на следующей неделе начать вакцинацию от COVID-19',
    content: 'В России начинается массовая вакцинация от коронавируса COVID-19. Распоряжение о начале вакцинации с 7 декабря президент России Владимир Путин дал вице-премьеру Татьяне Голиковой. Он отметил, что в ближайшие дни будет произведено в России уже более двух миллионов доз вакцины "Спутник V"',
    date: '2020-12-03T15:48:33.373Z',
    authorId: 2,
    isApproved: true
  },
  {
    id: 2,
    title: '«Роснано» вместо Анатолия Чубайса возглавит Сергей Куликов',
    content: 'МОСКВА, 3 дек - РИА Новости. Президент России Владимир Путин предложил зампредседателя коллегии Военно-промышленной комиссии Сергеем Куликовым стать главой "Роснано" вместо Анатолия Чубайса.',
    date: '2020-12-03T16:00:33.373Z',
    authorId: 2,
    isApproved: false
  },
  {
    id: 3,
    title: 'США и Британия объяснили пропуск встречи СБ ООН по Украине',
    content: 'Три страны, которые не приняли участие в неформальной встрече Совбеза ООН по минским договоренностям, прошедшей по инициативе России, объяснили свое отсутствие. Об этом сообщает РИА "Новости"',
    date: '2020-12-03T19:48:33.373Z',
    authorId: 3,
    isApproved: true
  },
  {
    id: 4,
    title: 'В России внесли изменения в права и другие документы для водителей',
    content: 'В России внесли изменения в документы для автомобилистов: водительские права, паспорт транспортного средства (ПТС), а также свидетельство о его регистрации (СТС).',
    date: '2020-12-03T20:48:33.373Z',
    authorId: 2,
    isApproved: false
  },
  {
    id: 5,
    title: 'Ученые выявили наиболее опасный источник заражения COVID-19',
    content: 'Китайские ученые выяснили, что риск заразиться коронавирусной инфекцией у членов одной семьи при совместной самоизоляции выше, чем если бы они пользовались общественным транспортом.',
    date: '2020-12-03T21:48:33.373Z',
    authorId: 3,
    isApproved: false
  },
];

export const users = [
  {
    id: 1,
    login: `admin`,
    password: `1234`,
    type: UserTypes.ADMIN
  },
  {
    id: 2,
    login: `bestauthor`,
    password: `1234`,
    type: UserTypes.USER
  },
  {
    id: 3,
    login: `author`,
    password: `1234`,
    type: UserTypes.USER
  }
]