import type { ParentComponent } from "solid-js";

const Header: ParentComponent = () => {
    return (
        <div class="text-3xl flex items-center justify-center flex-col text-custom-dark-grayish-cyan tracking-widest">
            <h1> SPLI </h1>
            <h1> TTER </h1>
        </div>
    );
};
export default Header;