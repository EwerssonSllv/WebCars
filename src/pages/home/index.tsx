import { Container } from "../../components/container";

export function Home() {
    return (
        <Container>
            <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2 ">
                <input className="w-full border-2 h-9 px-3 outline-none" placeholder="Ex: Audi..." />
                <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg">Search</button>
            </section>
            <h1 className="font-bold text-center mt-6 text-2xl mb-4">New and used cars!</h1>
            <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <section className="w-full bg-white rounded-lg">
                    <img className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all" src="https://www.hightorque.com.br/wp-content/uploads/2022/08/645x387xFiat-Pulse-1_edited-1024x614.jpg.pagespeed.ic.baBIJPzzfw.jpg" alt="Fiat Pulse" />
                    <p className="font-bold mt-1 mb-2 px-2">Fiat Pulse</p>
                    <div className="flex flex-col px-2">
                        <span className="text-zinc-700 mb-6">2022/2022 | 0KM</span>
                        <strong className="text-black font-medium text-xl ">R$ 130,000.00 </strong>
                    </div>
                    <div className="w-full h-px bg-slate-200 my-2"></div>
                    <div className="px-2 pb-2"><span className="text-zinc-700">João Pessoa - PB</span></div>
                </section>

                
            </main>
        </Container>
    )
}