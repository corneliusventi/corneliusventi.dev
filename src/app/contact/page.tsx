import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-8 xl:flex-row xl:justify-start">
      <div className="flex w-full flex-col items-center gap-4 text-center xl:items-start xl:gap-8 xl:text-left">
        <h2 className="text-3xl font-black uppercase xl:text-6xl">Contact</h2>
        <ContactForm />
      </div>
    </main>
  );
}
