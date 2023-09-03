import React from "react";

type User = {
  id: number;
  username: string;
};

type ItemProps<T extends User> = {
  id: number;
  title: string;
  extra: T[];
};

const Item = (props: ItemProps<{ id: number; username: string }>) => {
  return (
    <div>
      <h1>{props.id}</h1>
    </div>
  );
};

export default Item;
