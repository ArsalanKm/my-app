import { Typography } from "@mui/material";
import React from "react";
import "./styles.scss";

interface IKeyValueRowProps {
  title: string;
  value: string | number | null;
}

const KeyValueRow: React.FunctionComponent<IKeyValueRowProps> = ({
  title,
  value,
}) => {
  return (
    <>
      <div className="key-value-row">
        <Typography>{title}</Typography>
        <Typography style={{ maxWidth: "185px" }}>{value || "-"}</Typography>
      </div>
      <hr className="divider" />
    </>
  );
};

export default KeyValueRow;
