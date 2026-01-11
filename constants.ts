
import { AppInfo, AppCategory } from './types';

export const MOCK_APPS: AppInfo[] = [
  // Games
  {
    id: 'minecraft',
    name: 'Minecraft',
    developer: 'Mojang',
    category: AppCategory.GAMES,
    rating: 4.8,
    reviews: 500000,
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/91/9e/7b/919e7b30-c831-50e5-7973-206e0176f183/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/200x200bb.png',
    banner: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1200',
    description: 'สร้างโลกของคุณ เกมจำลองการสร้างบล็อก',
    price: '$6.99',
    appStoreUrl: 'https://apps.apple.com/th/app/minecraft/id479516143'
  },
  {
    id: 'rov',
    name: 'Garena RoV',
    developer: 'Garena',
    category: AppCategory.GAMES,
    rating: 4.5,
    reviews: 300000,
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/21/92/8a/21928ab1-2a6c-e06a-9351-831518f9746b/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/200x200bb.png',
    banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
    description: 'สุดยอดเกม MOBA 5v5 บนมือถือ',
    price: 'Free',
    appStoreUrl: 'https://apps.apple.com/th/app/garena-rov-5v5-festival/id1150337432'
  },
  // Productivity & AI
  {
    id: 'gemini',
    name: 'Google Gemini',
    developer: 'Google LLC',
    category: AppCategory.PRODUCTIVITY,
    rating: 4.7,
    reviews: 125000,
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/37/10/7c/37107c1b-2628-912b-6320-1e90d0b7849e/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/200x200bb.png',
    banner: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    description: 'คุยเพื่อคิดไอเดีย วางแผน และทำสิ่งต่างๆ ได้มากขึ้นด้วย AI จาก Google',
    price: 'Free',
    appStoreUrl: 'https://apps.apple.com/th/app/google-gemini/id6477489729?l=th'
  },
  {
    id: 'efootball',
    name: 'eFootball™',
    developer: 'KONAMI',
    category: AppCategory.GAMES,
    rating: 4.3,
    reviews: 150000,
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b8/8d/61/b88d613b-2831-2831-6e3e-7977a423758b/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/200x200bb.png',
    banner: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200',
    description: 'สุดยอดเกมฟุตบอลสมจริง',
    price: 'Free',
    appStoreUrl: 'https://apps.apple.com/th/app/efootball/id1117270703'
  },
  {
    id: 'roblox',
    name: 'Roblox',
    developer: 'Roblox Corporation',
    category: AppCategory.GAMES,
    rating: 4.4,
    reviews: 800000,
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c6/16/e2/c616e255-b461-854f-1262-e50b7305948a/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/200x200bb.png',
    banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200',
    description: 'Ultimate virtual universe.',
    price: 'Free',
    appStoreUrl: 'https://apps.apple.com/th/app/roblox/id431946152'
  },
  // SNS
  {
    id: 'tiktok',
    name: 'TikTok',
    developer: 'ByteDance',
    category: AppCategory.SNS,
    rating: 4.9,
    reviews: 6000000,
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/18/d8/67/18d867c2-9e2c-47d0-1498-5c493c403330/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/200x200bb.png',
    banner: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=1200',
    description: 'วิดีโอสั้นเพื่อความบันเทิง',
    price: 'Free',
    appStoreUrl: 'https://apps.apple.com/th/app/tiktok/id1235601864'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    developer: 'Meta',
    category: AppCategory.SNS,
    rating: 4.6,
    reviews: 5000000,
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8d/62/1d/8d621d74-2c26-5384-6330-84c68023758b/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/200x200bb.png',
    banner: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
    description: 'ติดต่อกับเพื่อนและครอบครัว',
    price: 'Free',
    appStoreUrl: 'https://apps.apple.com/th/app/facebook/id284882215'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    developer: 'Meta',
    category: AppCategory.SNS,
    rating: 4.8,
    reviews: 3500000,
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c7/2b/96/c72b9631-f18b-6677-789a-6c174358826d/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/200x200bb.png',
    banner: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?auto=format&fit=crop&q=80&w=1200',
    description: 'แชร์รูปภาพและวิดีโอ',
    price: 'Free',
    appStoreUrl: 'https://apps.apple.com/th/app/instagram/id389801252'
  },
  // Utility
  {
    id: 'meitu',
    name: 'Meitu',
    developer: 'Meitu, Inc.',
    category: AppCategory.UTILITY,
    rating: 4.8,
    reviews: 120000,
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4a/04/00/4a040082-9092-23c5-6804-06927d118933/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/200x200bb.png',
    banner: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
    description: 'แต่งรูปสวยและวีดีโอ Photo & Video Editor',
    price: 'Free',
    appStoreUrl: 'https://apps.apple.com/th/app/meitu-photo-video-editor/id416048305'
  },
  {
    id: 'spotify',
    name: 'Spotify',
    developer: 'Spotify',
    category: AppCategory.UTILITY,
    rating: 4.8,
    reviews: 800000,
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7e/f0/a0/7ef0a012-70b1-129a-2481-2090875e656d/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/200x200bb.png',
    banner: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1200',
    description: 'ฟังเพลงและพอดแคสต์ Music and Podcasts',
    price: 'Free',
    appStoreUrl: 'https://apps.apple.com/th/app/spotify-music-and-podcasts/id324684580'
  }
];
