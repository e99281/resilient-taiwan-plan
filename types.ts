export interface NewsItem {
  id: string;
  date: string;
  tag: '公告' | '活動' | '訓練'; // Notice, Activity, Training
  title: string;
}

export interface CourseItem {
  id: string;
  month: string;
  day: string;
  title: string;
  location: string;
  duration: string;
  deadline: string;
  status: 'open' | 'full' | 'closed';
  tags?: string[];
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  iconName: 'users' | 'building' | 'store' | 'map';
}
