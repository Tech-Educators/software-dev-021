export default async function FilmIdPage({
  params,
}: {
  params: Promise<{ filmId: number }>;
}) {
  const filmId = (await params).filmId;
  return (
    <>
      <h1>One film: {filmId}</h1>
    </>
  );
}
