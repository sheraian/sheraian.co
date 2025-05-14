import { useParams } from "@remix-run/react";

export default function ServiceDetails() {
  const { id } = useParams();
  return <div>Service ID: {id}</div>;
}
