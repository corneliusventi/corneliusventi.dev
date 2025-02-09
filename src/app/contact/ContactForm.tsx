"use client";

import { FormEventHandler, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    const body = `
      Name: ${name}%0D%0A
      Message: ${message}
    `;

    open(`mailto:corneliusventi@gmail.com?from=${email}&body=${body}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      className="flex w-full flex-col gap-8 xl:max-w-md"
      onSubmit={handleSubmit}
    >
      <input
        value={name}
        type="text"
        className="w-full border-b border-brand-light bg-transparent px-2 py-1 text-base text-brand-light placeholder:text-base placeholder:text-brand-light focus:outline-none focus:ring-0"
        placeholder="Name"
        required
        onChange={(event) => setName(event.target.value)}
      />
      <input
        value={email}
        type="email"
        className="w-full border-b border-brand-light bg-transparent px-2 py-1 text-base text-brand-light placeholder:text-base placeholder:text-brand-light focus:outline-none focus:ring-0"
        placeholder="Email"
        required
        onChange={(event) => setEmail(event.target.value)}
      />
      <textarea
        value={message}
        className="h-20 w-full resize-none border-b border-brand-light bg-transparent px-2 py-1 text-base text-brand-light placeholder:text-base placeholder:text-brand-light focus:outline-none focus:ring-0"
        placeholder="Message"
        required
        onChange={(event) => setMessage(event.target.value)}
      />
      <button
        type="submit"
        className="self-start rounded-md bg-brand-light px-4 py-1 text-xl font-medium text-brand-dark"
      >
        Submit
      </button>
    </form>
  );
}
