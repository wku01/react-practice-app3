import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material";
import DialogBox from "./DialogBox";

type Props = {
  isAllClear: boolean;
  isCorrect: boolean;
  open: boolean;
  handleClose: () => void;
};

const DialogComp: React.FC<Props> = ({
  isAllClear,
  isCorrect,
  open,
  handleClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {(() => {
        if (isAllClear) {
          return (
            <DialogBox
              handleClose={handleClose}
              titleText="オールクリア！"
              buttonText="最初へ戻る"
            />
          );
        } else {
          if (isCorrect) {
            return (
              <DialogBox
                handleClose={handleClose}
                titleText="正解です！"
                buttonText="次の問題へ"
              />
            );
          } else {
            return (
              <DialogBox
                handleClose={handleClose}
                titleText="不正解です。"
                buttonText="戻る"
              />
            );
          }
        }
      })()}
    </Dialog>
  );
};

export default DialogComp;
