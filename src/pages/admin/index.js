import AdminCoursesTable from "@/components/AdminCoursesTable";
import AdminDashboardLayout from "@/components/AdminDashboardLayout";
import AdminInstructorOverview from "@/components/AdminInstructorOverview";
import AdminRevenueStatistics from "@/components/AdminRevenueStatistics";
import DashboardStudentsOverview from "@/components/DashboardStudentsOverview";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../../redux/thunks/allCoursesThunk";
import { fetchStudents } from "../../../redux/thunks/allstudentsThunk";
import { filterRepeatedStudents } from "@/utils/filterRepeatedStudents";
import { fetchAllInstructors } from "../../../redux/thunks/allInstructorsThunk";
import withAuth from "@/components/WithAuth";
import { useState } from "react";
import WithAdminAuth from "@/components/WithAdminAuth";

const admin = () => {
  const [checkouts, setCheckouts] = useState([]);
  const [totalPlatformFee, setTotalPlatformFee] = useState(0);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [monthlyTotals, setMonthlyTotals] = useState([]); 

  const dispatch = useDispatch();
  const { pendingCourses, courses, status, error } = useSelector(
    (state) => state.courses,
  );
  const {
    students,
    status: studentsStatus,
    error: studentsError,
  } = useSelector((state) => state.students);

  const {
    instructors,
    status: instructorsStatus,
    error: instructorsError,
  } = useSelector((state) => state.allInstructors);

  useEffect(() => {
    console.log("running instructors Effect");
    if (instructors?.length > 0) return;
    dispatch(fetchAllInstructors());
  }, [instructors.length]);

  useEffect(() => {
    if (courses?.length > 0) return;
    dispatch(fetchCourses());
  }, [courses?.length]);

  useEffect(() => {
    if (students?.length > 0) return;
    dispatch(fetchStudents());
  }, [students?.length]);

  
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


  const uniqueStudents = filterRepeatedStudents(students);

  return (
    <AdminDashboardLayout >
      {monthlyTotals.length > 0 && (<AdminRevenueStatistics current_balance={totalPlatformFee.toFixed(2) } chartData={monthlyTotals} />)}
      <br />
      <br />
      <AdminCoursesTable
        emptyStateClasses="!size-[unset] !block"
        courses={pendingCourses}
        courseStatus="pending"
      />
      <br /> <br />
      {studentsStatus === "loading" ? (
        "Loading..."
      ) : (
        <DashboardStudentsOverview
          href="admin/students"
          students={uniqueStudents}
        />
      )}
      <br /> <br />
      {instructorsStatus === "loading" ? (
        "Loading..."
      ) : (
        <AdminInstructorOverview
          href="admin/instructors"
          instructors={instructors}
        />
      )}
    </AdminDashboardLayout>
  );
};

export default WithAdminAuth(admin);
