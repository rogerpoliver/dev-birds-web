interface Author {
  name: string;
  role: string;
}

export function ProfileInfo(props: Author) {
  const { name, role } = props;

  return (
    <>
      <strong>{name}</strong>
      <span>{role}</span>
    </>
  );
}