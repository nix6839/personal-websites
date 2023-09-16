const Links = {
  works: '/works',
  work(slug: string) {
    return `${this.works}/${slug}` as const;
  },
} as const;

export default Links;

export type WorksLink = (typeof Links)['works'];
export type WorkLink = ReturnType<(typeof Links)['work']>;
