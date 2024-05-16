import { MainContent } from '@widgets/main-content';
import { Header } from "@widgets/header";
import { OrderContent } from '@widgets/order-content';

export function MainPage() {
    return (
        <>
            <Header />
            <main>
                <MainContent />
                <OrderContent />
            </main>
        </>
    )
}