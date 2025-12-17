import { Department, NavItem, NewsItem, Abnormality } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'Containment', href: '#containment' },
  { label: 'Departments', href: '#departments' },
  { label: 'Technology', href: '#technology' },
  { label: 'Careers', href: '#careers' },
];

export const DEPARTMENTS: Department[] = [
  {
    id: 'control',
    name: 'Control Team',
    sephirah: 'Malkuth',
    description: 'Directing the flow of operations. "A manager must always stand tall, even when their legs are trembling."',
    color: 'border-amber-600',
    textColor: 'text-amber-600',
    icon: 'Activity',
    imageUrl: 'public/MalkuthFullBody.png'
  },
  {
    id: 'info',
    name: 'Information Team',
    sephirah: 'Yesod',
    description: 'Processing data. "A viper that knows not how to shed its skin will die. We must shed our skin."',
    color: 'border-violet-700',
    textColor: 'text-violet-700',
    icon: 'Eye',
    imageUrl: 'public/YesodFullBody.png'
  },
  {
    id: 'training',
    name: 'Training Team',
    sephirah: 'Hod',
    description: 'Preparing new employees. "Please, I hope you can be a good person."',
    color: 'border-orange-400',
    textColor: 'text-orange-400',
    icon: 'BookOpen',
    imageUrl: 'public/Hod_fullbody.png'
  },
  {
    id: 'security',
    name: 'Security Team',
    sephirah: 'Netzach',
    description: 'Ensuring physical safety. "Is it time to work already? I haven\'t even sobered up yet..."',
    color: 'border-green-500',
    textColor: 'text-green-500',
    icon: 'Shield',
    imageUrl: 'public/NetzachFullBody.png'
  },
  {
    id: 'central',
    name: 'Central Command',
    sephirah: 'Tiphereth',
    description: 'Balancing the facility. "The world doesn\'t wait for the weak. We must be strong."',
    color: 'border-yellow-400',
    textColor: 'text-yellow-400',
    icon: 'Hexagon',
    imageUrl: 'public/Tiphereth_fullbody_A.png'
  },
  {
    id: 'disciplinary',
    name: 'Disciplinary Team',
    sephirah: 'Gebura',
    description: 'Suppression of entities. "Only the strongest survive. That is the rule of this place."',
    color: 'border-red-700',
    textColor: 'text-red-700',
    icon: 'Sword',
    imageUrl: 'public/Gebura_fullbody.png'
  }
];

export const ABNORMALITIES: Abnormality[] = [
  {
    id: 'onesin',
    code: 'O-03-03',
    name: 'One Sin and Hundreds of Good Deeds',
    riskLevel: 'ZAYIN',
    description: 'A skull floating in the air, crowned with thorns. It feeds on confessions.',
    imageUrl: 'public/OneSinCloseUp.webp'
  },
  {
    id: 'punishing',
    code: 'O-02-56',
    name: 'Punishing Bird',
    riskLevel: 'TETH',
    description: 'A small bird with a red belly. People have been punished for touching it.',
    imageUrl: 'public/PunishingBirdPortrait.webp'
  },
  {
    id: 'nothingthere',
    code: 'O-06-20',
    name: 'Nothing There',
    riskLevel: 'ALEPH',
    description: 'It mimics human form but cannot mimic the human heart. Extremely dangerous.',
    imageUrl: 'public/NothingThereCloseUp.webp'
  },
  {
    id: 'bluestar',
    code: 'O-03-93',
    name: 'Blue Star',
    riskLevel: 'ALEPH',
    description: 'A star that draws all things into its core. The sound of salvation is deafening.',
    imageUrl: 'public/Blue_Star_Crop.webp'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    date: '2025-10-24',
    category: 'Protocol Update',
    title: 'Dawn of Green Ordeal Suppression Guide',
    summary: 'Updated combat protocols for machine-type entities appearing at dawn. EMP weaponry authorized.'
  },
  {
    id: 2,
    date: '2025-10-21',
    category: 'Mental Health',
    title: 'Cognitive Filter Maintenance Scheduled',
    summary: 'The perception filter will undergo a brief reset at 03:00. Do not panic if the walls appear to bleed.'
  },
  {
    id: 3,
    date: '2025-10-15',
    category: 'Recruitment',
    title: 'Rabbit Team Joint Operation',
    summary: 'R Corp mercenaries will be stationed in the lower levels. Stay clear of designated bio-hazard zones.'
  }
];