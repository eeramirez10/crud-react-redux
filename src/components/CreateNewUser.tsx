import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions";

export const CreateNewUser = () => {
	const { handleAddUser } = useUserActions();

	const hadleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);

		const newUser = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			github: formData.get("github") as string,
		};

		handleAddUser(newUser);
	};

	return (
		<Card style={{ marginTop: "16px" }}>
			<Title> Create New User </Title>

			<form onSubmit={hadleSubmit} className="">
				<TextInput placeholder="Aqui el nombre" name="name" />
				<TextInput placeholder="Aqui el email" name="email" />
				<TextInput placeholder="Aqui el usuario de Github" name="github" />
				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Crear Usuario
					</Button>
				</div>
			</form>
		</Card>
	);
};
