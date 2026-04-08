export interface Team {
  id: string;
  name: string;
  shortName: string;
  colorClass: string;
  color: string;
  city: string;
  titles: number;
  captain: string;
  coach: string;
  homeGround: string;
  emoji: string;
  wins: number;
  losses: number;
  nrr: string;
}

export interface Player {
  id: string;
  name: string;
  teamId: string;
  teamShort: string;
  teamColorClass: string;
  role: string;
  nationality: string;
  age: number;
  emoji: string;
  batting: {
    matches: number;
    runs: number;
    average: number;
    strikeRate: number;
    fifties: number;
    hundreds: number;
  };
  bowling: {
    wickets: number;
    economy: number;
    average: number;
    bestFigures: string;
  };
}

export interface BattingEntry {
  name: string;
  dismissal: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
}

export interface BowlingEntry {
  name: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
}

export interface Innings {
  team: string;
  score: string;
  overs: string;
  batting: BattingEntry[];
  bowling: BowlingEntry[];
}

export interface Match {
  id: string;
  team1: string;
  team2: string;
  team1Short: string;
  team2Short: string;
  team1Color: string;
  team2Color: string;
  team1ColorClass: string;
  team2ColorClass: string;
  venue: string;
  date: string;
  time: string;
  status: 'live' | 'upcoming' | 'completed';
  matchNumber: string;
  result?: string;
  team1Score?: string;
  team2Score?: string;
  innings?: Innings[];
  toss?: string;
  manOfMatch?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  emoji: string;
  summary: string;
}

export interface PointsEntry {
  rank: number;
  teamId: string;
  team: string;
  teamShort: string;
  colorClass: string;
  played: number;
  won: number;
  lost: number;
  noResult: number;
  points: number;
  nrr: string;
  form: string[];
  qualifier: boolean;
  eliminator: boolean;
}

export const teams: Team[] = [
  {
    id: 'lq',
    name: 'Lahore Qalandars',
    shortName: 'LQ',
    colorClass: 'team-lq',
    color: '#e31e24',
    city: 'Lahore',
    titles: 2,
    captain: 'Shaheen Shah Afridi',
    coach: 'Aaqib Javed',
    homeGround: 'Gaddafi Stadium, Lahore',
    emoji: '🔴',
    wins: 8,
    losses: 2,
    nrr: '+1.234',
  },
  {
    id: 'kk',
    name: 'Karachi Kings',
    shortName: 'KK',
    colorClass: 'team-kk',
    color: '#00a651',
    city: 'Karachi',
    titles: 1,
    captain: 'Imad Wasim',
    coach: 'Dean Jones (Legacy)',
    homeGround: 'National Stadium, Karachi',
    emoji: '🟢',
    wins: 4,
    losses: 6,
    nrr: '-0.456',
  },
  {
    id: 'pz',
    name: 'Peshawar Zalmi',
    shortName: 'PZ',
    colorClass: 'team-pz',
    color: '#f7941d',
    city: 'Peshawar',
    titles: 1,
    captain: 'Babar Azam',
    coach: 'Daren Sammy',
    homeGround: 'Arbab Niaz Stadium, Peshawar',
    emoji: '🟠',
    wins: 6,
    losses: 4,
    nrr: '+0.345',
  },
  {
    id: 'iu',
    name: 'Islamabad United',
    shortName: 'IU',
    colorClass: 'team-iu',
    color: '#ef3e42',
    city: 'Islamabad',
    titles: 2,
    captain: 'Shadab Khan',
    coach: 'Mike Hesson',
    homeGround: 'Rawalpindi Cricket Stadium',
    emoji: '🔵',
    wins: 7,
    losses: 3,
    nrr: '+0.678',
  },
  {
    id: 'ms',
    name: 'Multan Sultans',
    shortName: 'MS',
    colorClass: 'team-ms',
    color: '#1e88e5',
    city: 'Multan',
    titles: 2,
    captain: 'Mohammad Rizwan',
    coach: 'Andy Flower',
    homeGround: 'Multan Cricket Stadium',
    emoji: '🔵',
    wins: 5,
    losses: 5,
    nrr: '+0.123',
  },
  {
    id: 'qs',
    name: 'Quetta Gladiators',
    shortName: 'QG',
    colorClass: 'team-qs',
    color: '#9c27b0',
    city: 'Quetta',
    titles: 1,
    captain: 'Sarfaraz Ahmed',
    coach: 'Moin Khan',
    homeGround: 'Bugti Stadium, Quetta',
    emoji: '🟣',
    wins: 3,
    losses: 7,
    nrr: '-0.789',
  },
];

