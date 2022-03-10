import { v4 as uuidv4 } from 'uuid';
import DonkeyImg from '../images/donkey.jpg';
import TetrisImg from '../images/tetris.jpg';
import SpaceImg from '../images/space.jpg';
import PacManImg from '../images/pacman.jpg';
import StreetImg from '../images/street.jpg';
import DoomImg from '../images/doom.jpg';

const games = [
  {
    id: uuidv4(),
    name: 'Tetris',
    desc:
      'Click image to play Tetris, this classic game came out in 1984 and was one of the first puzzle games.',
    img: TetrisImg,
  },
  {
    id: uuidv4(),
    name: 'Space Invaders',
    desc:
      'Click image to play Space Invaders, releaed in 1978 this was the first fixed shoorer game.',
    img: SpaceImg,
  },
  {
    id: uuidv4(),
    name: 'Pac Man',
    desc:
      'Click image to play Pac Man, this maze game was releaased in 1980 making it the first of the genre.',
    img: PacManImg,
  },
  {
    id: uuidv4(),
    name: 'Street Fighter II',
    desc:
      'Click image to play Street Fighter II, a competitive fighting game developed by Capcom and originally released for arcades in 1991.',
    img: StreetImg,
  },
  {
    id: uuidv4(),
    name: 'Donkey Kong',
    desc:
      'Click image to play Donkey Kong, a 1981 arcade platform video game released by Nintendo.',
    img: DonkeyImg,
  },
  {
    id: uuidv4(),
    name: 'Doom',
    desc:
      'Click image to play Doom. a 1993 first-person shooter (FPS) game developed by id Software.',
    img: DoomImg,
  },
];

export default games;