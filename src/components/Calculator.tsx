import { createSignal, ParentComponent } from "solid-js";
import Bill from "./Bill";
import People from "./People";
import ResultPanel from "./Resultpanel";
import Tip from "./Tip";

export const [bill, setBill] = createSignal(0);
export const [tip, setTip] = createSignal(0);
export const [people, setPeople] = createSignal(1);
export const [billInput, setBillInput] = createSignal("");
export const [tipInput, setTipInput] = createSignal("");
export const [peopleInput, setPeopleInput] = createSignal("");

const Calculator: ParentComponent = () => {
    return (
        <div class="p-7 lg:p-10 bg-custom-white shadow-xl rounded-3xl grid lg:grid-cols-2">
            <div>
                <Bill />
                <Tip />
                <People />
            </div>
            <div class="mt-5 lg:m-0 lg:ml-7">
                <ResultPanel />
            </div>
        </div>
    );
};
export default Calculator;