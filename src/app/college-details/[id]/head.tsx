export default function Head({ params }: { params: { id: string } }) {
  const canonical = `https://careerbuddyclub.com/college-details/${params.id}`;
  return (
    <>
      <link rel="canonical" href={canonical} />
    </>
  );
}