export const players: Player[] = [
  {
    id: 'babar',
    name: 'Babar Azam',
    teamId: 'pz',
    teamShort: 'PZ',
    teamColorClass: 'team-pz',
    role: 'Batsman',
    nationality: 'Pakistan',
    age: 29,
    emoji: '🏏',
    batting: { matches: 10, runs: 487, average: 54.1, strikeRate: 138.5, fifties: 4, hundreds: 1 },
    bowling: { wickets: 0, economy: 0, average: 0, bestFigures: '-' },
  },
  {
    id: 'shaheen',
    name: 'Shaheen Afridi',
    teamId: 'lq',
    teamShort: 'LQ',
    teamColorClass: 'team-lq',
    role: 'Bowler',
    nationality: 'Pakistan',
    age: 24,
    emoji: '🎯',
    batting: { matches: 10, runs: 45, average: 9.0, strikeRate: 112.5, fifties: 0, hundreds: 0 },
    bowling: { wickets: 18, economy: 7.2, average: 16.4, bestFigures: '4/22' },
  },
  {
    id: 'rizwan',
    name: 'Mohammad Rizwan',
    teamId: 'ms',
    teamShort: 'MS',
    teamColorClass: 'team-ms',
    role: 'Wicketkeeper',
    nationality: 'Pakistan',
    age: 31,
    emoji: '🧤',
    batting: { matches: 10, runs: 412, average: 45.8, strikeRate: 132.0, fifties: 3, hundreds: 0 },
    bowling: { wickets: 0, economy: 0, average: 0, bestFigures: '-' },
  },
  {
    id: 'shadab',
    name: 'Shadab Khan',
    teamId: 'iu',
    teamShort: 'IU',
    teamColorClass: 'team-iu',
    role: 'All-Rounder',
    nationality: 'Pakistan',
    age: 25,
    emoji: '⭐',
    batting: { matches: 10, runs: 234, average: 29.3, strikeRate: 145.3, fifties: 1, hundreds: 0 },
    bowling: { wickets: 12, economy: 7.8, average: 22.1, bestFigures: '3/18' },
  },
  {
    id: 'imad',
    name: 'Imad Wasim',
    teamId: 'kk',
    teamShort: 'KK',
    teamColorClass: 'team-kk',
    role: 'All-Rounder',
    nationality: 'Pakistan',
    age: 35,
    emoji: '🌟',
    batting: { matches: 10, runs: 178, average: 22.3, strikeRate: 118.7, fifties: 0, hundreds: 0 },
    bowling: { wickets: 10, economy: 6.9, average: 24.0, bestFigures: '3/24' },
  },
  {
    id: 'sarfaraz',
    name: 'Sarfaraz Ahmed',
    teamId: 'qs',
    teamShort: 'QG',
    teamColorClass: 'team-qs',
    role: 'Wicketkeeper',
    nationality: 'Pakistan',
    age: 36,
    emoji: '🧤',
    batting: { matches: 10, runs: 289, average: 32.1, strikeRate: 125.7, fifties: 2, hundreds: 0 },
    bowling: { wickets: 0, economy: 0, average: 0, bestFigures: '-' },
  },
  {
    id: 'fakhar',
    name: 'Fakhar Zaman',
    teamId: 'lq',
    teamShort: 'LQ',
    teamColorClass: 'team-lq',
    role: 'Batsman',
    nationality: 'Pakistan',
    age: 33,
    emoji: '💥',
    batting: { matches: 10, runs: 356, average: 39.6, strikeRate: 152.1, fifties: 3, hundreds: 0 },
    bowling: { wickets: 0, economy: 0, average: 0, bestFigures: '-' },
  },
  {
    id: 'haris',
    name: 'Haris Rauf',
    teamId: 'lq',
    teamShort: 'LQ',
    teamColorClass: 'team-lq',
    role: 'Bowler',
    nationality: 'Pakistan',
    age: 30,
    emoji: '🔥',
    batting: { matches: 10, runs: 22, average: 5.5, strikeRate: 91.7, fifties: 0, hundreds: 0 },
    bowling: { wickets: 15, economy: 8.1, average: 19.3, bestFigures: '4/28' },
  },
];

