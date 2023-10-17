import {
    columnsDataCheck,
  } from "@/app/components/default/variables/columnsData";
  
  import CheckTable from "@/app/components/default/CheckTable";
  
  import tableDataCheck from "@/app/components/default/variables/tableDataCheck.json";
  
  
  const Index = () => {
    return (
  <div>
      <CheckTable
      columnsData={columnsDataCheck}
      tableData={tableDataCheck}
      />
  </div>  );
  };
  
  export default Index;