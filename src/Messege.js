import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Messege.css";

const Messege = forwardRef(({ messege, username }, ref) => {
  const isUser = username === messege.username;
  return (
    <div className={'messege ${isUser && "messege_user"}'} ref={ref}>
      <Card className={isUser ? "messege__usercard" : "messege__gestcard"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {!isUser && `${messege.username || "Unknown User"}: `}
            {messege.messege}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});
export default Messege;
