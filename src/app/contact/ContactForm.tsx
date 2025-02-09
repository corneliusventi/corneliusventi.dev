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
        className="border-brand-light text-brand-light placeholder:text-brand-light w-full border-b bg-transparent px-2 py-1 text-base placeholder:text-base focus:ring-0 focus:outline-hidden"
        placeholder="Name"
        required
        onChange={(event) => setName(event.target.value)}
      />
      <input
        value={email}
        type="email"
        className="border-brand-light text-brand-light placeholder:text-brand-light w-full border-b bg-transparent px-2 py-1 text-base placeholder:text-base focus:ring-0 focus:outline-hidden"
        placeholder="Email"
        required
        onChange={(event) => setEmail(event.target.value)}
      />
      <textarea
        value={message}
        className="border-brand-light text-brand-light placeholder:text-brand-light h-20 w-full resize-none border-b bg-transparent px-2 py-1 text-base placeholder:text-base focus:ring-0 focus:outline-hidden"
        placeholder="Message"
        required
        onChange={(event) => setMessage(event.target.value)}
      />
      <button
        type="submit"
        className="bg-brand-light text-brand-dark self-start rounded-md px-4 py-1 text-xl font-medium"
      >
        Submit
      </button>
    </form>
  );
}
