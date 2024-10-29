import { writeFileSync } from 'fs';
import { compareDesc, parseISO } from 'date-fns';
import { Feed } from 'feed';

import allPosts from '../.contentlayer/generated/Post/_index.json' assert { type: 'json' };

const baseUrl = 'https://admondtamang.com.np';
const author = {
  name: 'Admond Tamang',
  email: 'admondtamang@gmail.com',
  link: baseUrl,
};

const date = new Date();

const feed = new Feed({
  title: 'admondtamang',
  description: 'All about product development and freelancing.',
  id: baseUrl,
  link: baseUrl,
  language: 'en',
  image: `${baseUrl}/favicon.ico`,
  favicon: `${baseUrl}/favicon.ico`,
  updated: date,
  copyright: `All rights reserved ${date.getFullYear()}, Admond Tamang`,
  author,
  feedLinks: {
    rss2: `${baseUrl}/rss.xml`,
  },
});

allPosts
  .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  .forEach(post => {
    const url = `https://admondtamang/blog/${post.slug}`;
    feed.addItem({
      id: url,
      link: url,
      title: post.title,
      description: post.summary,
      date: parseISO(post.publishedAt),
      category: post.category,
      image: `${baseUrl}${post.cover.src}`,
      author: [author],
      contributor: [author],
    });
  });

writeFileSync('./public/rss.xml', feed.rss2(), { encoding: 'utf-8' });
