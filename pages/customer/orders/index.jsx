import { columnsDataCheck } from "@/app/components/default/variables/columnsData";

import CheckTable from "@/app/components/default/CheckTable";

import tableDataCheck from "@/app/components/default/variables/tableDataCheck.json";
import Layout from "@/app/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="w-full p-5 flex items-center justify-center text-white bg-black flex-col tracking-widest uppercase">
        <p className="text-4xl font-semibold my-10 text-gray-800 dark:text-white">
          Your Orders
        </p>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
      </div>
    </Layout>
  );
};

export default Index;
