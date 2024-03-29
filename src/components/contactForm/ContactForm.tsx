"use client";
import React, { useState } from "react";

function ContactForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		message: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
		setFormData({
			firstName: "",
			lastName: "",
			phone: "",
			email: "",
			message: "",
		});
	};

	return (
		<form action="mailto:lavoiedubienetre@outlook.com" method="post" encType="text/plain" onSubmit={handleSubmit} className="max-w-md mx-auto mb-4 bg-tr shadow-md rounded-lg space-y-4">
			<div className="mb-4">
				<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
					Nom
				</label>
				<input
					type="text"
					name="lastName"
					id="lastName" // Assurez-vous que l'attribut id correspond à l'attribut htmlFor du label
					value={formData.lastName}
					onChange={handleChange}
					placeholder="Nom"
					required
					className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
				/>
			</div>

			<div className="mb-4">
				<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
					Téléphone
				</label>
				<input
					type="tel"
					name="phone"
					id="phone"
					value={formData.phone}
					onChange={handleChange}
					placeholder="Téléphone"
					required
					className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
				/>
			</div>

			<div className="mb-4">
				<label htmlFor="email" className="block text-sm font-medium text-gray-700">
					Email
				</label>
				<input
					type="email"
					name="email"
					id="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Email"
					required
					className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
				/>
			</div>

			<div className="mb-4">
				<label htmlFor="message" className="block text-sm font-medium text-gray-700">
					Message
				</label>
				<textarea
					name="message"
					id="message"
					value={formData.message}
					onChange={handleChange}
					placeholder="Votre message ici..."
					required
					className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700 h-32 resize-none"
				/>
			</div>

			<button type="submit" className="px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-opacity-50">
				Envoyer
			</button>
		</form>
	);
}

export default ContactForm;
