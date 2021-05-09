import LayoutUser from "../../components/LayoutUser";
import Address from "../../styles/Address.module.css";
import Search from "@material-ui/icons/Search";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";

const address = () => {
  return (
    <LayoutUser>
      <div className={Address.headAddress}>
        <h3>Personal Information</h3>
        <button>Add New Address</button>
      </div>
      <div className={Address.bodyAddress}>
        <div className={Address.head}>
          <div className={Address.search}>
            <input />
            <div>
              <Search fontSize="small" />
            </div>
          </div>
        </div>
        <div className={Address.list}>
          <div>
            <h5>Kantor <span>Primary</span></h5>
            <h4 style={{marginTop:"5px"}}>Muhammad jawahiruzzaman</h4>
            <p>90874309284098</p>
            <p>
              jl.selajambe rt 10/04 desa selajambe kabupaten sukabumi depan rel
              kereta ada jalan
            </p>
          </div>
          <div className={Address.action}>
            <Edit style={{fontSize:25, color:"#f40057",}} />
            <Delete style={{fontSize:25, color:"#f40057",margin:"0 10px"}} />
            <button style={{background:"none", color:"lightGrey", border:"1px solid lightgrey",cursor:"not-allowed"}}>Set as Primary</button>
          </div>
        </div>
        <div style={{background:"none", border:"none"}}className={Address.list}>
          <div>
            <h5>Kantor</h5>
            <h4 style={{marginTop:"5px"}}>Muhammad jawahiruzzaman</h4>
            <p>90874309284098</p>
            <p>
              jl.selajambe rt 10/04 desa selajambe kabupaten sukabumi depan rel
              kereta ada jalan
            </p>
          </div>
          <div className={Address.action}>
            <Edit style={{fontSize:25, color:"#f40057",}} />
            <Delete style={{fontSize:25, color:"#f40057",margin:"0 10px"}} />
            <button>Set as Primary</button>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
};

export default address;
