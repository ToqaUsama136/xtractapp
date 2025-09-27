export default async function Pages({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <p>{id}</p>
    </div>
  );
}
