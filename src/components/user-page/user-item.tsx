import { VerticalDotsIcon } from "@/components/svg/vertical-dots-icon";
import { UserProps } from "@/lib/types";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { memo } from "react";

type UserItemProps = {
  user: UserProps;
  columnKey: keyof UserProps;
};
type UserItemActionsProps = {
  user: UserProps;
  columnKey: "actions";
};

function isUserKey(
  props: UserItemProps | UserItemActionsProps
): props is UserItemProps {
  return props.columnKey in props.user;
}

function UserItemElement(
  props: UserItemProps | UserItemActionsProps
): JSX.Element {
  const cellValue = isUserKey(props) ? props.user[props.columnKey] : "";

  switch (props.columnKey) {
    case "role":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-sm capitalize">{props.columnKey}</p>
          <p className="text-bold text-sm capitalize text-default-400">test</p>
        </div>
      );
    case "actions":
      return (
        <div className="relative flex justify-end items-center gap-2">
          <Dropdown isDisabled={props.user.firstName.includes("Default")}>
            <DropdownTrigger>
              <Button isIconOnly size="sm" variant="light">
                <VerticalDotsIcon />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>View</DropdownItem>
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem>Delete</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      );
    default:
      return <>{String(cellValue)}</>;
  }
}

export const UserItem = memo(UserItemElement);
