import React from "react";
import { Button, DialogTitle, DialogActions } from "@mui/material";

type Props = {
  handleClose: () => void;
  titleText: string;
  buttonText: string;
};

const DialogBox: React.FC<Props> = ({
  handleClose,
  titleText,
  buttonText,
}) => {
  return (
    <>
      <DialogTitle id="alert-dialog-title">
        {titleText}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>{buttonText}</Button>
      </DialogActions>
    </>
  );
};

export default DialogBox;
