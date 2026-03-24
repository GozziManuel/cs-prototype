import { useParams } from "react-router";

export default function DetailedUserPage() {
  const { id } = useParams();
  return <p>{id}</p>;
}