export const allMatches: Match[] = [
  {
    id: 'm1',
    team1: 'Lahore Qalandars',
    team2: 'Peshawar Zalmi',
    team1Short: 'LQ',
    team2Short: 'PZ',
    team1Color: '#e31e24',
    team2Color: '#f7941d',
    team1ColorClass: 'team-lq',
    team2ColorClass: 'team-pz',
    venue: 'Gaddafi Stadium, Lahore',
    date: '2025-02-15',
    time: '19:00',
    status: 'live',
    matchNumber: 'Match 12',
    team1Score: '167/4 (16.2)',
    team2Score: '152/8 (20)',
    toss: 'Lahore Qalandars won the toss and elected to bat',
    innings: [
      {
        team: 'Peshawar Zalmi',
        score: '152/8',
        overs: '20',
        batting: [
          { name: 'Babar Azam', dismissal: 'c Shaheen b Haris', runs: 72, balls: 48, fours: 8, sixes: 3, strikeRate: 150.0 },
          { name: 'Tom Kohler-Cadmore', dismissal: 'b Rashid Khan', runs: 28, balls: 22, fours: 3, sixes: 1, strikeRate: 127.3 },
          { name: 'Rovman Powell', dismissal: 'c & b Rashid Khan', runs: 15, balls: 12, fours: 1, sixes: 1, strikeRate: 125.0 },
          { name: 'Shoaib Malik', dismissal: 'not out', runs: 22, balls: 18, fours: 2, sixes: 0, strikeRate: 122.2 },
          { name: 'Extras', dismissal: 'b:2 lb:3 w:8 nb:2', runs: 15, balls: 0, fours: 0, sixes: 0, strikeRate: 0 },
        ],
        bowling: [
          { name: 'Shaheen Afridi', overs: 4, maidens: 0, runs: 28, wickets: 2, economy: 7.0 },
          { name: 'Haris Rauf', overs: 4, maidens: 0, runs: 32, wickets: 3, economy: 8.0 },
          { name: 'Rashid Khan', overs: 4, maidens: 1, runs: 22, wickets: 2, economy: 5.5 },
          { name: 'Zaman Khan', overs: 4, maidens: 0, runs: 38, wickets: 1, economy: 9.5 },
          { name: 'Fakhar Zaman', overs: 4, maidens: 0, runs: 34, wickets: 0, economy: 8.5 },
        ],
      },
    ],
  },
  {
    id: 'm2',
    team1: 'Islamabad United',
    team2: 'Multan Sultans',
    team1Short: 'IU',
    team2Short: 'MS',
    team1Color: '#ef3e42',
    team2Color: '#1e88e5',
    team1ColorClass: 'team-iu',
    team2ColorClass: 'team-ms',
    venue: 'Rawalpindi Cricket Stadium',
    date: '2025-02-16',
    time: '15:00',
    status: 'upcoming',
    matchNumber: 'Match 13',
  },
  {
    id: 'm3',
    team1: 'Karachi Kings',
    team2: 'Quetta Gladiators',
    team1Short: 'KK',
    team2Short: 'QG',
    team1Color: '#00a651',
    team2Color: '#9c27b0',
    team1ColorClass: 'team-kk',
    team2ColorClass: 'team-qs',
    venue: 'National Stadium, Karachi',
    date: '2025-02-17',
    time: '19:00',
    status: 'upcoming',
    matchNumber: 'Match 14',
  },
  {
    id: 'm4',
    team1: 'Lahore Qalandars',
    team2: 'Islamabad United',
    team1Short: 'LQ',
    team2Short: 'IU',
    team1Color: '#e31e24',
    team2Color: '#ef3e42',
    team1ColorClass: 'team-lq',
    team2ColorClass: 'team-iu',
    venue: 'Gaddafi Stadium, Lahore',
    date: '2025-02-10',
    time: '19:00',
    status: 'completed',
    matchNumber: 'Match 8',
    team1Score: '198/5 (20)',
    team2Score: '185/7 (20)',
    result: 'Lahore Qalandars won by 13 runs',
    toss: 'Islamabad United won the toss and elected to field',
    manOfMatch: 'Fakhar Zaman (LQ) - 89(52)',
    innings: [
      {
        team: 'Lahore Qalandars',
        score: '198/5',
        overs: '20',
        batting: [
          { name: 'Fakhar Zaman', dismissal: 'c Shadab b Faheem', runs: 89, balls: 52, fours: 10, sixes: 5, strikeRate: 171.2 },
          { name: 'Abdullah Shafique', dismissal: 'b Zafar Gohar', runs: 45, balls: 32, fours: 5, sixes: 2, strikeRate: 140.6 },
          { name: 'Sikandar Raza', dismissal: 'not out', runs: 38, balls: 22, fours: 3, sixes: 2, strikeRate: 172.7 },
          { name: 'Extras', dismissal: 'b:1 lb:4 w:12 nb:9', runs: 26, balls: 0, fours: 0, sixes: 0, strikeRate: 0 },
        ],
        bowling: [
          { name: 'Shadab Khan', overs: 4, maidens: 0, runs: 34, wickets: 1, economy: 8.5 },
          { name: 'Faheem Ashraf', overs: 4, maidens: 0, runs: 42, wickets: 2, economy: 10.5 },
          { name: 'Zafar Gohar', overs: 4, maidens: 0, runs: 28, wickets: 1, economy: 7.0 },
          { name: 'Mohammad Wasim Jr', overs: 4, maidens: 0, runs: 45, wickets: 1, economy: 11.25 },
          { name: 'Akif Javed', overs: 4, maidens: 0, runs: 49, wickets: 0, economy: 12.25 },
        ],
      },
      {
        team: 'Islamabad United',
        score: '185/7',
        overs: '20',
        batting: [
          { name: 'Paul Stirling', dismissal: 'c Fakhar b Shaheen', runs: 55, balls: 38, fours: 6, sixes: 3, strikeRate: 144.7 },
          { name: 'Shadab Khan', dismissal: 'c & b Haris', runs: 44, balls: 30, fours: 4, sixes: 2, strikeRate: 146.7 },
          { name: 'Azam Khan', dismissal: 'b Shaheen', runs: 32, balls: 20, fours: 2, sixes: 2, strikeRate: 160.0 },
          { name: 'Extras', dismissal: 'b:2 lb:2 w:10 nb:8', runs: 22, balls: 0, fours: 0, sixes: 0, strikeRate: 0 },
        ],
        bowling: [
          { name: 'Shaheen Afridi', overs: 4, maidens: 0, runs: 31, wickets: 3, economy: 7.75 },
          { name: 'Haris Rauf', overs: 4, maidens: 0, runs: 38, wickets: 2, economy: 9.5 },
          { name: 'Rashid Khan', overs: 4, maidens: 0, runs: 25, wickets: 1, economy: 6.25 },
          { name: 'Zaman Khan', overs: 4, maidens: 0, runs: 44, wickets: 1, economy: 11.0 },
          { name: 'David Wiese', overs: 4, maidens: 0, runs: 47, wickets: 0, economy: 11.75 },
        ],
      },
    ],
  },
  {
    id: 'm5',
    team1: 'Multan Sultans',
    team2: 'Peshawar Zalmi',
    team1Short: 'MS',
    team2Short: 'PZ',
    team1Color: '#1e88e5',
    team2Color: '#f7941d',
    team1ColorClass: 'team-ms',
    team2ColorClass: 'team-pz',
    venue: 'Multan Cricket Stadium',
    date: '2025-02-12',
    time: '19:00',
    status: 'completed',
    matchNumber: 'Match 10',
    team1Score: '178/6 (20)',
    team2Score: '165/9 (20)',
    result: 'Multan Sultans won by 13 runs',
    toss: 'Multan Sultans won the toss and elected to bat',
    manOfMatch: 'Mohammad Rizwan (MS) - 76(48)',
    innings: [
      {
        team: 'Multan Sultans',
        score: '178/6',
        overs: '20',
        batting: [
          { name: 'Mohammad Rizwan', dismissal: 'c Babar b Wahab', runs: 76, balls: 48, fours: 7, sixes: 4, strikeRate: 158.3 },
          { name: 'Rilee Rossouw', dismissal: 'b Hasan Ali', runs: 52, balls: 35, fours: 5, sixes: 3, strikeRate: 148.6 },
          { name: 'Khushdil Shah', dismissal: 'not out', runs: 28, balls: 18, fours: 2, sixes: 1, strikeRate: 155.6 },
          { name: 'Extras', dismissal: 'b:2 lb:5 w:7 nb:8', runs: 22, balls: 0, fours: 0, sixes: 0, strikeRate: 0 },
        ],
        bowling: [
          { name: 'Wahab Riaz', overs: 4, maidens: 0, runs: 38, wickets: 2, economy: 9.5 },
          { name: 'Hasan Ali', overs: 4, maidens: 0, runs: 32, wickets: 2, economy: 8.0 },
          { name: 'Shoaib Malik', overs: 4, maidens: 0, runs: 35, wickets: 1, economy: 8.75 },
          { name: 'Yasir Shah', overs: 4, maidens: 0, runs: 28, wickets: 1, economy: 7.0 },
          { name: 'Babar Azam', overs: 4, maidens: 0, runs: 45, wickets: 0, economy: 11.25 },
        ],
      },
      {
        team: 'Peshawar Zalmi',
        score: '165/9',
        overs: '20',
        batting: [
          { name: 'Babar Azam', dismissal: 'c Rizwan b Imran Tahir', runs: 58, balls: 42, fours: 6, sixes: 2, strikeRate: 138.1 },
          { name: 'Hazratullah Zazai', dismissal: 'b Shahnawaz Dahani', runs: 35, balls: 24, fours: 4, sixes: 1, strikeRate: 145.8 },
          { name: 'Shoaib Malik', dismissal: 'c Rossouw b Imran Tahir', runs: 22, balls: 18, fours: 1, sixes: 1, strikeRate: 122.2 },
          { name: 'Extras', dismissal: 'b:3 lb:4 w:9 nb:6', runs: 22, balls: 0, fours: 0, sixes: 0, strikeRate: 0 },
        ],
        bowling: [
          { name: 'Shahnawaz Dahani', overs: 4, maidens: 0, runs: 29, wickets: 3, economy: 7.25 },
          { name: 'Imran Tahir', overs: 4, maidens: 0, runs: 22, wickets: 3, economy: 5.5 },
          { name: 'Abbas Afridi', overs: 4, maidens: 0, runs: 36, wickets: 2, economy: 9.0 },
          { name: 'Khushdil Shah', overs: 4, maidens: 0, runs: 41, wickets: 1, economy: 10.25 },
          { name: 'Usama Mir', overs: 4, maidens: 0, runs: 37, wickets: 0, economy: 9.25 },
        ],
      },
    ],
  },
  {
    id: 'm6',
    team1: 'Karachi Kings',
    team2: 'Lahore Qalandars',
    team1Short: 'KK',
    team2Short: 'LQ',
    team1Color: '#00a651',
    team2Color: '#e31e24',
    team1ColorClass: 'team-kk',
    team2ColorClass: 'team-lq',
    venue: 'National Stadium, Karachi',
    date: '2025-02-18',
    time: '15:00',
    status: 'upcoming',
    matchNumber: 'Match 15',
  },
];

