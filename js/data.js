import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ?!'
];
const DESCRIPTIONS = [
  'Если вас огорчает наступление понедельника, работайте без выходных',
  'Каникулы в Мексике)))',
  'Впечатления',
  'С днем рождения меня!!!',
  'Случайное фото',
  'Я обернулся посмотреть не обернулась ли она...'
];
const NAMES = ['Амина', 'Рината', 'Нюша', 'Ваня', 'Настя', 'Илья'];

// сохраняет значение предыдущего идентификатора после каждого вызова
const generateCommentId = createIdGenerator();

//генерируем рандомный комментарий из массива
const createMessages = () =>
  Array.from({ length: getRandomInteger(1, 6) }, () =>
    getRandomArrayElement(COMMENT_LINES)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  messeg: createMessages(),
  name: getRandomArrayElement(NAMES)
});

const getComments = () =>
  Array.from({ length: getRandomInteger(1, 3) }, (_, commentIndex) =>
    createComment(commentIndex + 1)
  );

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comment: getComments()
});

const getPictures = () =>
  Array.from({ length: PICTURE_COUNT }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

export { getPictures };
