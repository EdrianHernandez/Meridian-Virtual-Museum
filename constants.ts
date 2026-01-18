import { Room } from './types';

export const MUSEUM_ROOMS: Room[] = [
  {
    id: 'hall-of-antiquity',
    name: 'Hall of Antiquity',
    description: 'Explore the foundations of early civilization through preserved relics and statuary.',
    imageUrl: 'https://picsum.photos/id/235/1920/1080', // Mountains/foggy look for mystery
    audioDuration: 145,
    artifacts: [
      {
        id: 'a1',
        title: 'The Obsidian Vase',
        description: 'A ceremonial vessel dated back to 500 BCE, noted for its intricate carvings.',
        x: 35,
        y: 60,
        imageUrl: 'https://picsum.photos/id/36/800/600'
      },
      {
        id: 'a2',
        title: 'Golden Laurel',
        description: 'Worn by emperors during triumphs, this fragile piece symbolizes victory.',
        x: 65,
        y: 45,
        imageUrl: 'https://picsum.photos/id/88/800/600'
      }
    ]
  },
  {
    id: 'renaissance-gallery',
    name: 'Renaissance Gallery',
    description: 'A collection of masterpieces highlighting the rebirth of art and culture in Europe.',
    imageUrl: 'https://picsum.photos/id/433/1920/1080', // Architecture/statues
    audioDuration: 180,
    artifacts: [
      {
        id: 'r1',
        title: 'Marble Bust of Aethelgard',
        description: 'Sculpted by an unknown master, capturing the stoic expression of the era.',
        x: 50,
        y: 50,
        imageUrl: 'https://picsum.photos/id/338/800/600'
      },
      {
        id: 'r2',
        title: 'The Forgotten Fresco',
        description: 'Fragments of a larger wall painting depicting the harvest.',
        x: 20,
        y: 30,
        imageUrl: 'https://picsum.photos/id/433/800/600'
      },
      {
        id: 'r3',
        title: 'Bronze Astrolabe',
        description: 'An early scientific instrument used for navigating the stars.',
        x: 80,
        y: 70,
        imageUrl: 'https://picsum.photos/id/257/800/600'
      }
    ]
  },
  {
    id: 'modern-wing',
    name: 'Modern Abstractions',
    description: 'Contemporary works that challenge the perception of form and space.',
    imageUrl: 'https://picsum.photos/id/532/1920/1080', // Abstract/Architectural
    audioDuration: 120,
    artifacts: [
      {
        id: 'm1',
        title: 'Cube #4',
        description: 'A minimalist sculpture challenging the concept of density.',
        x: 40,
        y: 80,
        imageUrl: 'https://picsum.photos/id/160/800/600'
      }
    ]
  }
];