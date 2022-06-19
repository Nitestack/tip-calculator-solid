import Calculator from "./components/Calculator";
import Header from "./components/Header";

function App() {
    return (
        <div class="App bg-custom-light-grayish-cyan">
            <div class="flex items-center justify-center min-h-screen w-full px-0 p-5 sm:p-10 lg:p-14 lg:px-60 flex-col space-y-10 lg:space-y-20">
                <Header />
                <Calculator />
            </div>
        </div>
    );
};

export default App;
