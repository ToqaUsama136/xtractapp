export type ArticleProps = {
  id: number;
  img: string;
  h1: string;
  descH1: string;
  h2: string;
  descH2: string;
};

export type LiProps = {
  Li: string;
  span: string;
};
export type PropsUl = {
  Li: string;
};

export const articles = [
  {
    id: 1,
    img: '/images/BlogArticle1.png',
    h1: 'The Future of AI Automation: How It’s Changing Business Operations',
    descH1:
      'AI automation is transforming the way businesses operate, from streamlining workflows to enhancing decision-making. In this article, we explore the latest trends, innovations, and real-world applications that are reshaping industries worldwide.',
    h2: 'Introduction',
    descH2:
      'AI automation is no longer a futuristic concept—it’s already revolutionizing industries by optimizing workflows, reducing costs, and enhancing efficiency. Businesses worldwide are leveraging AI-driven solutions to handle repetitive tasks, analyze vast amounts of data, and make smarter decisions. But what does the future hold for AI automation? Let’s explore the latest trends, innovations, and their impact on business operations.',
  },
  {
    id: 2,
    img: '/images/BlogArticle2.png',
    h1: '5 Must-Have AI Tools to Streamline Your Business tasks',
    descH1:
      'Want to automate your workflows and boost productivity? We’ve compiled a list of five powerful AI tools that can help you optimize operations, enhance customer interactions, and improve overall business efficiency.',
    h2: 'Introduction',
    descH2:
      'AI-powered tools are revolutionizing the way businesses operate, helping to automate tasks, improve decision-making, and boost productivity. Whether you run a small startup or a large enterprise, AI can optimize workflows and save valuable time. Here are five essential AI tools that can help streamline your business operations.',
  },
  {
    id: 3,
    img: '/images/BlogArticle3.png',
    h1: 'AI vs. Manual Work: Which One Saves More Time & Money?',
    descH1:
      'Is AI automation really more efficient than manual work? We break down the costs, time savings, and long-term benefits of AI-driven processes compared to traditional methods to help you make an informed decision.',
    h2: 'Introduction',
    descH2:
      'In today’s fast-paced world, businesses are looking for ways to improve efficiency and reduce costs. One of the biggest debates is whether AI automation outperforms manual work in terms of time savings and cost-effectiveness. While traditional methods have been the backbone of many industries, AI is rapidly changing the game. In this article, we’ll compare AI-driven automation with manual processes to see which one offers the most value.',
  },
  {
    id: 4,
    img: '/images/BlogArticle4.png',
    h1: 'How AI is Transforming Workflow Automation for Businesses',
    descH1:
      'From reducing repetitive tasks to improving accuracy, AI-powered workflow automation is helping businesses scale faster and work smarter. Discover how companies across industries are integrating AI into their daily operations.',
    h2: 'Introduction',
    descH2:
      'AI is no longer a futuristic concept—it is actively reshaping industries and redefining how businesses operate. From automating routine tasks to enhancing decision-making, AI is driving efficiency and innovation. In this article, we explore how AI is transforming the workplace and what it means for businesses moving forward.',
  },
];

export const olList: LiProps[] = [
  {
    Li: 'Streamlining Workflows',
    span: 'AI-powered tools automate repetitive tasks such as data entry, scheduling, and customer support. This not only reduces human error but also frees up employees to focus on higher-value work.',
  },
  {
    Li: 'Enhancing Decision-Making',
    span: 'AI-driven analytics process data faster and more accurately than humans, providing businesses with actionable insights. Companies can make data-backed decisions that improve efficiency and profitability.',
  },
  {
    Li: 'Improving Customer Experience',
    span: 'AI chatbots and virtual assistants are providing instant, personalized responses to customer queries, improving satisfaction and engagement.',
  },
  {
    Li: 'Cost Savings and Scalability',
    span: 'By automating routine tasks, businesses can cut labor costs and scale operations without significantly increasing expenses.',
  },
];
export const ulList: PropsUl[] = [
  {
    Li: 'Hyperautomation: The integration of AI, machine learning, and robotic process automation (RPA) to create fully automated workflows.',
  },
  {
    Li: 'AI-Powered Predictive Analytics: Businesses are using AI to anticipate customer behavior and optimize operations accordingly.',
  },
  {
    Li: 'Autonomous AI Systems: AI is evolving to handle complex decision-making with minimal human intervention.',
  },
];
