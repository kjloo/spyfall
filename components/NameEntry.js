import React, { useState, useEffect } from "react";
import Router from "next/router";
import { withTranslation } from "../i18n";

const NameEntry = ({ t, onNameEntry, gameCode, socket }) => {
	const [name, setName] = useState("");

	// if dev game, pick random name and submit
	useEffect(() => {
		if (gameCode === "ffff") {
			const randFourDig = Math.floor(1000 + Math.random() * 9000);
			onNameEntry(randFourDig);
		}
	}, []);

	const handleNameChange = ({ target: { value } }) => setName(value);
	const handleJoin = (e) => {
		e.preventDefault();
		onNameEntry(name);
	};

	const handleBack = (e) => {
		e.preventDefault();

		//prevents a redirect back to /[gameCode]
		socket.off("disconnect");

		Router.push("/");
	};

	return (
		<div className="main-menu">
			<h3>{t("ui.welcome to spyfall")}</h3>

			<hr />
			<form id="join-game">
				<div>
					<label htmlFor="player-name">{t("ui.enter your name")}</label>
					<input
						type="text"
						id="player-name"
						placeholder="Use your real name!"
						value={name}
						onChange={handleNameChange}
					/>

					<div className="button-container">
						<button type="submit" onClick={handleJoin}>
							{t("ui.join")}
						</button>
						<button className="btn-leave" onClick={handleBack}>
							{t("ui.back")}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default withTranslation("common")(NameEntry);
