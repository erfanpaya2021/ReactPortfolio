import { FormEvent, MutableRefObject, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import tw from "twin.macro";

import { Container, SectionTitle } from "../common";

const Contact = () => {
    const formRef = useRef() as MutableRefObject<HTMLFormElement>;

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [loading, setLoading] = useState(false);

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (
            name.trim().length === 0 ||
            email.trim().length === 0 ||
            message.trim().length === 0
        )
            return;

        setLoading(true);
        emailjs
            .sendForm(
                import.meta.env.VITE_APP_SERVICE_ID,
                import.meta.env.VITE_APP_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_USER_ID,
            )
            .then(res => {
                setName("");
                setEmail("");
                setMessage("");
                setLoading(false);
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    return (
        <section id="contact" tw="bg-slate-800 py-16">
            <Container>
                <SectionTitle>
                    <span tw="text-red-600">Contact</span>&nbsp;Me.
                </SectionTitle>
                <div tw="flex justify-center text-slate-400 mt-12">
                    <form
                        onSubmit={submitHandler}
                        ref={formRef}
                        tw="flex flex-col w-[90%] max-w-lg gap-4"
                    >
                        <input
                            tw="w-full p-4 bg-gray-700 bg-opacity-80 text-sm sm:text-base shadow-md outline-none"
                            type="text"
                            placeholder="Enter your name"
                            name="user_email"
                            autoComplete="off"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                        <input
                            tw="w-full p-4 bg-gray-700 bg-opacity-80 text-sm sm:text-base shadow-md outline-none"
                            type="email"
                            placeholder="Enter your email"
                            name="user_name"
                            autoComplete="off"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                        <textarea
                            tw="w-full min-h-[12rem] p-4 bg-gray-700 bg-opacity-80 text-sm sm:text-base shadow-md outline-none"
                            placeholder="Enter your message"
                            name="message"
                            value={message}
                            onChange={event => setMessage(event.target.value)}
                        ></textarea>
                        <button
                            disabled={loading}
                            tw="py-2 bg-gray-700 bg-opacity-80 text-sm sm:text-base text-slate-400 border border-gray-700 hover:border-red-600 disabled:cursor-not-allowed"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
