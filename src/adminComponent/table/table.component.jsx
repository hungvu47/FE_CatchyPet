import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

function CustomPaginationActionsTable({ rowsData, columnsData, rowId, setRowId }) {
  const [pageSize, setPageSize] = useState(10);
  const [columns, setColumns] = useState(columnsData || [])
  const [rows, setRows] = useState(rowsData || [])

  useEffect(() => {
    setRows(rowsData)
    setColumns(columnsData);
  }, [rowsData, columnsData]);

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row[rowId]} // Sử dụng rowId để lấy id của hàng
        onCellEditCommit={(params) => setRowId(params.id)}
        pagination
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 20]}
        onPageChange={(newPage) => console.log(newPage)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowHeight={120}
      />
    </div>
  );
}

export default CustomPaginationActionsTable;
