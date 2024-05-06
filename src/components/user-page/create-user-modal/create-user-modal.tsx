import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

type Props = {
  isOpen: boolean;
  onModalClose: () => void;
};

export function CreateUserModal({ isOpen, onModalClose }: Props): JSX.Element {
  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onModalClose} size="3xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Create new User
            </ModalHeader>
            <ModalBody>
              <div className="grid max-sm:grid-cols-1 sm:grid-cols-2  justify-center gap-3 mt-8">
                <Input
                  type="text"
                  label="First name"
                  placeholder="Enter your first name"
                />
                <Input
                  type="text"
                  label="Last Name"
                  placeholder="Enter your last name"
                />
              </div>
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
