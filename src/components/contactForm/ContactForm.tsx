"use client"
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
			<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
				Nom
			</label>
			<input
				type="text"
				name="lastName"
				value={formData.lastName}
				onChange={handleChange}
				placeholder="Nom"
				required
				className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
			/>
			<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
				Téléphone
			</label>
			<input
				type="tel"
				name="phone"
				value={formData.phone}
				onChange={handleChange}
				placeholder="Téléphone"
				required
				className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
			/>
			<label htmlFor="email" className="block text-sm font-medium text-gray-700">
				Email
			</label>
			<input
				type="email"
				name="email"
				value={formData.email}
				onChange={handleChange}
				placeholder="Email"
				required
				className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
			/>
			<label htmlFor="message" className="block text-sm font-medium text-gray-700">
				Message
			</label>
			<textarea
				name="message"
				value={formData.message}
				onChange={handleChange}
				placeholder="Votre message ici..."
				required
				className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700 h-32 resize-none"
			/>
			<button type="submit" className="px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-opacity-50">
				Envoyer
			</button>
		</form>
	);
}

export default ContactForm;
