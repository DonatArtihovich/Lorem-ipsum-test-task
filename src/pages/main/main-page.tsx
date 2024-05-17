import { MainContent } from '@widgets/main-content';
import { Header } from "@widgets/header";
import { OrderContent } from '@widgets/order-content';
import { Footer } from '@widgets/footer';

export function MainPage() {
    return (
        <>
            <Header />
            <main>
                <MainContent />
                <OrderContent />
            </main>
            <Footer />
        </>
    )
}