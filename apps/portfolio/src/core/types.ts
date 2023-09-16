export type WorksLink = '/works';
export type WorkLink<Slug extends string> = `${WorksLink}/${Slug}`;
