import { User, UserId, addNewUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const handleDelete = (id: UserId) => dispatch(deleteUserById(id));

	const handleAddUser = (user: User) => {
		dispatch(addNewUser(user));
	};

	return {
		handleDelete,
		handleAddUser,
	};
};