export const pointsTable: PointsEntry[] = [
  { rank: 1, teamId: 'lq', team: 'Lahore Qalandars', teamShort: 'LQ', colorClass: 'team-lq', played: 10, won: 8, lost: 2, noResult: 0, points: 16, nrr: '+1.234', form: ['W', 'W', 'W', 'L', 'W'], qualifier: true, eliminator: false },
  { rank: 2, teamId: 'iu', team: 'Islamabad United', teamShort: 'IU', colorClass: 'team-iu', played: 10, won: 7, lost: 3, noResult: 0, points: 14, nrr: '+0.678', form: ['W', 'L', 'W', 'W', 'L'], qualifier: true, eliminator: false },
  { rank: 3, teamId: 'pz', team: 'Peshawar Zalmi', teamShort: 'PZ', colorClass: 'team-pz', played: 10, won: 6, lost: 4, noResult: 0, points: 12, nrr: '+0.345', form: ['L', 'W', 'W', 'L', 'W'], qualifier: false, eliminator: true },
  { rank: 4, teamId: 'ms', team: 'Multan Sultans', teamShort: 'MS', colorClass: 'team-ms', played: 10, won: 5, lost: 5, noResult: 0, points: 10, nrr: '+0.123', form: ['W', 'L', 'W', 'L', 'W'], qualifier: false, eliminator: true },
  { rank: 5, teamId: 'kk', team: 'Karachi Kings', teamShort: 'KK', colorClass: 'team-kk', played: 10, won: 4, lost: 6, noResult: 0, points: 8, nrr: '-0.456', form: ['L', 'L', 'W', 'L', 'W'], qualifier: false, eliminator: false },
  { rank: 6, teamId: 'qs', team: 'Quetta Gladiators', teamShort: 'QG', colorClass: 'team-qs', played: 10, won: 3, lost: 7, noResult: 0, points: 6, nrr: '-0.789', form: ['L', 'L', 'L', 'W', 'L'], qualifier: false, eliminator: false },
];

