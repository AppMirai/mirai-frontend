import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UsrList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item=>item.id !== id));
  }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 160 },
        { field: 'email', headerName: 'Email', width: 260 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'action',
          headerName: "Action",
          width: 150,
          renderCell: (params)=>{
            return(
              <>
              <button className="userListEdit">Edit</button>
              <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
              </>
            );
          }
        }
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        // },
      ];
    return (
        <div className="userList">
            <DataGrid 
              rows={data} 
              disableSelectionOnClick 
              columns={columns} 
              pageSize={5}
              rowsPerPageOptions={[5]} 
              checkboxSelection
            />
        </div>
    )
}