'use client'
import { useState, useEffect, FC } from 'react';

interface BuyButtonProps {
    productId: string;
}

const BuyButton: FC<BuyButtonProps> = ({ productId }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isPurchased, setIsPurchased] = useState(false);

    useEffect(() => {
        if (isPurchased) {
            setIsLoading(false);
        }
    }, [isPurchased]);

    const handleBuyClick = async () => {
        setIsLoading(true);
        const response = await fetch(`/api/products/${productId}/buy`, {
            method: 'POST',
        });
        if (response.ok) {
            setIsPurchased(true);
        }
    };

    return (
        <button onClick={handleBuyClick} disabled={isLoading || isPurchased} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            {isLoading ? 'Loading...' : isPurchased ? 'Purchased!' : 'Buy Now'}
        </button>
    );
};

export default BuyButton;
