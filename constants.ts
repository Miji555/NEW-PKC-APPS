
import { AppInfo, AppCategory } from './types';

export const MOCK_APPS: AppInfo[] = [
  {
    id: '1',
    name: 'ChatGPT',
    developer: 'OpenAI',
    category: AppCategory.PRODUCTIVITY,
    rating: 4.9,
    reviews: 1200000,
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/44/e1/9d/44e19d7d-5e26-f761-4604-e51f896b0250/AppIcon-0-0-1x_U007emarketing-0-7-0-sRGB-85-220.png/460x460bb.jpg',
    banner: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    description: 'The official app for ChatGPT, providing the latest model improvements from OpenAI.',
    price: 'Free',
    appStoreUrl: 'https://apps.apple.com/th/app/chatgpt/id6448311069?l=th',
    isEditorsChoice: true
  },
  {
    id: '2',
    name: 'Minecraft',
    developer: 'Mojang',
    category: AppCategory.GAMES,
    rating: 4.8,
    reviews: 500000,
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e5/22/d7/e522d7cc-8b63-8f83-8a30-8a70997c6d64/AppIcon-0-0-1x_U007emarketing-0-10-0-0-85-220.png/460x460bb.jpg',
    banner: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1200',
    description: 'Explore infinite worlds and build everything from the simplest of homes to the grandest of castles.',
    price: '$6.99',
    appStoreUrl: 'https://apps.apple.com/th/app/minecraft/id479516143?l=th'
  }
];
