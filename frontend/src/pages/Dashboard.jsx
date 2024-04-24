import DashboardModule from '@/modules/DashboardModule';
import { useQuery } from 'urql'
const getCompanies = `
query companies {
  companies {
    id
  }
}`;
export default function Dashboard() {
  const [result, reexecuteQuery] = useQuery({
    query: getCompanies,
  });
  const { data, fetching, error } = result;
  console.log(data);
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return <DashboardModule />;
}
