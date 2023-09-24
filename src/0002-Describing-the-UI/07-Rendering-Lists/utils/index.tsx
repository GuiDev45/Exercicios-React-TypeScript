type urlProps = {
  person?: string;
  imageId: string;
};

export function getImageUrl(person: urlProps) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