export const news: NewsItem[] = [
  { id: 'n1', title: 'Shaheen Afridi on fire: 4 wickets in the powerplay against Sultans', category: 'Match Report', date: '2025-02-14', author: 'PSL Editorial', emoji: '🔥', summary: 'Shaheen Shah Afridi produced a masterclass bowling performance taking four wickets in the powerplay overs to set up a dominant win for Lahore Qalandars.' },
  { id: 'n2', title: 'Babar Azam breaks PSL record with back-to-back half-centuries', category: 'Records', date: '2025-02-13', author: 'Cricket Analyst', emoji: '🏏', summary: 'Peshawar Zalmi captain Babar Azam has broken the record for most consecutive half-centuries in a single PSL season, showcasing his exceptional form.' },
  { id: 'n3', title: 'PSL 2025 Schedule: All matches, venues and timings confirmed', category: 'Schedule', date: '2025-02-12', author: 'PCB Media', emoji: '📅', summary: 'The complete schedule for PSL 2025 has been announced with matches across Lahore, Karachi, Rawalpindi, Multan and Peshawar.' },
  { id: 'n4', title: 'Mohammad Rizwan named Player of the Week after stellar performances', category: 'Awards', date: '2025-02-11', author: 'PSL Editorial', emoji: '⭐', summary: 'Multan Sultans wicketkeeper-batsman Mohammad Rizwan has been named the Player of the Week after scoring 180+ runs in three matches.' },
  { id: 'n5', title: 'Lahore Qalandars strengthen playoff position with crushing win', category: 'Match Report', date: '2025-02-10', author: 'Sports Desk', emoji: '🏆', summary: 'Lahore Qalandars consolidated their top position in the points table with an emphatic 13-run victory over Islamabad United at Gaddafi Stadium.' },
  { id: 'n6', title: 'Fantasy League: Top performers to pick for this week', category: 'Fantasy', date: '2025-02-09', author: 'Fantasy Expert', emoji: '🎮', summary: 'Our fantasy cricket experts break down the best picks for the upcoming round of PSL 2025 matches based on current form and match conditions.' },
];
