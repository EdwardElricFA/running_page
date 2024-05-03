interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Edward Running',
  siteUrl: 'https://yihong.run',
  logo: 'https://github.com/EdwardElricFA/running_page/blob/master/public/images/10001.png?raw=true',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://github.com/yihong0618/gitblog',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
