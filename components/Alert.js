import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

const Alert = () => {
    return (
        <div>
            <Button onClick={handleClick({ vertical: "top", horizontal: "center" })}>
                Top-Center
            </Button>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message="I love snacks"
                key={vertical + horizontal}
            />
        </div>
    );
};

export default Alert;
