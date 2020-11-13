import React from "react";
import Input from "@material-ui/core/Input";

export default function EditPage() {
  return (
    <form noValidate autoComplete="off">
      <Input
        defaultValue="Hello world"
        inputProps={{ "aria-label": "description" }}
      />
    </form>
  );
}
