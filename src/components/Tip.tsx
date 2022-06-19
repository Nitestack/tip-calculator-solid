import { For, ParentComponent, createSignal } from "solid-js";
import { tip, setTip, tipInput, setTipInput } from "./Calculator";

const Tip: ParentComponent = () => {
    const [error, setError] = createSignal("");
    function onCustomTipChange() {
        return (ev: InputEvent & { currentTarget: HTMLInputElement; target: Element; }) => {
            const value = ev.currentTarget.value;
            setTipInput(value);
            const tipPercentage = parseFloat(value);
            setError("");
            if (!isNaN(tipPercentage) && tipPercentage >= 0) setTip(tipPercentage);
            else setError("Please enter a valid percentage");
        };
    };
    return (
        <>
            <div class="flex items-center">
                <p class="text-custom-grayish-cyan mt-5"> Select Tip % </p>
                {error() && <p class="basis-3/4 text-right text-red-600 mt-5 lg:whitespace-nowrap"> {error()} </p>}
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center mt-2 lg:mt-7 rounded-lg gap-4">
                <For each={[5, 10, 15, 25, 50, 0]}>
                    {tipPercentage => {
                        if (tipPercentage != 0) return (
                            <button onClick={() => setTip(tipPercentage)} class={(tip() == tipPercentage ? "shadow-lg bg-custom-strong-cyan text-custom-very-dark-cyan" : "bg-custom-very-dark-cyan text-custom-white") + " hover:bg-custom-grayish-cyan hover:text-custom-very-dark-cyan flex text-3xl justify-center items-center px-7 py-2 rounded-lg"}>{tipPercentage}%</button>
                        );
                        else return (
                            <div class={(error() ? "border border-solid border-red-600" : "") + " shadow-lg flex text-custom-very-dark-cyan justify-center items-center rounded-lg bg-custom-light-grayish-cyan"}>
                                <input value={tipInput()} onInput={onCustomTipChange()} class="caret-custom-strong-cyan w-full flex text-custom-very-dark-cyan text-3xl text-end items-center px-2 lg:px-3 py-2 rounded-lg bg-custom-light-grayish-cyan" type="number" placeholder="Custom" minLength={1} maxLength={2} />
                                <div class="text-3xl"> % </div>
                            </div>
                        );
                    }}
                </For>
            </div>
        </>
    );
};
export default Tip;