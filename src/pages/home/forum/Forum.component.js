import React, { useContext } from 'react';
import { Button } from 'antd';
import { EditFilled } from '@ant-design/icons';

import TwoColumnsSection from '~/layouts/twoColumnsSection';
import { PageDataContext } from '~/context';
import { useIsSmallScreen } from '~/hooks';
import Anchor from '~/components/Anchor';

import * as Styled from './forum.styled';
import Categories from './categories';
import Post from './post';

const categories = [
  {
    name: '新手区',
    link: 'https://asktug.com/c/newcomer',
  },
  {
    name: '部署 & 监控',
    link: 'https://asktug.com/c/administration',
  },
  {
    name: '备份 & 数据迁移',
    link: 'https://asktug.com/c/tools',
  },
  {
    name: '开发者 & 应用适配',
    link: 'https://asktug.com/c/developer',
  },
  {
    name: '性能调优',
    link: 'https://asktug.com/c/performance',
  },
  {
    name: 'Real-Time HTAP',
    link: 'https://asktug.com/c/tispark-tiflash',
  },
  {
    name: '安全加固',
    link: 'https://asktug.com/c/90030-category',
  },
  {
    name: '互助交流区',
    link: 'https://asktug.com/c/Mutual-communication',
  },
  {
    name: '技术⽂章',
    link: '/blog',
  },
  {
    name: 'TUG 社区活动',
    link: 'https://asktug.com/c/community-activities',
  },
  {
    name: '关于 TUG',
    link: 'https://asktug.com/c/tug',
  },
  {
    name: '学习与认证',
    link: 'https://asktug.com/c/pu',
  },
  {
    name: '建议 & 反馈',
    link: 'https://asktug.com/c/advice-feedback',
  },
];

const Forum = () => {
  const { data } = useContext(PageDataContext);
  const { isSmallScreen } = useIsSmallScreen();

  const writePostButtonProps = {
    type: 'primary',
    size: 'large',
    icon: <EditFilled />,
    children: '写帖子',
  };

  return (
    <Styled.Container isSmallScreen={isSmallScreen}>
      <TwoColumnsSection
        reverseOnSmallScreen
        title={'问答论坛'}
        leftPanel={
          <>
            <Styled.Posts>
              {data.forumPosts.map((post, idx) => {
                const props = {
                  key: idx,
                  ...post,
                  isSmallScreen,
                };
                return <Post {...props} />;
              })}
            </Styled.Posts>
            <Anchor href="https://asktug.com/">查看全部</Anchor>
          </>
        }
        rightPanel={
          <>
            <Styled.Module>
              <Styled.ModuleTitle justify={isSmallScreen && 'center'}>快速发帖提问</Styled.ModuleTitle>
              <p>
                <Styled.AsktugLogo />
                AskTUG 是社区的问答网站，用户可以在这里提出、解答问题，分享文章，共同建设 TiDB 项目。
              </p>
              <p>
                在论坛中发言请自觉遵守
                <Styled.Link href={'https://asktug.com/t/topic/93912'}>《问题搜索指引&提问准则》</Styled.Link>
              </p>
              <Styled.CenterOnSmallScreen isSmallScreen={isSmallScreen}>
                <Anchor href="https://asktug.com/new-topic">
                  <Button {...writePostButtonProps} />
                </Anchor>
              </Styled.CenterOnSmallScreen>
            </Styled.Module>
            <Styled.Module>
              <Styled.ModuleTitle>
                热门分类
                <Styled.Link href="https://asktug.com/">查看全部</Styled.Link>
              </Styled.ModuleTitle>
              <Categories categories={categories} />
            </Styled.Module>
          </>
        }
      />
    </Styled.Container>
  );
};

export default Forum;
