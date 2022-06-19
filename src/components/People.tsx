import type { ParentComponent } from "solid-js";
import { createSignal } from "solid-js";
import PersonIcon from "../icon-person.svg";
import { setPeople, peopleInput, setPeopleInput } from "./Calculator";

const People: ParentComponent = () => {
    const [error, setError] = createSignal("");
    function onBillChange() {
        return (ev: InputEvent & { currentTarget: HTMLInputElement; target: Element; }) => {
            const value = ev.currentTarget.value;
            setPeopleInput(value);
            const newPeople = parseFloat(value);
            setError("");
            if (!isNaN(newPeople) && newPeople > 0) setPeople(newPeople);
            else setError("Please enter a valid number");
        };
    };
    return (
        <>
            <div class="flex items-center">
                <p class="basis-1/2 text-left text-custom-grayish-cyan mt-5"> Number of People </p>
                {error() && <p class="basis-1/2 text-right text-red-600 mt-5"> {error()} </p>}
            </div>
            <div class={(error() ? "border border-solid border-red-600" : "") + " relative flex items-center mt-2 lg:mt-7 rounded-lg bg-custom-light-grayish-cyan py-2 px-4 shadow-lg"}>
                <div class="flex-none">
                    <img src={PersonIcon} />
                </div>
                <div class="flex-1">
                    <input placeholder="1" value={peopleInput()} type="number" class="caret-custom-strong-cyan text-end bg-transparent text-3xl text-custom-very-dark-cyan p-1 rounded-lg w-full" min={0} minLength={1} onInput={onBillChange()} />
                </div>
            </div>
        </>
    );
};
export default People;