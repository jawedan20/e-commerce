import Warning from "@material-ui/icons/ErrorOutline";

const MassageError = ({ err,style,errMsg }) => {
    return (
        <>
         <div hidden={err}>
            <p className={style}>
              <Warning fontSize="small" />
              <span>{errMsg && errMsg}</span>
            </p>
          </div>   
        </>
    )
}

export default MassageError
