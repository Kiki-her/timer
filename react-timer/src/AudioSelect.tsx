import React, {useState} from "react";
import useSound from "use-sound";
import Duck from "./assets/アヒルが大笑い.mp3";
import LevelUp from "./assets/レベルアップ.mp3";
import Trumpet from "./assets/突撃ラッパ.mp3";
import Pigeon from "./assets/鳩時計.mp3";
import { SingleValue, ActionMeta, InputActionMeta } from "react-select";


export default function AudioSelect() {
    const [playDuck] = useSound(Duck);
    const [playLevelUp] = useSound(LevelUp);
    const [playTrumpet] = useSound(Trumpet);
    const [playPigeon] = useSound(Pigeon);


    return (
        <><h1>Audio Select</h1>
        <section>
            <button onClick={() => playDuck()}>アヒルの大笑い</button>
            <button onClick={() => playLevelUp()}>レベルアップ</button>
            <button onClick={() => playTrumpet()}>突撃ラッパ</button>
            <button onClick={() => playPigeon()}>鳩時計</button>
        </section></>
    )
}
