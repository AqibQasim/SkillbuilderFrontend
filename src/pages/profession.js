import Fields from "@/components/Fields";
import withAuth from "@/components/WithAuth";

function profession() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Fields />
    </div>
  );
}

export default withAuth(profession);
