import { useState, useEffect } from 'react';
import withAuth from "@/components/WithAuth";
import AdminRevenueStatistics from "@/components/AdminRevenueStatistics";
import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import MagnifierSvg from "@/components/MagnifierSvg";
import WithAdminAuth from '@/components/WithAdminAuth';

function Students() {
  const [checkouts, setCheckouts] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPlatformFee, setTotalPlatformFee] = useState(0);
  const [monthlyTotals, setMonthlyTotals] = useState([]); 

  useEffect(() => {
  const fetchData = async () => {
    try {
      // Fetch checkouts
      const res = await fetch('/api/get_checkouts');
      if (!res.ok) {
        throw new Error('Failed to fetch checkout sessions');
      }
      const data = await res.json();
      const fetchedCheckouts = data.checkouts || [];

      // Create a temporary array for monthly totals
      const tempMonthlyTotals = Array(12).fill(0);
      fetchedCheckouts.forEach((checkout) => {
        const date = new Date(checkout.created * 1000);
        const month = date.getMonth(); // Month index (0-11)
        tempMonthlyTotals[month] += (checkout.amount_total / 100) * 0.20; // Add revenue to the corresponding month
      });

      // Update state with the computed monthly totals
      setMonthlyTotals(tempMonthlyTotals); // <-- Correctly update the state here
      

      // Fetch user data for each unique student ID
      const userIds = fetchedCheckouts.map(checkout => checkout.metadata.student_id);
      const uniqueUserIds = [...new Set(userIds)];

      const userFetches = uniqueUserIds.map(async (id) => {
        try {
          const userRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${id}`);
          if (!userRes.ok) {
            throw new Error(`Failed to fetch user with ID ${id}`);
          }
          const userData = await userRes.json();
          return { id: userData.message.id, data: userData.message };
        } catch (error) {
          console.error(`Error fetching user ${id}:`, error.message);
          return null;
        }
      });

      const userResults = await Promise.all(userFetches);
      const userMap = userResults.reduce((acc, result) => {
        if (result) acc[result.id] = result.data;
        return acc;
      }, {});
      setUsers(userMap);

      // Aggregate revenue per student
      const revenueMap = fetchedCheckouts.reduce((acc, checkout) => {
        const studentId = checkout.metadata.student_id;
        if (!acc[studentId]) {
          acc[studentId] = { totalRevenue: 0, user: userMap[studentId] || {} };
        }
        acc[studentId].totalRevenue += checkout.amount_total / 100;

        acc[studentId].last_transaction = new Date(checkout.created * 1000).toDateString();

        return acc;
      }, {});

      setCheckouts(Object.values(revenueMap));

    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);

  useEffect(()=>{

    let totalFee = 0;

    checkouts.forEach((checkout) => {
      const cout = totalPlatformFee + (checkout.totalRevenue * 0.20);
      totalFee += cout; // Accumulate the fee
      console.log("The checkout fee is: ", cout);
    });

  // After accumulating all the fees, update the state
  setTotalPlatformFee(totalFee);

  console.log("Monthly Revenue: ", monthlyTotals)

  }, [checkouts])
  return (
    <AdminDashboardLayout>
      {monthlyTotals.length > 0 && (<AdminRevenueStatistics current_balance={totalPlatformFee} chartData={monthlyTotals} />)}
      <div className="my-3 flex justify-between">
        <h1 className="text-2xl font-bold">Students</h1>
        <div className="group hidden w-full rounded-lg border-[1px] border-bg_text_gray pl-4 focus-within:border-blue md:flex md:items-center md:justify-between md:gap-2 lg:flex lg:w-[25%]">
          <label
            htmlFor="search"
            className="group-focus-within:text-black flex cursor-pointer items-center text-bg_text_gray"
          >
            <MagnifierSvg />
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="w-full rounded-r-lg bg-transparent py-2 outline-none"
          />
        </div>
      </div>

      <div className=" rounded-lg mt-4">
        <table className="min-w-full ">
          <thead>
            <tr className=''>
              <th className="text-start">Name</th>
              <th className="text-start">Total Amount</th>
              <th className="text-start">Platform Fee</th>
              <th className="text-start">Last Transaction</th>
            </tr>
          </thead>
          <tbody className='bg-[#F9FAFE] '>
            {checkouts.map((checkout) => {
              
              const user = checkout.user;
              return (
                <tr key={user.id} className=''>
                  <td className="px-2 py-6 rounded-lg">
                    {user ? `${user.first_name} ${user.last_name}` : 'Unknown'}
                  </td>
                  <td className="text-green-600">${checkout.totalRevenue.toFixed(2)}</td>
                  <td className="text-orange-600">${((checkout.totalRevenue * 0.20).toFixed(2))}</td>
                  <td>{checkout.last_transaction}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AdminDashboardLayout>
  );
}

export default WithAdminAuth(Students);
