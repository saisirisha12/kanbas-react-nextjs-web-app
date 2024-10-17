export default function Course({ params }: { params: { course: number }}) {
  return (
    <div>
      {params.course}
    </div>
  );
}