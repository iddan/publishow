import { decode } from 'he';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import WordPress from './WordPress';

const wp = new WordPress('https://publishow.000webhostapp.com/wp-json/wp/v2/');

export interface Show {
  id: string,
  time: Date,
  entrance?: Date,
  location: string,
  registrationLink?: string,
  tags: string[],
  image: string,
  title: string,
}

export const getShows = async (): Show[] => {
  const tags = await wp.tags.get();
  const posts = await wp.posts.get({ _embed: true });
  return posts.map(post => {
    const { location, registrationLink } = post.acf;
    return {
      id: post.id,
      image: get(['_embedded', 'wp:featuredmedia', 0, 'source_url'], post),
      title: decode(post.title.rendered),
      location,
      tags: post.tags.map(id => {
        const tag = find({ id }, tags);
        return tag.name;
      }),
      time: new Date(Number(post.acf.time)),
      entrance: post.acf.entrance && new Date(Number(post.acf.entrance)),
      registrationLink,
    };
  });
};
