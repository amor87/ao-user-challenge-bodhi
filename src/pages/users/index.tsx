import { CreateUserModal, UserItem } from "@/components/user-page";
import { useGetUsers } from "@/lib/hooks";
import { UserProps } from "@/lib/types";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";

type Column = {
  name: string;
  uid: keyof UserProps | "actions";
};

const columns: Column[] = [
  { name: "FIRST NAME", uid: "firstName" },
  { name: "LAST NAME", uid: "lastName" },
  { name: "ROLE", uid: "role" },
  { name: "EMAIL", uid: "email" },
  { name: "ACTIONS", uid: "actions" },
];

export default function Users(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data } = useGetUsers({});
  const filteredUserData = data?.data.reduce((acc: UserProps[], user) => {
    if ("email" in user) {
      return [...acc, user];
    }
    return acc;
  }, []);

  const handleAddNewClick = () => {
    onOpen();
  };

  return (
    <div className="w-full h-dvh flex justify-center">
      <CreateUserModal isOpen={isOpen} onModalClose={onClose} />

      <div className="p-4 max-w-[1268px] flex flex-[0_0_100%] gap-3">
        <Table
          aria-label="user table"
          selectionMode="single"
          selectionBehavior="replace"
          topContent={
            <div className="flex flex-col gap-4">
              <div className="flex gap-1 self-end">
                <Button color="primary" onClick={handleAddNewClick}>
                  Add New User
                </Button>
              </div>
            </div>
          }
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody
            items={filteredUserData}
            emptyContent={"No rows to display."}
          >
            {(item) => (
              <TableRow key={item._id}>
                {(columnKey) => (
                  <TableCell>
                    <UserItem
                      user={item}
                      columnKey={columnKey as keyof UserProps | "actions"}
                    />
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
