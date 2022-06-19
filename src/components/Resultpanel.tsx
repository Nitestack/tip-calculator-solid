import type { ParentComponent } from "solid-js";
import { tip, bill, people, setBill, setPeople, setTip, setBillInput, setPeopleInput, setTipInput } from "./Calculator";

const ResultPanel: ParentComponent = () => {
    const tipPrice = () => (bill() / people()) * (tip() / 100);
    function onReset() {
        return () => {
            setBill(0);
            setPeople(1);
            setTip(0);
            setBillInput("0");
            setPeopleInput("1");
            setTipInput("");
        };
    };
    return (
        <div class="flex flex-col justify-center space-y-5 rounded-xl bg-custom-very-dark-cyan p-5 lg:p-8 lg:pt-10 h-full w-full shadow-lg">
            <div class="basis-1/3 lg:basis-3/12 grid grid-cols-2 lg:grid-cols-4 items-center">
                <div>
                    <p class="text-custom-white">Tip Amount</p>
                    <p class="text-sm text-custom-dark-grayish-cyan">/ person</p>
                </div>
                <p class="text-3xl lg:text-5xl text-custom-strong-cyan text-right justify-end col-span-1 lg:col-span-3"> {tipPrice().toFixed(2)} </p>
            </div>
            <div class="basis-1/3 lg:basis-3/12 grid grid-cols-2 lg:grid-cols-4 items-center">
                <div>
                    <p class="text-custom-white">Total</p>
                    <p class="text-sm text-custom-dark-grayish-cyan">/ person</p>
                </div>
                <p class="text-3xl lg:text-5xl text-custom-strong-cyan text-right justify-end col-span-1 lg:col-span-3"> {(tipPrice() + bill() / people()).toFixed(2)} </p>
            </div>
            <div class="hidden lg:block lg:basis-5/12"></div>
            <div class="basis-1/3 lg:basis-1/12 flex-shrink flex items-center justify-center w-full">
                <button disabled={(!tip() || tip() <= 0) && (!bill() || bill() <= 0) && (!people() || people() <= 1)} onClick={onReset()} class="disabled:bg-custom-dark-grayish-cyan rounded-lg bg-custom-strong-cyan text-custom-very-dark-cyan w-full py-3">RESET</button>
            </div>
        </div>
    );
};
export default ResultPanel;