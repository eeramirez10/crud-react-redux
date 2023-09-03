import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DAFAULT_STATE: UserState[] = [
	{
		id: "1",
		name: "Yazman Rodriguez",
		email: "yazmanito@gmail.com",
		github: "yazmanito",
	},
	{
		id: "2",
		name: "John Doe",
		email: "leo@gmail.com",
		github: "leo",
	},
	{
		id: "3",
		name: "Haakon Dahlberg",
		email: "haakon@gmail.com",
		github: "haakon",
	},
];

export type UserId = string;
export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserState extends User {
	id: UserId;
}

const initialState: UserState[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");

	return persistedState ? JSON.parse(persistedState).users : DAFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default usersSlice.reducer;

export const { deleteUserById, addNewUser } = usersSlice.actions;
