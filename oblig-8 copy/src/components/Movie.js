export default function Movie({ movieList }){
  const movieList2 = [
    {
      id: 1,
      title: "Spiderman far from  home",
      actor: "Tom Holland"
    },
    {
      id: 2,
      title: "Iron Man",
      actor: "Robert Downey Jr"
    },
    {
      id: 3,
      title: "Thor",
      actor: "Chris Hemsworth"
    },
    {
      id: 4,
      title: "Doctor Strange",
      actor: "Benedict Cumberbatch"
    },
    {
      id: 5,
      title: "Captain America",
      actor: "Chris Evans"
    },
  ];
  return <><ul>{movieList2?.map}</ul></>
}