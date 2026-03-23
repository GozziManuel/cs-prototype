import { useParams } from "react-router";

export default function UserListPage() {
  const { id } = useParams();

  return <h1>Trip N{id}</h1>;
}
