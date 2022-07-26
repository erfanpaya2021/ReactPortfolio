import React, { useState, useEffect, FunctionComponent } from "react";

const DEFAULT_MS = 30;

export interface Props {
    text: string | string[];
    speed?: number;
    loop?: boolean;
    random?: number;
    delay?: number;
    cursor?: boolean;
    onFinished?: Function;
    onStart?: Function;
}

const Typewriter: FunctionComponent<Props> = ({
    text,
    speed = DEFAULT_MS,
    loop = false,
    random = DEFAULT_MS,
    delay = DEFAULT_MS,
    cursor = true,
    onFinished = () => {},
    onStart = () => {},
}) => {
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    if (!Array.isArray(text)) text = [text];

    useEffect(() => {
        setTimeout(() => {
            if (currentTextIndex === 0) onStart();
            if (currentTextIndex < text[currentStringIndex].length) {
                setCurrentTextIndex(currentTextIndex + 1);
            } else {
                if (currentStringIndex < text.length - 1) {
                    setTimeout(() => {
                        setCurrentTextIndex(0);
                        setCurrentStringIndex(currentStringIndex + 1);
                    }, delay);
                } else {
                    if (loop) {
                        setTimeout(() => {
                            setCurrentTextIndex(0);
                            setCurrentStringIndex(0);
                        }, delay);
                    } else {
                        onFinished();
                    }
                }
            }
        }, speed + Math.random() * random);
    });

    return (
        <span className="text-red-600 text-inherit">
            {text[currentStringIndex].substring(0, currentTextIndex)}
            <span className=" animate-cursor">{cursor && "▎"}</span>
        </span>
    );
};

export default Typewriter;
